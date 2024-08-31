<script>
	export let data, lang

	import { languageData } from '$lib/scripts/stores/language.js'

	import Icon from '$lib/components/common/icon.svelte'
	import Toasts from '$lib/components/toasts.svelte'

	let toastsComp

	languageData.set(data.data)

	const t = (key) => $languageData?.[key] || key

	const labels = $languageData

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

	const questionToId = (question) => {
		const regex = /[^\w\s]/gi

		return question.replace(regex, '').toLowerCase().split(' ').join('-')
	}

	const getQuestionLink = (question) => {
		return window.location.origin + window.location.pathname + `#${questionToId(question)}`
	}

	const copyQuestionToClipboard = (question) => {
		navigator.clipboard
			.writeText(getQuestionLink(question))
			.then(() => {
				console.log('Copied: ', getQuestionLink(question))
				toastsComp.toast(labels.labels.copiedToClipboard)
			})
			.catch((err) => {
				console.error('Failed to copy: ', err)
				toastsComp.toast('Failed to copy: ' + err)
			})
	}
</script>

<svelte:head>
	{@html structuredDataString}
</svelte:head>

<div class="container">
	<h1>{labels.welcomeMessage}</h1>

	<div class="articles">
		{#each faqs as faq}
			<article class="article" id={questionToId(faq.question)}>
				<div class="article-header">
					<h2 class="article-title">{faq.question}</h2>
					<div class="article-header-icons">
						<a
							href={getPerplexityUrl(faq.question)}
							target="_blank"
							aria-label={labels.labels.perplexityLink}
							title={labels.labels.perplexityLink}><Icon name="perplexity" /></a
						>
						<button
							aria-label={labels.labels.shareLink}
							title={labels.labels.shareLink}
							onclick={() => copyQuestionToClipboard(faq.question)}
							><Icon name="clipboard-link" /></button
						>
					</div>
				</div>

				<p>{@html faq.answer}</p>

				{#if faq.youtubeVideos}
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
				{/if}
				{#if faq.links}
					{#each faq.links as link}
						<a href={link} target="_blank">{link}</a>
					{/each}
				{/if}
			</article>
		{/each}
	</div>
</div>

<Toasts bind:this={toastsComp} />

<style>
	h1 {
		margin-block-end: var(--size-10);
	}

	.articles {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--size-8);
	}

	.article {
		scroll-margin: var(--size-8);
		display: grid;
		gap: var(--size-6);
	}

	.article-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-3);
	}

	.article-title {
		margin: 0;
	}

	.article-header-icons {
		display: flex;
		gap: var(--size-3);
	}

	.article-header-icons button {
		color: var(--brand);
	}

	.article-header-icons a {
		display: inline-flex;
	}
</style>
