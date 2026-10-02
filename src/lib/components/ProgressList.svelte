<script lang="ts">
  import type { WorkItem } from "$lib/types"
  import WorkItemCard from "./WorkItemCard.svelte"
  import { ANNOUNCEMENTS } from "$lib/constants"

  let { things }: { things: WorkItem[] } = $props()
  let inProgress = $derived(things.filter((t) => t.confirmed))
  let backlog = $derived(things.filter((t) => !t.confirmed))
  const announcements = ANNOUNCEMENTS
</script>

{#snippet workList(items: WorkItem[])}
  <div>
    {#each items as item}
      <WorkItemCard workItem={item} />
    {:else}
      <p>nothing :(</p>
    {/each}
  </div>
{/snippet}

<div class="w-full">
  <p class="section-heading">things i'm working on</p>
  <p class="help-text">
    even if shiori isn't explicitly listed here, assume she is always being drawn at any given
    point.
  </p>
  {#if announcements}
    <div class="my-1 border-b border-gray-200 pb-2">
      <p class="subsection-heading">announcements</p>
      {#each announcements as announcement}
        <p class="subsection-body">{announcement}</p>
      {/each}
    </div>
  {/if}
  <div class="my-1 border-b border-gray-200 pb-2">
    <p class="subsection-heading">in queue:</p>
    {@render workList(inProgress)}
  </div>
  <div>
    <p class="subsection-heading">backlog (note that these are not in order):</p>
    {@render workList(backlog)}
  </div>
</div>
