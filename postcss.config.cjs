const postcssJitProps = require('postcss-jit-props');
const path = require('path');

// custom media queries. see https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media
const postcssCustomMedia = require('postcss-custom-media');
// inject css that is removed before the final output. needed for the custom media queries
const postcssGlobalData = require('@csstools/postcss-global-data');

module.exports = {
	plugins: [
		postcssJitProps({
			files: [
				path.resolve(__dirname, 'node_modules/open-props/open-props.min.css')
				// path.resolve(__dirname, 'node_modules/open-props/colors-hsl.min.css')
			],
			custom_selector: ':root',
			layer: 'variables'
		}),
		postcssGlobalData({
			// add custom media queries files here
			files: ['src/lib/styles/custom-media-queries.css']
		}),
		postcssCustomMedia(/* pluginOptions */)
	]
};
