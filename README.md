# about

coming soon

# License

MIT. see license file.

# tech

## tech stack

this project uses a minimal tech stack with sveltekit to get components and a page-based routing system without shipping a framework to the client. it purposfully does not use tailwindcss to avoid a complicated settings file (even though it's great for saving characters on common utilities) - instead it uses css variables (with [open-props](https://open-props.style/) as a starting point) for the design system to keep it simple and use regular css for styling. styles are scoped to the component by default. it also uses [postcss](https://postcss.org/) for some convenience features like custom media queries.

all styles use layers to be easily overridable by the user if they wish to customize

## custom media queries

Currently one step ahead of [the CSS spec](https://drafts.csswg.org/mediaqueries-5/#at-ruledef-custom-media), this project already uses custom media queries by transforming them via postcss. all of them are defined in a single file and can be used in any component or style file. the idea is from open-props, but we redefine the queries to be able to change them instead of importing fixed values.

## icons

uses icons from [iconify](https://icon-sets.iconify.design/). they are downloaded to make them available offline as well. they do not use iconify for svelte to avoid using the iconify api because of its [downsides](https://iconify.design/docs/icons/icon-data).

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
