<script lang="ts">
  import { t, locale, setLocale } from '$lib/translations';
  import NavItem from '$lib/Nav/Item.svelte';

  import facebook from '$lib/images/facebook.svg';
  import instagram from '$lib/images/instagram.svg';
  import { afterNavigate } from '$app/navigation';

  const languages = [
    { locale: 'en', name: 'EN' },
    { locale: 'hu', name: 'HU' }
  ];

  const handleClickAnchor = (e: MouseEvent) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLAnchorElement)) {
      return;
    }

    let elementId = e.target.href.split('#').at(-1);
    if (!elementId) {
      return;
    }

    let elementToScrollTo = document.getElementById(elementId);
    if (elementToScrollTo) {
      window.scrollTo({
        left: 0,
        top: elementToScrollTo.offsetTop,
      });
    }
  }
</script>

<style>
  nav {
    @apply flex flex-wrap items-center gap-5 pl-3 pr-6;
    @apply z-10 fixed top-4 right-0;
    @apply bg-zazie-pink;

    font-family: 'Adelle';
  }

  .active {
    @apply border-b border-black;
  }
</style>

<nav>
  <ul class="flex gap-8">
    {#each languages as lang}
      <li class="{$locale === lang.locale ? 'active' : null}">
        <button on:click={() => setLocale(lang.locale)}>
          {lang.name}
        </button>
      </li>
    {/each}

    <NavItem href="/" let:href={href}>
      <a href={href}>
        {$t('common.nav.home')}
      </a>
    </NavItem>

    <NavItem href="/#books" let:href={href}>
      <a href={href} on:click={handleClickAnchor}>
        {$t('common.nav.books')}
      </a>
    </NavItem>

    <NavItem href="/about" let:href={href}>
      <a href={href}>
        {$t('common.nav.about')}
      </a>
    </NavItem>

    <NavItem href="/faq" let:href={href}>
      <a href={href}>
        {$t('common.nav.faq')}
      </a>
    </NavItem>
  </ul>

  <ul class="flex gap-5 ml-8">
    <li>
      <a href="https://www.facebook.com/zazievilaga/" target="_blank">
        <img class="h-4" src={facebook} alt="Facebook">
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/zaziegram/" target="_blank">
        <img class="h-4" src={instagram} alt="Instagram">
      </a>
    </li>
  </ul>
</nav>
