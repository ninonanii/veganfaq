<script>
	import { languageData } from '$lib/scripts/stores/language.js'
</script>

<header aria-label={$languageData?.ariaLabels?.mainNav}>
	<div class="container">
		<span>Vegan FAQs</span>

		<nav>
			<a href="/">{$languageData?.labels?.pickLanguage}</a>
		</nav>
	</div>
</header>

<style>
	header {
		margin-block-end: var(--size-3);
		padding: var(--size-3) 0;
		display: flex;
		align-items: start;
		gap: var(--size-3);
		background-color: var(--bg-1);

		@media (--md-n-above) {
			margin-block-end: var(--size-10);
		}
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--size-3);
	}
</style>
