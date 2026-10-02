<script lang="ts">
  import type { WorkItem } from "$lib/types"
  import { ArrowUpRight } from "@lucide/svelte"

  let { workItem }: { workItem: WorkItem } = $props()
  let hasHref = $derived(workItem.link !== undefined)
  const openLink = (url?: string) => {
    if (!url) {
      return
    }
    window.open(url, "_blank")
  }
</script>

<div class="my-1 rounded-md border border-gray-300 p-4">
  <div class="flex w-full flex-row justify-between">
    {#if hasHref}
      <button
        type="button"
        class="flex flex-row align-middle font-bold hover:cursor-pointer hover:underline"
        onclick={() => openLink(workItem.link)}
      >
        <p class="hover:pointer-events-none">
          {workItem.name}
        </p>
        <ArrowUpRight class="size-5" />
      </button>
    {:else}
      <p class="font-bold">
        {workItem.name}
      </p>
    {/if}
    {#if workItem.extraneousText}
      <p class="text-gray-500">[{workItem.extraneousText}]</p>
    {:else if workItem.inProgress}
      <p class="text-gray-500">[in progress]</p>
    {:else if workItem.candidate}
      <p class="text-gray-500">[next in queue]</p>
    {/if}
  </div>
  {#if workItem.description}
    <p class="help-text">{workItem.description}</p>
  {/if}
</div>
