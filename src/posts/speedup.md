---
title: Speedup
description: How I optimized this site
date: '2024-10-20'
lastUpd: '2024-11-13'
published: true
tags:
- site
---

## Table of Contents

## Why.

The reason for trying to make this site as lean and small as possible is simple; Try the best in my ability to make a website that is lean and fast yet, has good DX on my side and that actually looks quite decent. And the rewrites (that are still continuing), in my opinion does withhold to my claims.

### How.

This is mainly a WIP, and will probably stay a WIP. But here are some things I did:

- Fix some HTTP headers to manage cache better. (Don't cache HTML files)
- Remove shadcn-svelte (or any UI library for that matter. [shadcn-svelte is known to have a quite big bundle size (atleast in dev)](https://old.reddit.com/r/sveltejs/comments/1e0nuk8/why_does_using_shadcnsvelte_bitsui_require/)).
- Remove TailwindCSS to manage the CSS bundle.
- Disable CSR to have _zero_ Javascript loaded.

### Goals from now on.

- I want to keep it under 10kb (atleast on the main page). Currently it's 5kb.
- Only keep the bare minimum necessary. No bloat.
- Possibly fix some backend stuff (or am I stupid?)

### Is it worth it?

The [average internet connection](https://www.speedtest.net/global-index) right now is 56.76 Mbps, which is more than enough to load my extremely small site (just 3KB gzipped). Even in Yemen, the country with the slowest speeds on the list, it should load in under a second. But at the same time, a question pops up: why? Why make it this small?

The reasoning is simple—because I'm kind of ridiculous. But there's also a point: you don't need a giant bundle of JavaScript framework stuff just to display some basic content. In this case a static site that shows some posts. You really don't. And I wanted to see just how small I could make the site while keeping CSS styling and other essentials intact. Also, [this blog post](https://www.jochen.fyi/posts/road-to-512kb/) has something to do with it.
