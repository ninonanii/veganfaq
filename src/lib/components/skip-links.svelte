<ul class="skip-links" aria-label="Skip links">
	<li><a href="#main">Skip to main content</a></li>
	<li><a href="#footer">Skip to footer</a></li>
</ul>

<style>
	ul {
		position: fixed;
		top: 0;
		left: 0;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		transform: translateY(-100%);
		transition: transform var(--transition);
		z-index: var(--layer-skip-link);
		background-color: var(--bg-1);

		&:focus-within {
			transform: translateY(0);
		}
	}
	li {
		display: flex;
	}
	a {
		padding: var(--size-3);
		color: var(--text-1);
	}
</style>
