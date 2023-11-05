import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
 srcDir: "src/",
 modules: ["@nuxtjs/prismic"],

 prismic: {
	 endpoint: "astro-prismic-slicemachine",
	},
});