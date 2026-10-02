<script lang="ts">
  import type { WorkItem } from "$lib/types"
  import { ArrowUpRight } from "@lucide/svelte"

  let { workItem }: { workItem: WorkItem } = $props()
  let hasHref = $derived(workItem.link !== undefined)
</script>

<div class="my-1 rounded-md border border-gray-300 p-4">
  <div class="flex w-full flex-row justify-between">
    <div class="flex flex-row align-middle">
      {#if hasHref}
        <a
          href={workItem.link}
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold hover:underline"
        >
          {workItem.name}
        </a>
        <ArrowUpRight class="size-5" />
      {:else}
        <p class="font-bold">
          {workItem.name}
        </p>
      {/if}
    </div>

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
