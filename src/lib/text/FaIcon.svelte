<script lang="ts">
    export let icon: string;
    export let type: "solid" | "regular" | "light" | "thin" | "duotone" =
        "solid";
    export let className: string | undefined = undefined;
</script>

<i class="container fa-{type} fa-{icon} {className ?? ''}" />
