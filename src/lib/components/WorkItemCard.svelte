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

<div class="my-1 p-2">
  <div class="flex w-full flex-row justify-between">
    {#if hasHref}
      <button
        type="button"
        class="flex flex-row align-middle font-bold hover:cursor-pointer hover:underline"
        onclick={() => openLink(workItem.link)}
      >
        <p class="subsection-heading hover:pointer-events-none">
          {workItem.name}
        </p>
        <ArrowUpRight class="size-5" />
      </button>
    {:else}
      <p class="subsection-heading">
        {workItem.name}
      </p>
    {/if}
    {#if workItem.extraneousText}
      <p class="text-gray-500">[{workItem.extraneousText}]</p>
    {/if}
  </div>
  {#if workItem.description}
    <p class="help-text">{workItem.description}</p>
  {/if}
</div>
