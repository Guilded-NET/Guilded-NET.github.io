<script lang="ts">
    import FaIcon from "$lib/text/FaIcon.svelte";

    export let name: string;
    export let icon: string;
    export let url: string;
    export let active: boolean;
</script>

<li class="entry-item container {active ? 'active' : ''}">
    <a class="entry-item link" href="/docs/{url}">
        <FaIcon className="entry-item icon" {icon} />
        <span class="entry-item name">{name}</span>
    </a>
</li>

<style lang="stylus">
@import "../../style/variables.styl"

.container
    list-style-type: none
.link
    display: block
    padding: spacing-1 spacing-2
    border: solid 1px transparent
    border-radius: tiny-radius
    text-decoration: none
    transition: 0.2s ease-out
    transition-property: background, color, border

    :global(.entry-item.icon)
        width: 1em
        text-align: center
        margin-right: spacing-0

    &[href], &[href]:visited, &[href]:focus, &[href]:active
        color: var(--foreground-3)

        .container:hover &
            color: var(--foreground-2)
            background-color: var(--background-2)
            border-color: var(--background-4)

        .container.active &
            background-color: var(--background-2)
            color: var(--foreground-0)

        .container.active:hover &
            color: var(--foreground-0)
            background-color: var(--background-3)
            border-color: var(--background-6)

@media only screen and (max-width: 850px)
    .link
        padding: spacing-3 spacing-2
</style>
