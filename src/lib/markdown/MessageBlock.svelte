<script lang="ts">
    import { GuildedNetLogo } from "$lib/util/images";

    export let name: string = "Example Bot";
    export let avatar: string = GuildedNetLogo;
    export let badge: string = "BOT";
</script>

<div class="message-block container">
    <aside class="message-block avatar-wrapper">
        <img
            class="message-block avatar"
            src={avatar}
            alt="Example message user avatar"
        />
    </aside>
    <div class="message-block content">
        <header class="message-block header">
            <span class="message-block header-item name">{name}</span>
            <span class="message-block header-item timestamp"
                >Yesterday 6:27 PM</span
            >
            {#if badge}
                <span class="message-block header-item user-badge">{badge}</span
                >
            {/if}
        </header>
        <div class="message-block text">
            <slot />
        </div>
    </div>
</div>

<style lang="stylus">
@require "../../style/variables.styl"

.container
    display: flex
    flex-direction: row
    font-size: 1rem
    font-weight: 400
    padding: spacing-2 spacing-4
    &:hover
        background-color: guilded-background-colour[2]

// Avatar
.avatar-wrapper
    width: 40px
    height: 40px
    margin-right: spacing-3
    user-select: none
.avatar
    max-width: 100%
    width: 100%
    height: 100%
    margin: 0

// Header
.header
    user-select: none
    display: flex
    flex-direction: row
    align-items: center
.name
    font-weight: 700
    color: guilded-foreground-colour[0]
.timestamp
    color: guilded-foreground-colour[2]
    font-size: 0.7em
    font-weight: 400
.user-badge
    color: guilded-foreground-colour[0]
    font-size: 0.6em
    font-weight: 800
    background-color: guilded-background-colour[0]
    text-transform: uppercase
    padding: spacing-0 - 1px spacing-0 + 2px
    border-radius: tiny-radius
    text-shadow: rgba(0, 0, 0, 0.5) 0 0 4px
.header-item:not(:last-child)
    margin-right: spacing-1 + 2px
</style>
