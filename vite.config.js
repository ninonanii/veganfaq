import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { Mode, plugin as markdown } from 'vite-plugin-markdown' // see https://stackoverflow.com/a/73111733

export default defineConfig({
	plugins: [sveltekit(), markdown({ mode: [Mode.HTML] })]
})
