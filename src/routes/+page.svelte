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

<div class="container">
	<h1>Select a language</h1>

	<ul>
		{#each locales as locale}
			<li>
				<a href="/{locale.code}" hreflang={locale.code}
					><span>{locale.emoji}</span><span>{locale.name}</span></a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		padding-block: var(--size-6);
		min-height: 100dvh;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-content: start;
		justify-items: center;
		text-align: center;
	}

	h1 {
		margin-block-end: 1em;
		font-size: var(--font-size-5);
	}

	ul {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--size-3);
	}

	li {
	}

	a {
		display: flex;
		gap: var(--size-3);
		text-decoration: none;
		font-size: var(--font-size-3);
	}
</style>
