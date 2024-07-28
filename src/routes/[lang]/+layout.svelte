<script>
	import { languageData } from '$lib/scripts/stores/language.js'

	import SkipLinks from '$lib/components/skip-links.svelte'
	import Nav from '$lib/components/nav.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<svelte:head>
	<title>{$languageData?.meta?.title}</title>
	<meta name="description" content={$languageData?.meta?.description} />
</svelte:head>

<SkipLinks />
<div class="page">
	<Nav />
	<main id="main">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.page {
		/* min-height: 100vh; causes scrollbar to appear */
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
