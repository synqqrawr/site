import {
	IdAttributePlugin,
	InputPathToUrlTransformPlugin,
	HtmlBasePlugin,
} from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginFilters from "./_config/filters.js";
import * as lightningcss from "lightningcss";
import eleventyPluginFilesMinifier from "@sherby/eleventy-plugin-files-minifier";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";

const position = {
  false: "push",
  true: "unshift",
}

const renderPermalink = (slug, opts, state, idx) => {
	const space = () =>
		Object.assign(new state.Token("text", "", 0), {
			content: " ",
		});

	const linkTokens = [
		Object.assign(new state.Token("link_open", "a", 1), {
			attrs: [
				["class", opts.permalinkClass],
				["href", opts.permalinkHref(slug, state)],
			],
		}),
		Object.assign(new state.Token("html_block", "", 0), {
			// Edit starts here:
			content: `<span aria-hidden="true" class="header-anchor__symbol">#</span>
      <span class="visually-hidden">Direct link to this section</span>`,
			// Edit ends
		}),
		new state.Token("link_close", "a", -1),
	];

	if (opts.permalinkSpace) {
		linkTokens[position[!opts.permalinkBefore]](space());
	}
	state.tokens[idx + 1].children[position[opts.permalinkBefore]](...linkTokens);
};

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	// Drafts, see also _data/eleventyDataSchema.js
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/",
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	eleventyConfig.setLibrary(
		"md",
		markdownIt({
			html: true,
		})
			.use(markdownItAnchor, {
				permalink: true,
				renderPermalink,
			})
			.use(markdownItAttrs),
	);

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Adds the {% css %} paired shortcode
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
	});
	// Recognize CSS as a "template language"
	eleventyConfig.addTemplateFormats("css");

	// Process CSS with LightningCSS
	eleventyConfig.addExtension("css", {
		outputFileExtension: "css",
		compile: async function (_inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			if (parsed.name.startsWith("_")) {
				return;
			}

			let targets = browserslistToTargets(browserslist("> 0.2% and not dead"));

			return async () => {
				// Switch to the `transform` function if you don't
				// plan to use `@import` to merge files
				let { code } = await bundle({
					filename: inputPath,
					minify: true,
					sourceMap: false,
					targets,
					// Supports CSS nesting
					drafts: {
						nesting,
					},
				});
				return code;
			};
		},
	});
	eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
	// Adds the {% js %} paired shortcode
	eleventyConfig.addBundle("js", {
		toFileDirectory: "dist",
	});

	// Official plugins
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed/feed.xml",
		stylesheet: "pretty-atom-feed.xsl",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 4,
			},
		},
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "async's blog (._.)",
			subtitle: "I write. I publish. I rewrite. Rinse and repeat.",
			base: "https://async.is-a.dev/",
			author: {
				name: "async",
			},
		},
	});

	// Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// File extensions to process in _site folder
		extensions: "html",

		// Output formats for each image.
		formats: ["avif", "webp", "auto"],

		// widths: ["auto"],

		defaultAttributes: {
			// e.g. <img loading decoding> assigned on the HTML tag will override these values.
			loading: "lazy",
			decoding: "async",
		},
	});

	// Filters
	eleventyConfig.addPlugin(pluginFilters);

	eleventyConfig.addPlugin(IdAttributePlugin, {
		// by default we use Eleventy’s built-in `slugify` filter:
		// slugify: eleventyConfig.getFilter("slugify"),
		// selector: "h1,h2,h3,h4,h5,h6", // default
	});

	eleventyConfig.addShortcode("currentBuildDate", () => {
		return new Date().toISOString();
	});

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
}

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	// These are all optional:
	dir: {
		input: "content", // default: "."
		includes: "../_includes", // default: "_includes" (`input` relative)
		data: "../_data", // default: "_data" (`input` relative)
		output: "_site",
	},

	// -----------------------------------------------------------------
	// Optional items:
	// -----------------------------------------------------------------

	// If your site deploys to a subdirectory, change `pathPrefix`.
	// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

	// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
	// it will transform any absolute URLs in your HTML to include this
	// folder name and does **not** affect where things go in the output folder.

	// pathPrefix: "/",
};
