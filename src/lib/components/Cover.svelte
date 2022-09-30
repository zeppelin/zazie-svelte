<script>
  import video from '$lib/videos/zazie-cover.mp4';
  import poster from '$lib/videos/zazie-cover-poster.jpg';
  import logo from '$lib/images/zazie-logo.svg';

</script>

<div class="cover overflow-hidden relative">
  <video
    autoplay
    muted
    preload="true"
    loop
    width="1280"
    height="720"
    class="absolute inset-0"
    poster={poster}
  >
    <source src={video} type="video/mp4">
  </video>

  <div class="bg-cover bg-center poster absolute inset-0 flex items-center justify-center">
    <h1 class="heading" style={`background-image: url(${logo})`}><span>zazie</span></h1>
  </div>
</div>

<style>
  .cover {
    aspect-ratio: 1280 / 720;
  }

  .heading {
    aspect-ratio: 472 / 111;
    background: no-repeat center center;
    background-size: contain;
    text-indent: -1000em;
    overflow: hidden;
    width: 130px;
  }

  @screen sm {
    .heading {
      width: 190px;
    }
  }

  @screen sm {
    .heading {
      width: 190px;
    }
  }

  @screen md {
    .heading {
      width: 250px;
    }
  }

  @screen lg {
    .heading {
      width: 300px;
    }
  }
</style>