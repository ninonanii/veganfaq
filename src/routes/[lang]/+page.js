import { error } from '@sveltejs/kit'
import { locales } from '$lib/config'

// prerender all routes with existing locales. see https://kit.svelte.dev/docs/page-options#entries
/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return locales.map((locale) => ({
		lang: locale
	}))
}

export const prerender = true

// give data prop to page
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const lang = params.lang.toLowerCase()

	// if lang is not in locales, throw 404
	if (!locales.includes(lang)) {
		error(404, 'Language not found')
	}

	// Load language-specific JSON data
	const data = (await import(`$lib/locales/${lang}.json`)).default

	return {
		lang: params.lang,
		data,
		params
	}
}
