import { locales, defaultLocale } from '$lib/config'

// if the pathname starts with any locale, use it. otherwise use the default
export const get_lang_code = (requestEvent) => {
	const pathname = new URL(requestEvent.url).pathname
	const locale = pathname.split('/')[1]
	return locales.find((l) => l.code === locale) ? locale : defaultLocale.code
}
