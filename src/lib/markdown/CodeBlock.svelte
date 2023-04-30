<script lang="ts">
    import CodeBlockMetaProp from "./CodeBlockMetaProp.svelte";

    export let lang: string;
    export let file: string | undefined = undefined;
</script>

<div class="code-block container">
    <header class="code-block header">
        <div class="code-block lang">{lang}</div>
        {#if file}
            <section class="code-block meta">
                {#if file}
                    <CodeBlockMetaProp key="File" value={file} />
                {/if}
            </section>
        {/if}
    </header>
    <pre class="code-block code-wrapper language-{lang} {lang}"><code
            class="code-block code-container language-{lang} {lang}"
            ><slot /></code
        ></pre>
</div>
