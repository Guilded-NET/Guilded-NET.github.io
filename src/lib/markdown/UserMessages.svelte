<div class="user-messages container">
    <slot />
</div>

<style lang="stylus">
@require "../../style/variables.styl"

.container
    margin: spacing-1 0
    &:first-child
        margin-top: 0
    &:last-child
        margin-bottom: 0
</style>
