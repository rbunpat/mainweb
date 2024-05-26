import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      colors: {
        bruh: {
          100: '#175B3A'
        }
      }
    }
	},

	plugins: []
} as Config;
