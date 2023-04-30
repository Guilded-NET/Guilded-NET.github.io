<script>
    import IndexGrid from "$lib/index/IndexGrid.svelte";
    import IndexItem from "$lib/index/IndexItem.svelte";
    import IndexWrapper from "$lib/index/IndexWrapper.svelte";
</script>

<IndexWrapper>
    <h1>Guilded.NET Packages</h1>
    <IndexGrid>
        <IndexItem title="Guilded.NET" icon="forward" href="/references">
            <p>Guilded.NET bots and tools.</p>
        </IndexItem>
        <IndexItem
            title="Guilded.NET Commands"
            icon="pencil"
            href="/references"
        >
            <p>Text commands for Guilded.NET bots.</p>
        </IndexItem>
        <IndexItem title="Guilded.NET Markdown" icon="at" href="/references">
            <p>Package for additional Markdown stuff.</p>
        </IndexItem>
        <IndexItem
            title="Guilded.NET Webhook"
            icon="paper-plane"
            href="/references"
        >
            <p>Build Guilded webhooks with Guilded.NET.</p>
        </IndexItem>
        <IndexItem title="Guilded.NET Base" icon="cube" href="/references">
            <p>Common types for webhooks and bots.</p>
        </IndexItem>
    </IndexGrid>
    <h1>Common Types</h1>
    <ul>
        <li><a href="/references">GuildedBotClient</a></li>
        <li><a href="/references">AbstractGuildedClient</a></li>
        <li><a href="/references">Message</a></li>
        <li><a href="/references">MessageEvent</a></li>
        <li><a href="/references">MessageReactionEvent</a></li>
        <li><a href="/references">HashId</a></li>
        <li><a href="/references">CommandModule</a></li>
    </ul>
</IndexWrapper>
