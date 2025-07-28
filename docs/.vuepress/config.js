import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({
	lang: 'en-US',

	title: 'GoHTML',
	description: 'This is from config.js',

	theme: defaultTheme({
		logo: 'https://raw.githubusercontent.com/udan-jayanith/GoHTML-Documentation-Site/905e27fd0e310a58bb0d7bd1f837aa5f27571e0c/assets/media/Transparent%20Black%20version.svg', //navigation bar ico
		navbar: ['/', '/get-started'],
		colorMode: 'light', // set default to light
		colorModeSwitch: false, // hide the toggle
		siteTitle: '',
	}),

	bundler: viteBundler(),
	head: [['link', {rel: 'icon', href: '/favicon.png'}]],
})


