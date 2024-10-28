---
title: Speedup
description: How I optimized this site (2024-10-27 edition)
date: 2024-10-20
tags: site
---
## Why.

The reason for trying to make this site as lean and small as possible is simple; Try the best in my ability to make a website that is lean and fast yet, has good DX on my side and that actually looks quite decent. And the rewrites (that are still continuing), in my opinion does withhold to my claims.

### How.

This is mainly a WIP, and will probably stay a WIP. But here are some things I did:

- Fix some HTTP headers to manage cache better. (Don't cache HTML files)
- Remove shadcn-svelte (or any UI library).
- Remove TailwindCSS to manage the CSS bundle.
- Disable CSR to have _zero_ Javascript loaded.

### Goals from now on.

- I want to keep it under <10kb (atleast on the main page)
- Remove unneeded stuff
- Possibly fix some backend stuff (or am I stupid?)

