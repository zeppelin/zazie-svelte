<script>
  import './styles.css';
  import Nav from './Nav.svelte';
</script>

<style>
  :global(body) {
    /* @apply bg-zazie-pink; */
    @apply bg-zazie-green;
  }
</style>

<svelte:head>
 <title>Zazie</title>
</svelte:head>

<Nav />

<slot />
