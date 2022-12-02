<script lang="ts">
  export let classes = "";
</script>

<section class={`bg-primary-900 border-green-500 border-2 p-4 ${classes}`}>
  <slot />
</section>
