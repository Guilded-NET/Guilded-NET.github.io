<script lang="ts">
    export let title: string | undefined = undefined;
</script>

<header
    class="header container {title || Object.keys($$slots).length
        ? 'has-text'
        : ''}"
>
    <!-- <Nav /> -->
    <section class="header text-section">
        {#if title}<h1 class="header title">{title}</h1>{/if}
        {#if $$slots}
            <div class="header description">
                <slot />
            </div>
        {/if}
    </section>
</header>

<style lang="stylus">
@require "../../style/variables.styl"

.container
    padding: spacing-8 spacing-6
    &.has-text, &.has-text :global(.nav.container)
        background: var(--background-2)     
.text-section
    .title
        font-family: font-header
        font-weight: 800
        color: var(--foreground-0)
        margin-top: 0
    .description
        font-weight: 400
        color: var(--foreground-1)
</style>
