export const prerender = true

// give data prop to page
/** @type {import('./$types').PageLoad} */
export async function load() {
	// Load language-specific JSON data
	const data = (await import(`$lib/locales/en.json`)).default

	return {
		data
	}
}
