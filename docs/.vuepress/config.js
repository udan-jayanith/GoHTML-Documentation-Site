import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

console.log(
	defaultTheme({
		logo: 'https://vuejs.press/images/hero.png',

		navbar: ['/', '/get-started'],
	})
)
export default defineUserConfig({
	lang: 'en-US',

	title: 'VuePress',
	description: 'My first VuePress Site',

	theme: defaultTheme({
		logo: 'https://vuejs.press/images/hero.png',

		navbar: ['/', '/get-started'],
	}),

	bundler: viteBundler(),
})
