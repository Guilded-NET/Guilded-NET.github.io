<script lang="ts">
    import DocEntry from "./DocEntry.svelte";

    export let name: string = "";
    export let docs: Array<{
        name: string;
        icon: string;
        url: string;
        active: boolean;
    }> = [];
</script>

<li class="entry-category container">
    <header class="entry-category header">
        <h5 class="entry-category header-text">{name}</h5>
    </header>
    <ul class="entry-category body">
        {#each docs as doc}
            <DocEntry
                name={doc.name}
                icon={doc.icon}
                url={doc.url}
                active={doc.active}
            />
        {/each}
    </ul>
</li>

<style lang="stylus">
@import "../../style/variables.styl"

.container
    margin-bottom: spacing-3
    list-style-type: none
.header
    margin-bottom: spacing-1
    &-text
        margin: 0
.body
    padding: 0
</style>
