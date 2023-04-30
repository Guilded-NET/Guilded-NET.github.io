<script lang="ts">
    import type { DocMetadata } from "$lib/util/search";
    import DocCategory from "./DocCategory.svelte";

    type DocCategory = [string, DocMetadata[]];

    export let docs: DocMetadata[];

    $: sortedDocs = docs.sort((a, b) => a.priority - b.priority);

    $: docCategories = sortedDocs.map((x) => x.category);

    // Removes duplicate category names and then maps category name to all of its docs
    $: categories = docCategories
        .filter((category, i) => docCategories.indexOf(category) === i)
        .map((category) => [
            category,
            sortedDocs.filter((doc) => doc.category === category),
        ]) as [string, DocMetadata[]][];

    $: search = "";

    $: filteredCategories = categories
        .map((category) => [
            category[0],
            category[1].filter(
                (x) =>
                    x.name.includes(search) ||
                    x.url.includes(search) ||
                    x.category.includes(search)
            ),
        ])
        .filter(([, docs]) => docs.length) as DocCategory[];
    function log(...args) {
        console.log("Got args", args);
    }
</script>

<aside class="entry-list container">
    <div class="entry-list search-field">
        <div class="entry-list search-wrapper">
            <i class="entry-list search-icon fas fa-search" />
            <input
                id="entry-list-search"
                class="entry-list search"
                placeholder="Search docs"
                bind:value={search}
                on:keydown={log}
            />
        </div>
    </div>
    <div class="entry-list items-wrapper">
        <ul class="entry-list items">
            {#each filteredCategories as category}
                <DocCategory name={category[0]} docs={category[1]} />
            {/each}
        </ul>
    </div>
</aside>

<style lang="stylus">
@import "../../style/variables.styl"

.container
    // width: 225px
    flex: 1
    z-index: 9
    padding: spacing-2 spacing-3

    display: flex
    flex-direction: column
    align-items: stretch

@media only screen and (max-width: 850px)
    .container
        padding: spacing-2 spacing-6
        // width: 80%

.search
    flex: 1
    background-color: transparent
    border: 0
    outline: none
    border-bottom: solid 1px var(--foreground-5)
    color: var(--foreground-1)
    &::placeholder
        color: var(--foreground-3)
    &-wrapper
        display: flex
        flex-direction: row
    &-icon
        display: flex
        flex-direction: row
        align-items: center
        color: var(--foreground-3)
        margin-right: spacing-1
.items
    margin: 0
    padding: 0

    &-wrapper
        padding: spacing-4 0
        overflow-y: auto
</style>
