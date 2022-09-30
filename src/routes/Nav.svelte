<script>
  import facebook from '$lib/images/facebook.svg';
  import instagram from '$lib/images/instagram.svg';

  let isEN = true;
  let isHU = false;
  let shouldShowCartMenu = false;
  let cartItemCount = 0;
</script>

<nav class="nav-card">
  <ul class="nav-card__main-menu">
    <li class="{isEN && 'active'} nav-card__nav-item">
      <a class="nav-card__text-link" href="#">EN</a>
    </li>

    <li class="{isHU && 'active'} nav-card__nav-item">
      <a class="nav-card__text-link" href="#">HU</a>
    </li>

    <li class="nav-card__nav-item">
      <a href="/" class="nav-card__text-link">
        t "nav.home"
      </a>
    </li>

    <li class="nav-card__nav-item">
      <a href="#books" class="nav-card__text-link">
        t "nav.books"
      </a>
    </li>

    <li class="nav-card__nav-item">
      <a href="/about" class="nav-card__text-link">
        t "nav.about"
      </a>
    </li>

    <li class="nav-card__nav-item">
      <a href="/faq" class="nav-card__text-link">
        t "nav.faq"
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

  {#if shouldShowCartMenu}
    <ul class="nav-card__shop-menu">
      <li>
        <a class="nav-card__shop-link" href="#">
          t "cart.cart" ({cartItemCount})
        </a>
      </li>
    </ul>
  {/if}
</nav>
