<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<div class="markdown-content container {className ? className : ''}">
    <slot />
</div>

<style lang="stylus">
.container
    text-align: justify
    display: grid
    grid-template-columns: 1fr
</style>
