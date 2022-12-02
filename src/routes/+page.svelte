<script lang="ts">
  import { enhance } from "$app/forms";
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import Tree from "$lib/components/Tree.svelte";
  import { openCodepen } from "$lib/utils/codepen";
  import { errors } from "$lib/utils/errors";
  import { downloadSingleFile } from "$lib/utils/single-file";
  import { openStackBlitz } from "$lib/utils/stackblitz";
  import type { ActionData, PageServerData } from "./$types";

  export let data: PageServerData;
  export let form: ActionData;
  $: ({ session } = data);
  let error: string | null = null;

  async function getInput() {
    const res = await fetch("/api/input");
    if (!res.ok) {
      throw new Error(errors.get(res.status) ?? errors.get("default"));
    }
    return res.text();
  }

  async function handleOperation(operation: (input: string) => void) {
    let input;
    try {
      input = await getInput();
    } catch (e) {
      error = (e as Error).message;
      return;
    }
    if (!input) {
      error = errors.get("default")!;
      return;
    }
    operation(input);
  }

  async function handleOpenStackblitz() {
    handleOperation(openStackBlitz);
  }

  async function handleOpenCodepen() {
    handleOperation(openCodepen);
  }

  async function handleSingleFile() {
    handleOperation(downloadSingleFile);
  }
</script>

<svelte:head>
  <title>Speedvent of code</title>
</svelte:head>

<div class="w-screen h-screen overflow-hidden absolute -z-50">
  <Tree
    classes="absolute transform bottom-[-1%] -translate-x-1/2 text-green-700"
  />

  <Tree
    classes="absolute transform bottom-[-5%] translate-x-1/2 right-0 text-green-700"
  />

  <Tree
    classes="absolute sm:block hidden transform bottom-[-6%] origin-bottom scale-75 text-green-700"
  />

  <Tree
    classes="absolute sm:block hidden transform bottom-[-10%] right-0 origin-bottom scale-75 text-green-700"
  />
</div>

<main class="p-4">
  <div class="w-11/12 sm:w-1/2 m-auto text-center p-4 grid gap-4">
    <h1 class="text-4xl">Speedvent of Code</h1>
    <h2>
      Quickly spin up a project in Stackblitz, Codepen or even download an HTML
      file with the input of today already preloaded and go ahead <strong
        >BLAZINGLY FAST!</strong
      >
    </h2>
    <small>Made with ♥️ by <a class="underline" href="https://twitter.com/PaoloRicciuti">paoloricciuti</a></small>
  </div>
  <Container classes="w-11/12 sm:w-1/2 m-auto">
    <form class="grid text-center gap-4" use:enhance>
      <span class="col-span-full">
        {#if session}
          Click on one of the buttons below to start <strong
            >Advent of coding</strong
          >
        {:else}
          Login to be able to use Speedvent of code
        {/if}
      </span>
      <label
        class="justify-center w-full min-w-0 flex flex-wrap gap-4"
        for="session"
      >
        <span class="w-full">
          Your session id
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <sup tabindex="0" class="group relative"
            >[?]
            <Container
              classes="leading-[initial] absolute group-hover:block group-focus-visible:block hidden top-1/2 transform -translate-x-1/2 left-0"
            >
              {#if session}
                If you want to change your
              {:else}
                To add your
              {/if}
              session id check in the <kbd>Application</kbd> tab of your dev
              console on
              <a
                href="https://adventofcode.com"
                target="_blank"
                rel="noopener noreferrer">https://adventofcode.com</a
              > and get the `session` cookie.
            </Container>
          </sup></span
        >
        <input
          autocomplete="off"
          id="session"
          value={session ?? ""}
          class="bg-[#10101a] min-w-0 flex-grow-[4] border-[#666] px-0.5 border-2 text-white-500 col-span-5"
          name="session"
        />
        <Button class="flex-grow">Send</Button>
      </label>
    </form>
    {#if session}
      <section class="flex justify-evenly mt-4 flex-wrap">
        <Button on:click={handleOpenStackblitz}>Stackblitz</Button>
        <Button on:click={handleOpenCodepen}>Codepen</Button>
        <Button on:click={handleSingleFile}>HTML file</Button>
      </section>
      {#if error}
        <div class="text-red-600 text-center">{error}</div>
      {/if}
      {#if form?.success}
        <div class="text-green-500 text-center">Succesfully logged in</div>
      {/if}
    {:else}
      <p class="w-full text-center mt-4">
        Once logged in you'll find your ways to rapidly start advent of coding
      </p>
    {/if}
  </Container>
</main>
