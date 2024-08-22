import { error } from '@sveltejs/kit'
import { locales } from '$lib/config'

// prerender all routes with existing locales. see https://kit.svelte.dev/docs/page-options#entries
/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return locales.map((locale) => ({
		lang: locale.code
	}))
}

export const prerender = true

// give data prop to page
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const lang = params.lang.toLowerCase()

	// if there is no locale.code the same as lang, throw 404
	if (!locales.find((locale) => locale.code === lang)) {
		error(404, 'Language not found')
	}

	// Load language-specific JSON data
	// const data = (await import(`$lib/locales/${lang}.json`)).default

	// load language-specific markdown data
	const moduleMd = await import(`$lib/locales/${lang}.md`)
	const data = moduleMd.attributes

	return {
		lang: params.lang,
		data,
		params
	}
}
