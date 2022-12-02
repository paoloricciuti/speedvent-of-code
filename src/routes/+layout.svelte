<script>
  import "../app.css";
  import "@fontsource/source-code-pro";
</script>

<slot />

<style>
  :global(html) {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  :global(body) {
    @apply bg-primary-900 text-white-500;
    font-family: "Source Code Pro";
    overflow: hidden;
  }
</style>
