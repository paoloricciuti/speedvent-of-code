<script>
  import "../app.css";
  import "@fontsource/source-code-pro";
</script>

<slot />

<style>
  :global(body) {
    @apply bg-primary-900 text-white-500;
    font-family: "Source Code Pro";
  }
</style>
