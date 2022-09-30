<script>
  import './styles.css';
  import Nav from './Nav.svelte';
</script>

<style>
  :global(body) {
    /* @apply bg-pink-500; */
    @apply bg-green-800;
  }
</style>

<svelte:head>
 <title>Zazie</title>
</svelte:head>

<Nav />

<slot />
