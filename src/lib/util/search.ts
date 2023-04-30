export const docList = () => {
    // Only literals allowed
    const pages = import.meta.glob("../../routes/docs/*");

    const paths = Object.keys(pages).filter(x => {
        // Necessary for names, such as +page.svelte
        const breadcrumbs = x.split("/");
        const filename = breadcrumbs[breadcrumbs.length - 1];

        // Any page that isn't +page.svelte, +layout.svelte, +error.svelte
        return (x.endsWith(".mdx") || x.endsWith(".svelte") || x.endsWith(".ts")) && !filename.startsWith("+");
    });

    const pagePaths = paths.filter(x => !x.endsWith(".ts"));

    return Promise.all(
        pagePaths.map(async path => {
            // We get /src/routes/docs/xyz.mdx, so we need to replace it with ["xyz.mdx"]
            const relativePath = path.split("/").slice(4); //.join("/");

            // If it's /xyz/+page.svelte, then have it as /xyz/, otherwise remove .mdx and clean it up
            const urlPath = relativePath[relativePath.length - 1].startsWith("+")
                ? relativePath.slice(0, -1).join("/")
                : relativePath.join("/").split(".").slice(0, -1).join(".");

            const dataPath = path.endsWith(".svelte") ? path.replace(/[.]svelte$/, ".ts") : path;

            const pageData = (await pages[dataPath]()) as { metadata: DocMetadata };

            // Only extract necessary stuff and ignore others
            const { metadata: { name, icon, priority, tags, category } } = pageData;

            return { name, icon, priority, tags, category, url: urlPath };
        })
    );
};

export type DocMetadata = {
    name: string;
    icon: string;
    priority: number;
    url: string;
    category: string;
    active: boolean;
    tags: string[];
};
