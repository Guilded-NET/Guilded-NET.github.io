<script lang="ts">
    import DocList from "$lib/docs/DocList.svelte";
    import IndexGrid from "$lib/index/IndexGrid.svelte";
    import IndexItem from "$lib/index/IndexItem.svelte";
    import IndexWrapper from "$lib/index/IndexWrapper.svelte";

    export let data: {
        allDocs: Array<{
            name: string;
            icon: string;
            priority: number;
            url: string;
            tags: string[];
            category: string;
            active: boolean;
        }>;
    };
</script>

<DocList docs={data.allDocs} />

<IndexWrapper>
    <h1>Docs and Guides</h1>
    <IndexGrid>
        <IndexItem title="Getting started" icon="play" href="/docs/develop-bot">
            <p>Create a bot using Guilded.NET.</p>
        </IndexItem>
        <IndexItem
            title="Supported features"
            icon="check-double"
            href="/docs/supported"
        >
            <p>See which API features are supported on Guilded.NET.</p>
        </IndexItem>
        <IndexItem title="Message builder" icon="pencil" href="/docs/message">
            <p>Build messages with live preview!</p>
        </IndexItem>
    </IndexGrid>
</IndexWrapper>

<!-- <DocWrapper allDocs={data.allDocs}>
    <h1>Guilded.NET Docs</h1>
    <p>
        This is the place where Guilded.NET is documented. This doesn't cover every aspect of Guilded.NET, but
        <a href="/ref">references page</a>
        does. All of the available documents are listed at the left side of this text. If you're completely new to Guilded.NET
        (which you most likely are if you are reading this), be sure to check the following documents:
        <a href="/docs/createBotScratch">Creating bots from scratch</a>,
        <a href="/docs/givingFunctions">Powering up your bots</a>.
    </p>
    <p>
        Be sure to know the basics of C# to get started with Guilded.NET. Otherwise, the document may not be
        understandable. If you know C# and it's still not understandable, then be sure to improve the pages here by
        creating a pull request to <a href="https://github.com/Guilded-NET/Guilded-NET.github.io"
            >Guilded.NET website GitHub repp</a
        >. Any contribution is not only welcome, but also a big help.
    </p>
    <p>
        This document will only cover how to use Guilded.NET features, but not things like how to do commands like dice
        rolling. That's up to you to design.
    </p>
</DocWrapper> -->
