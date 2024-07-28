<script>
	export let data, lang

	import { languageData } from '$lib/scripts/stores/language.js'

	languageData.set(data.data)

	const t = (key) => $languageData?.[key] || key

	const faqs = $languageData?.faqs || []

	const getPerplexityUrl = (question) => {
		return `https://perplexity.ai/search?q=${encodeURIComponent(question)}`
	}

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		name: $languageData?.meta?.structuredDataName,
		mainEntity: faqs.map(({ question, answer }) => ({
			'@type': 'Question',
			name: question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: answer
			}
		}))
	}

	const structuredDataString = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	)}<\/script>`
</script>

<svelte:head>
	{@html structuredDataString}
</svelte:head>

<div class="container">
	<h1>{t('welcomeMessage')}</h1>

	{#each faqs as faq}
		<article>
			<h2>{faq.question}</h2>

			<p>
				<a href={getPerplexityUrl(faq.question)} target="_blank">Perplexity</a>
			</p>

			{#each faq.youtubeVideos as video}
				<!--iframe
				width="560"
				height="315"
				src={video}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/-->
			{/each}
			{#each faq.links as link}
				<a href={link}>{link}</a>
			{/each}
		</article>
	{/each}
</div>

<style>
</style>
