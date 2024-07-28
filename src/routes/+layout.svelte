<script>
	import '$lib/styles/global.css'

	import { onNavigate } from '$app/navigation'
	import { languageData } from '$lib/scripts/stores/language.js'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<svelte:head>
	<title>{$languageData?.meta?.title}</title>
	<meta name="description" content={$languageData?.meta?.description} />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
</svelte:head>

<slot />
