<script>
    import IndexItem from "$lib/index/IndexItem.svelte";
    import IndexGrid from "$lib/index/IndexGrid.svelte";
    import IndexWrapper from "$lib/index/IndexWrapper.svelte";
    import CodeBlock from "$lib/markdown/CodeBlock.svelte";
    import MarkdownContent from "$lib/markdown/MarkdownContent.svelte";
</script>

<IndexWrapper>
    <h1>Why Guilded.NET?</h1>
    <IndexGrid>
        <IndexItem icon="bars" title="Consistent">
            <p>
                The more consistent a library is, the less you need to rely on
                its documentation. Guilded.NET is designed to be as consistent
                with the least amount of differences possible.
            </p>
        </IndexItem>
        <IndexItem icon="rocket" title="Speed">
            <p>
                Have low latency in bot responses to commands with Guilded.NET.
                Your bots will outrun all the cheetahs in the wild by using
                Guilded.NET.
            </p>
        </IndexItem>
        <IndexItem icon="person" title="Developers-first">
            <p>
                API libraries should not be hard to use. Guilded.NET puts
                developers first by providing a framework that is simple to
                learn, understand, not only when using Guilded.NET for the first
                time, but Guilded API entirely.
            </p>
        </IndexItem>
    </IndexGrid>
    <h1>Try out Guilded.NET now!</h1>
    <p>Install Guilded.NET and start using it in your current/next project:</p>
    <IndexGrid columnCount={2}>
        <IndexItem title="In an existing project">
            <MarkdownContent>
                <p>
                    Guilded.NET is available as NuGet package and can be added
                    through <code>dotnet add package</code>:
                </p>
                <CodeBlock lang="bash">
                    <codeline class="code-block line"
                        >dotnet add package Guilded</codeline
                    >
                </CodeBlock>
            </MarkdownContent>
        </IndexItem>
        <IndexItem title="In a new project">
            <MarkdownContent>
                <p>
                    You can also install Guilded.NET as a template and create a
                    new Guilded.NET project:
                </p>
                <CodeBlock lang="bash">
                    <codeline class="code-block line"
                        >dotnet new -i Guilded.Templates</codeline
                    ><codeline class="code-block line"
                        >dotnet new guilded.bot</codeline
                    >
                </CodeBlock>
            </MarkdownContent>
        </IndexItem>
    </IndexGrid>
</IndexWrapper>
