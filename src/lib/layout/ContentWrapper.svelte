<script>
    import MarkdownContent from "$lib/markdown/MarkdownContent.svelte";
</script>

<div class="content-wrapper container">
    <article class="content-wrapper content">
        <MarkdownContent>
            <slot />
        </MarkdownContent>
    </article>
</div>

<style lang="stylus">
@import "../../style/variables"

.container
    flex: 9
    max-width: 100%
.content
    margin: spacing-1 spacing-7
    padding: spacing-6 spacing-7
    //min-height: 100vh
    text-align: justify

    background-color: var(--background-2)
    border-radius: medium-radius
@media only screen and (max-width: 850px)
    .content
        padding: spacing-6 spacing-5
        margin: spacing-1 0
</style>
