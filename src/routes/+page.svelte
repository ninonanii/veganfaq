<script>
	// let the user select a language
	import { locales } from '$lib/config'

	export let data

	const enData = data.data
</script>

<svelte:head>
	<title>{enData?.meta?.title} - Pick a language</title>
	<meta name="description" content={enData?.meta?.description} />
</svelte:head>

<h1>Select a language</h1>

<ul>
	{#each locales as locale}
		<li>
			<a href="/{locale}">{locale}</a>
		</li>
	{/each}
</ul>
