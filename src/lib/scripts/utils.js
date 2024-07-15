import { locales, defaultLocale } from '$lib/config'

// if the pathname starts with any locale, use it. otherwise use the default
export const get_lang = (requestEvent) => {
	const pathname = new URL(requestEvent.url).pathname
	const locale = pathname.split('/')[1]
	return locales.includes(locale) ? locale : defaultLocale
}
