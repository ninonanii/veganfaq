<script>
	// see https://kit.svelte.dev/docs/errors
	import { page } from '$app/stores'

	// console.error($page.error.message)
</script>

<h1>{$page.status}</h1>
