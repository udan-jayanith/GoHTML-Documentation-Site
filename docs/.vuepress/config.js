import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({
	lang: 'en-US',

	title: 'GoHTML',
	description: 'This is from config.js',

	theme: defaultTheme({
		logo: 'https://raw.githubusercontent.com/udan-jayanith/GoHTML-Documentation-Site/refs/heads/main/assets/media/Favicon%20black%20transparent%20version.png.png', //navigation bar ico
		navbar: ['/', '/get-started'],
		colorMode: 'light', // set default to light
		colorModeSwitch: false, // hide the toggle
		siteTitle: '',
	}),

	bundler: viteBundler(),
	head: [['link', {rel: 'icon', href: '/favicon.png'}]],
})


