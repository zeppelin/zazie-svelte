<script lang="ts">
  import { t } from '$lib/translations';
</script>

<div class="intro-card">
  <div class="flex items-center justify-center bg-zazie-pink sm:py-20 py-14 sm:py-20 md:py-24 lg:py-36">
    <h2>
      <span>{$t('index.intro.title.first-line')}</span>
      <br>
      <span>{$t('index.intro.title.second-line')}</span>
    </h2>
  </div>
</div>

<style>
  h2 {
    font-family: 'Adelle';
    font-size: 30px;
  }

  h2 span {
    @apply bg-zazie-green;
    @apply pt-1 px-1;
  }

  @screen sm {
    h2 {
      @apply text-center;
      font-size: 90px;
    }
  }

  @screen md {
    h2 {
      font-size: 120px;
    }

    h2 span {
      @apply pt-1 px-4;
    }
  }

  @screen lg {
    h2 {
      font-size: 150px;
    }

    h2 span {
      @apply pt-2 px-5;
    }
  }
</style>