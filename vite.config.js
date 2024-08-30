import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { Mode, plugin as markdown } from 'vite-plugin-markdown' // see https://stackoverflow.com/a/73111733 and https://github.com/hmsk/vite-plugin-markdown

export default defineConfig({
	plugins: [sveltekit(), markdown({ mode: [Mode.HTML] })]
})
