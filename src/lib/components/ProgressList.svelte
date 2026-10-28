<script lang="ts">
  import { type WorkItem, Status } from "$lib/types"
  import WorkItemCard from "./WorkItemCard.svelte"
  import { ANNOUNCEMENTS } from "$lib/constants"

  let { things }: { things: Record<Status, WorkItem[]> } = $props()
  const announcements = ANNOUNCEMENTS
</script>

{#snippet workList(items: WorkItem[])}
  <div>
    {#each items as item}
      <div class="border-b border-gray-400 last:border-none">
        <WorkItemCard workItem={item} />
      </div>
    {:else}
      <p class="p-2 text-lg">it's looking a bit empty...</p>
    {/each}
  </div>
{/snippet}

{#snippet board(heading: string, style: string, status: Status)}
  <div class="h-[calc(100dvh/3)]">
    <div class={`border-t-6 ${style} border-b border-b-gray-400`}>
      <p class="text-lg p-2">{heading}</p>
    </div>
    {@render workList(things[status])}
  </div>
{/snippet}

<div class="w-full">
  <!-- <p class="section-heading">things i'm working on</p> -->
  {#if announcements.length > 0}
    <div class="my-1 border-b border-gray-200 pb-2">
      <p class="subsection-heading">announcements</p>
      {#each announcements as announcement}
        <p class="subsection-body">{announcement}</p>
      {/each}
    </div>
  {/if}
  <!-- <div class="my-1 border-b border-gray-200 pb-2">
    {@render workList(inProgress, "shika-blue", "in queue")}
  </div>
  <div>
    <p class="subsection-heading">backlog (note that these are not in order):</p>
    {@render workList(backlog, '', '')}
  </div> -->
  <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
    {@render board("in progress", "border-status-blue", Status.InProgress)}
    {@render board("in queue", "border-status-yellow", Status.InQueue)}
    {@render board("on hold", "border-status-red", Status.OnHold)}
    {@render board("backlog", "border-status-gray", Status.Backlog)}
  </div>
</div>
