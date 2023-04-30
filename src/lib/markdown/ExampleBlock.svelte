<div class="example-block container">
    <slot />
</div>

<style lang="stylus">
@require "../../style/variables.styl"

.container
    background-color: guilded-background-colour[1]
    color: guilded-foreground-colour[1]
    padding: spacing-3 0
    border-radius: medium-radius
    margin-top: spacing-1
    margin-bottom: spacing-5
    width: 100%
    :global(::selection)
        background-color: alpha(normal-selection, 0.85)
        color: white
    :global(a[href])
        &, &:hover, &:visited, &:active, &:focus
            color: guilded-accent[1]
            transition: 0.2s color ease-out
        &:hover
            color: guilded-foreground-colour[0]
</style>
