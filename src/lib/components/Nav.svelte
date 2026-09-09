<script lang="ts">
  let { tabState, set }: { tabState: number; set: (tab: number) => void } = $props()
</script>

{#snippet about()}
  <button onclick={() => set(0)} class="rounded-md p-3 transition-colors hover:bg-gray-200">
    <p class={tabState !== 0 ? "text-gray-400" : "text-black"}>about</p>
  </button>
{/snippet}

{#snippet backlog()}
  <button onclick={() => set(1)} class="rounded-md p-3 transition-colors hover:bg-gray-200">
    <p class={tabState !== 1 ? "text-gray-400" : "text-black"}>things i'm working on</p>
  </button>
{/snippet}

{#snippet gallery()}
  <button onclick={() => set(2)} class="rounded-md p-3 transition-colors hover:bg-gray-200">
    <p class={tabState !== 2 ? "text-gray-400" : "text-black"}>latest works</p>
  </button>
{/snippet}

{#snippet faq()}
  <button onclick={() => set(3)} class="rounded-md p-3 transition-colors hover:bg-gray-200">
    <p class={tabState !== 3 ? "text-gray-400" : "text-black"}>faq</p>
  </button>
{/snippet}

<div>
  <div class="hidden flex-row p-1 *:font-bold *:transition-colors md:flex">
    {@render about()}
    <!-- for future shika if you wonder why backlog is missing:
    we have screen size to spare! -->
    {@render gallery()}
    {@render faq()}
  </div>
  <div class="flex flex-row p-1 *:font-bold *:transition-colors md:hidden lg:hidden">
    {@render about()}

    {@render backlog()}
    {@render gallery()}
    {@render faq()}
  </div>
</div>
