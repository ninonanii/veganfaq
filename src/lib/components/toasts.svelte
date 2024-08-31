<script>
	export let toastTime = 3000

	export function toast(message) {
		toasts = [message, ...toasts]
		setTimeout(() => {
			toasts = toasts.slice(1)
		}, toastTime)
	}

	let toasts = []
</script>

<div class="toasts">
	{#each toasts as toast}
		<div class="toast">{toast}</div>
	{/each}
</div>

<style>
	.toasts {
		position: fixed;
		bottom: var(--size-3);
		left: var(--size-3);
		z-index: var(--layer-4);

		display: grid;
		gap: var(--size-3);
	}

	.toast {
		padding: var(--size-3);
		color: var(--text-1);
		background-color: var(--bg-1);
	}
</style>
