<script>
	// let the user select a language
	import { locales } from '$lib/config'
</script>

<h1>Select a language</h1>

<ul>
	{#each locales as locale}
		<li>
			<a href="/{locale}">{locale}</a>
		</li>
	{/each}
</ul>
