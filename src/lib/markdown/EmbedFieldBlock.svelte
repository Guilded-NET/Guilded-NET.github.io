<script lang="ts">
    import type { MessageEmbedField } from "./MessageEmbed";

    export let value: MessageEmbedField;
</script>

<section class="message-embed-field container {value.inline ? 'inline' : ''}">
    <h4 class="message-embed-field name">
        <slot name="title">
            {value.name}
        </slot>
    </h4>
    <div class="message-embed-field value">
        <slot>
            {value.value}
        </slot>
    </div>
</section>

<style lang="stylus">
@require "../../style/variables.styl"

.container
    width: 100%
    padding-top: spacing-1
    padding-bottom: spacing-1
    flex: 0 0 auto
    &.inline
        width: 50%
        flex: auto
.name
    margin-top: 0
    margin-bottom: spacing-0
</style>
