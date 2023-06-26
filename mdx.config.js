import modifyCodeblocks from "./modifyCodeblocks.js";
import modifyQuoteblocks from "./modifyQuoteblocks.js";

/** @type {import('mdsvex').MdsvexOptions} */
export default {
    extensions: [".mdx"],
    smartypants: {
        dashes: "inverted",
    },
    layout: {
        default: "./src/lib/LayoutDefault.svelte",
    },
    remarkPlugins: [modifyCodeblocks, modifyQuoteblocks],
};
