import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({
	lang: 'en-US',

	title: 'GoHTML',
	description: 'This is from config.js',

	theme: defaultTheme({
		logo: 'https://raw.githubusercontent.com/udan-jayanith/GoHTML/1bf9fa53f7c9943e636c13befb539e0f95b84d6a/assets/media/Favicon.svg', //navigation bar ico
		navbar: ['/', '/get-started'],
		colorMode: 'light', // set default to light
		colorModeSwitch: false, // hide the toggle
		siteTitle: '',
	}),

	bundler: viteBundler(),
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: 'https://raw.githubusercontent.com/udan-jayanith/GoHTML/1bf9fa53f7c9943e636c13befb539e0f95b84d6a/assets/media/Favicon.svg',
			},
		],
	],
})


