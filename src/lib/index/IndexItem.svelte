<script lang="ts">
    import FaIcon from "$lib/text/FaIcon.svelte";

    export let title: string;
    export let icon: string | undefined = undefined;
    export let href: string | undefined = undefined;
</script>

<a class="index-item wrapper{href ? ' linked' : ''}" {href}>
    <div class="index-item container">
        {#if icon}
            <div class="icon">
                <FaIcon {icon} />
            </div>
        {/if}
        <h3 class="index-item title">{title}</h3>
        <div class="index-item description">
            <slot />
        </div>
    </div>
</a>

<style lang="stylus">
@require "../../style/variables.styl"

.wrapper
    text-decoration: none
    display: flex
.container
    background-color: var(--background-2)
    border-radius: small-radius
    padding: spacing-4 spacing-5
    flex: 1
    .wrapper.linked > &
        transition: 0.2s ease-out
        transition-property: background, border 
        border: solid 1px transparent
    .wrapper.linked:hover > &
        background-color: var(--background-3)
        border-color: var(--background-6)

.icon
    display: flex
    flex-direction: column
    align-items: center
    font-size: 2rem
    color: var(--foreground-0)
    margin-bottom: spacing-2
.title
    margin: 0
    font-weight: 800
    color: var(--foreground-0)
    text-align: center
.description
    padding-top: spacing-2
    color: var(--foreground-1)
    text-align: justify
    & > :global(p):first-child
        margin-top: 0
    & > :global(p):last-child
        margin-bottom: 0

@media only screen and (max-width: 1100px)
    .description
        text-align: left
</style>
