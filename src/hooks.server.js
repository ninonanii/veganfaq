import { get_lang } from '$lib/scripts/utils.js'

/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', get_lang(event))
	})
}
