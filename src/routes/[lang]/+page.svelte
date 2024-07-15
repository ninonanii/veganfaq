<script>
	export let data

	const t = (key) => data.data?.[key] || key
</script>

<h1>{t('welcomeMessage')}</h1>

<p>asd</p>
