<script lang="ts">
    import { page } from "$app/stores";
    import Header from "$lib/layout/Header.svelte";
    import "@fontsource/fira-mono";
    import "@fontsource/albert-sans";
    import "@fontsource/albert-sans/300.css";
    import "@fontsource/albert-sans/400.css";
    import "@fontsource/albert-sans/700.css";
    import "@fontsource/albert-sans/800.css";
    import "@fontsource/albert-sans/900.css";
    import "../app.css";
    import "../style/fa.css";
    import Nav from "$lib/layout/Nav.svelte";

    // const { title, description } = $page.data;
    $: title = $page.data.title;
    $: description = $page.data.description;
</script>

<main class="layout wrapper">
    <Nav withHeader={!!(title || description)} />
    <div class="layout container">
        {#if title || description}
            <Header {title}>
                <p>{description}</p>
            </Header>
        {/if}
        <div class="layout document">
            <slot />
        </div>
    </div>
</main>

<style lang="stylus">
@require "../style/variables.styl"

// Wrapper around the body
.container
    width: 100%
    overflow: hidden scroll
.document
    width: 100%
    display: flex
    flex-flow: row wrap
.wrapper
	overflow: hidden
	display: flex
	width: 100%
	height: 100%
	flex-direction: column
@media only screen and (max-width: 850px)
    .document
        flex-flow: column wrap
</style>
