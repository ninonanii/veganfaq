<script>
	import { languageData } from '$lib/scripts/stores/language.js'
</script>

<nav aria-label={$languageData?.labels?.mainNav}><div class="container">Nav</div></nav>

<style>
	nav {
		margin-block-end: var(--size-3);
		padding: var(--size-3) 0;
		display: flex;
		align-items: start;
		gap: var(--size-3);
		background-color: var(--bg-1);
	}
</style>
