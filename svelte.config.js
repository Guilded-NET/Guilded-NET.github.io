import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import mdxConfig from "./mdx.config.js";
import { mdsvex } from "mdsvex";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex(mdxConfig)],

    kit: {
        adapter: adapter({ pages: "./docs", assets: "./docs" }),
        paths: {
            base: dev ? "" : process.env.BASE_PATH,
        },
        appDir: "app",
    },
    compilerOptions: {
        hydratable: true,
    },
    extensions: [".svelte", ".svx", ".mdx", ".md"],
};

export default config;
