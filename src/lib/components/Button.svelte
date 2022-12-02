<script lang="ts">
  type $$Props = svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]>;
</script>

<button
  {...$$props}
  class={`hover:text-green-300 text-green-700 ${$$props.class}`}
  on:click
>
  [<slot />]
</button>
