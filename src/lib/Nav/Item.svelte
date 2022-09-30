<script lang="ts">
  import { page } from "$app/stores"

  $: isActive = $page.url.pathname === $$props.href;
</script>

<style>
  .active {
    @apply border-b border-black;
  }
</style>

<li {...$$props} class:active={isActive}>
  <slot isActive={isActive} href={$$props.href} />
</li>
