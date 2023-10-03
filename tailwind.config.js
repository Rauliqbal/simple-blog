/** @type {import('tailwindcss').Config} */
export default {
  content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins",'sans-serif'],
        jetBrains : ["JetBrains Mono", "monospace"]
      },
      container : {
        center: true,
        padding: "16px",
        screens: {
          md: "768px",
          lg: "1024px",
          xl: "1060px",
          
       },
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),
],
}

