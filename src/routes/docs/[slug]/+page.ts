import { docList } from "$lib/util/search";

const sveltePages = ["message"];

export const prerender = true;

export const csr = false;

export async function load({ params: { slug } }: { params: { slug: string }; fetch: () => Promise<unknown> }) {
    const allDocs = (await docList()).map(doc => ({ ...doc, active: doc.url === slug }));

    const isSveltePage = sveltePages.includes(slug);

    const pageData = await import(`../${slug}.${isSveltePage ? "svelte" : "mdx"}`);

    const { metadata, default: content } = pageData;

    return {
        metadata,
        content,
        allDocs,
        isSveltePage
    };
}
