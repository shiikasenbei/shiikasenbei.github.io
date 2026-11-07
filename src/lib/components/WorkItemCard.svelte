<script lang="ts">
  import type { WorkItem } from "$lib/types"
  import { ArrowUpRight } from "@lucide/svelte"
  import { openLink } from "$lib/util"
  let { workItem }: { workItem: WorkItem } = $props()
  let hasHref = $derived(workItem.link !== undefined)
</script>

<div class="my-1 p-2">
  <div class="flex w-full flex-row justify-between">
    {#if hasHref}
      <button
        type="button"
        class="flex flex-row align-middle hover:cursor-pointer hover:underline"
        onclick={() => openLink(workItem.link)}
      >
        <p class="hover:pointer-events-none">
          {workItem.name}
        </p>
        <ArrowUpRight class="size-5" />
      </button>
    {:else}
      <p>
        {workItem.name}
      </p>
    {/if}
    {#if workItem.extraneousText}
      <p class="bg-info-gray text-white">{workItem.extraneousText}</p>
    {/if}
  </div>
  {#if workItem.description}
    <p class="help-text">{workItem.description}</p>
  {/if}
</div>
