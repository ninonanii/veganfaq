<script>
	export let name
</script>

{#await import(`../../icons/${name}.svelte`)}
	<div class="icon-wrapper" aria-hidden="true" />
{:then { default: IconComponent }}
	<div class="icon-wrapper" role="img" aria-label={name}>
		<svelte:component this={IconComponent} />
	</div>
{/await}

<style>
	.icon-wrapper {
		--size: 1.5em;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		width: var(--size);
		height: var(--size);
	}

	.icon-wrapper > :global(svg) {
		width: 100%;
		height: 100%;
	}
</style>
