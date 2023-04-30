<div class="index-wrapper container">
    <slot />
</div>

<style lang="stylus">
@require "../../style/variables.styl"

.container
    display: flex
    flex-direction: column
    align-items: center
    padding: spacing-7 spacing-8
    flex: 9
@media only screen and (max-width: 850px)
    .container
        padding: spacing-7 spacing-5
</style>
