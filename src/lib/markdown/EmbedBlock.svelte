<script lang="ts">
    import EmbedFieldBlock from "./EmbedFieldBlock.svelte";
    import type { MessageEmbed } from "./MessageEmbed";

    export let value: MessageEmbed;

    const {
        author,
        title,
        url,
        description,
        thumbnail,
        fields,
        image,
        footer,
        color,
        timestamp,
    } = value;

    export let domain: { name: string; icon?: string } | undefined = undefined;
</script>

<div
    class="message-embed container"
    style="border-left-color: #{(color ?? 0xf5c400).toString(16)};"
>
    {#if domain}
        <header class="message-embed domain">
            <i
                class="message-embed domain-icon {domain.icon
                    ? `fa-brands fa-${domain.icon}`
                    : 'fa-solid fa-earth-americas'}"
            />
            <span class="message-embed domain-name">
                {domain.name}
            </span>
        </header>
    {/if}
    {#if author}
        <header class="message-embed author">
            {#if author.icon_url}
                <div class="message-embed icon author-icon">
                    <img
                        class="message-embed icon-image"
                        src={author.icon_url}
                        alt="Embed Author Icon"
                    />
                </div>
            {/if}
            <a class="message-embed author-text linked-text" href={author.url}
                >{author.name}</a
            >
        </header>
    {/if}
    <article class="message-embed content-wrapper">
        <div class="message-embed body">
            {#if title}
                <h4 class="message-embed title message-embed content-header">
                    <a class="message-embed linked-text" href={url}>{title}</a>
                </h4>
            {/if}
            {#if description}
                <section class="message-embed description">
                    <slot>
                        {description}
                    </slot>
                </section>
            {/if}
            {#if fields}
                <section class="message-embed fields">
                    <slot name="fields">
                        {#each fields as field}
                            <EmbedFieldBlock value={field} />
                        {/each}
                    </slot>
                </section>
            {/if}
            {#if image}
                <div class="message-embed image-block">
                    <img
                        class="message-embed image"
                        src={image.src}
                        alt="Embed Img"
                    />
                </div>
            {/if}
        </div>
        {#if thumbnail}
            <aside class="message-embed thumbnail">
                <img
                    class="message-embed thumbnail-image"
                    src={thumbnail.src}
                    alt="Embed Thumbnail"
                />
            </aside>
        {/if}
    </article>
    {#if footer || timestamp}
        <footer class="message-embed footer">
            {#if footer?.icon_url}
                <div class="message-embed icon footer-icon">
                    <img
                        class="message-embed icon-image"
                        src={footer.icon_url}
                        alt="Embed Footer Icon"
                    />
                </div>
            {/if}
            <span class="message-embed footer-content">
                {#if footer?.text}
                    <span class="message-embed footer-text">
                        {footer.text}
                    </span>
                {/if}
                {#if timestamp}
                    <span class="message-embed timestamp">
                        {new Date(timestamp).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </span>
                {/if}
            </span>
        </footer>
    {/if}
</div>

<style lang="stylus">
@require "../../style/variables.styl"

left-border-size = 4px
rest-border-size = 1px
image-max-width = 600px
side-spacing = spacing-2

// left side border + left side spacing + max image width + left side spacing + right side border
max-embed-size = left-border-size + side-spacing + image-max-width + side-spacing + rest-border-size

.container
    display: flex
    flex-direction: column
    overflow: hidden
    border: solid 1px alpha(white, 0.1)
    border-left: solid 4px guilded-accent[0]
    margin-top: spacing-1
    background-color: guilded-background-colour[2]
    border-radius: small-radius
    padding-top: spacing-1 + 2px
    max-width: max-embed-size
.content-header
    font-weight: bold
    color: guilded-foreground-colour[0]
// General
.linked-text
    color: guilded-foreground-colour[0]
    font-weight: bold
    &[href]
        &, &:visited, &:active, &:hover
            color: guilded-accent[1]
        &:hover
            text-decoration: underline
// Content
.content-wrapper
    display: flex
    flex-direction: row
    padding: 0 side-spacing spacing-1 side-spacing
.title
    margin: 0 0 spacing-1 0
.fields
    display: inline-flex
    flex-wrap: wrap
    flex-direction: row
    justify-content: space-between
    padding-top: spacing-1
// Media
.thumbnail
    &, .thumbnail-image
        width: 80px
        height: 80px
        margin: 0
        max-width: 100%
.image-block
    max-width: 600px
    max-height: 300px
    margin-top: spacing-2
.image
    margin: 0
    max-width: image-max-width
    max-height: 300px
// Footer, Author, Domain
.footer, .author, .domain
    display: flex
    overflow: auto
    line-height: 1.5em
    flex-direction: row
    align-items: center
.author, .domain
    padding: 0 side-spacing
    margin-bottom: spacing-1
.domain
    color: guilded-foreground-colour[2]
    font-weight: bold
    font-size: 0.9em
.domain-icon
    margin-right: spacing-1 - 2px
.footer
    background-color: guilded-background-colour[3]
    color: guilded-foreground-colour[2]
    margin-top: spacing-1
    padding: spacing-1 side-spacing
.footer-text ~ .timestamp
    margin-left: spacing-1 - 2px
    &::before
        content: "\2022"
        margin-right: spacing-1 - 2px
.icon
    width: 22px
    height: 22px
    margin-right: spacing-0 + 2px
    .icon-image
        width: 22px
        height: 22px
        margin: 0
        max-width: 100%
.footer-icon
    border-radius: 100%
</style>
