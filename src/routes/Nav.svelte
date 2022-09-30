<script lang="ts">
  import { t, locale, setLocale } from '$lib/translations';

  const languages = [
    { locale: 'en', name: 'EN' },
    { locale: 'hu', name: 'HU' }
  ];

  $: currentLocale = locale.get();

  import facebook from '$lib/images/facebook.svg';
  import instagram from '$lib/images/instagram.svg';
</script>

<nav class="nav-card">
  <ul class="nav-card__main-menu">
    {#each languages as lang}
      <li class="{currentLocale === lang.locale && 'active'} nav-card__nav-item">
        <button class="nav-card__text-link" on:click={() => setLocale(lang.locale)}>
          {lang.name}
        </button>
      </li>
    {/each}

    <li class="nav-card__nav-item">
      <a href="/" class="nav-card__text-link">
        {$t('common.nav.home')}
      </a>
    </li>

    <li class="nav-card__nav-item">
      <a href="/#books" class="nav-card__text-link">
        {$t('common.nav.books')}
      </a>
    </li>

    <li class="nav-card__nav-item">
      <a href="/about" class="nav-card__text-link">
        {$t('common.nav.about')}
      </a>
    </li>

    <li class="nav-card__nav-item">
      <a href="/faq" class="nav-card__text-link">
        {$t('common.nav.faq')}
      </a>
    </li>
  </ul>

  <ul class="nav-card__extra-menu">
    <li>
      <a class="nav-card__icon-link" href="https://www.facebook.com/zazievilaga/" target="_blank">
        <img src={facebook} alt="Facebook">
      </a>
    </li>
    <li>
      <a class="nav-card__icon-link" href="https://www.instagram.com/zaziegram/" target="_blank">
        <img src={instagram} alt="Instagram">
      </a>
    </li>
  </ul>
</nav>
