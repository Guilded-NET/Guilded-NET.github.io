<script lang="ts">
    import DocList from "$lib/docs/DocList.svelte";
    import ContentWrapper from "$lib/layout/ContentWrapper.svelte";
    import type { DocMetadata } from "$lib/util/search";

    export let data: {
        metadata?: {
            name: string;
            icon: string;
            priority: number;
            category: string;
            tags: string[];
        };
        content: any;
        allDocs: Array<DocMetadata>;
        isSveltePage: boolean;
    };
</script>

{#if !data.isSveltePage}
    <DocList docs={data.allDocs} />

    <ContentWrapper>
        <svelte:component this={data.content} />
    </ContentWrapper>
{/if}
{#if data.isSveltePage}
    <DocList docs={data.allDocs} />
    <article class="docs-page wrapper">
        <svelte:component this={data.content} />
    </article>
{/if}

<style lang="stylus">
.wrapper
    flex: 9
</style>
