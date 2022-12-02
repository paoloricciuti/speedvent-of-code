<script>
  import "../app.css";
  import "@fontsource/source-code-pro";
</script>

<slot />

<style>
  :global(body,html) {
    @apply bg-primary-900 text-white-500;
    font-family: "Source Code Pro";
    overflow: hidden;
  }
</style>
