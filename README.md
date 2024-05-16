# Reproduction repo for @astrojs/starlight issue

## Issue: mdx files no longer properly combine script tags present in nested astro Components (build mode only)

This repo contains a minimal reproduction project for issue [#1883](https://github.com/withastro/starlight/issues/1883)

## Issue description

The issue occurs in the context of an Astro component inserted in a Starlight `mdx` file.

In this context, `script` tags present in the slot of an Astro component are no longer present in `build` artefacts. 

The issue only occurs when building the project. 

The issue might be linked to the MDX context, since the issue does not occur when the Astro components are present on an Astro Page.

This behavior appears in Astro versions >= 4.8.0. It does not occur in previous versions.


### How to use this repo.

Install dependencies and run the following command:

```sh
npm run build && npm run preview
```

When the preview server is running, open a browser at `/`. You will then see the contents produced from file `src/pages/index.astro`. 

Notice that the Astro component named `Example.astro` runs the content of its `script` tag. In other words the square becomes blue and we see the string "running in example" in the console. 

However if we navigate to `/issue` which contains the same component in the context of a Starlight `mdx` file (`src/content/docs/test.mdx`), we can notice that the script tag is no longer present and its contents are not executed.
