<script lang="ts">
    export let columnCount: number = 0;
</script>

<div class="index-grid container {columnCount ? `columns-${columnCount}` : ''}">
    <slot />
</div>

<style lang="stylus">
@require "../../style/variables.styl"

.container
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    gap: spacing-5
    padding: spacing-7 0
    &.columns-2
        grid-template-columns: 1fr 1fr
@media only screen and (max-width: 850px)
    .container
        &, &.columns-2
            grid-template-columns: 1fr
</style>
