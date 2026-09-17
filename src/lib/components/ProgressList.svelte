<script lang="ts">
  import type { WorkItem } from "$lib/types"

  let { things }: { things: WorkItem[] } = $props()
  let inProgress = $derived(things.filter((t) => t.confirmed))
  let backlog = $derived(things.filter((t) => !t.confirmed))
</script>

<div class="w-full">
  <p class="section-heading">things i'm working on</p>
  <p class="help-text">
    even if shiori isn't explicitly listed here, assume she is always being drawn at any given
    point.
  </p>
  <p class="subsection-heading">in queue:</p>
  <div class="subsection-body">
    {#each inProgress as item}
      <div
        class="flex w-full flex-row content-between border-b border-gray-200 py-1 last:border-none"
      >
        <p class="w-1/2">{item.name}</p>
        {#if item.inProgress}
          <p class="w-1/2 text-right">[in progress]</p>
        {/if}
      </div>
    {:else}
      <p>NOTHING!</p>
    {/each}
  </div>

  <p class="subsection-heading">backlog (note that these are not in order):</p>
  <div class="subsection-body">
    {#each backlog as item}
      <div
        class="flex w-full flex-row content-between border-b border-gray-200 py-1 last:border-none"
      >
        <p class="w-1/2">{item.name}</p>
        {#if item.candidate}
          <p class="w-1/2 text-right">[next in queue]</p>
        {/if}
      </div>
    {:else}
      <p>NOTHING!</p>
    {/each}
  </div>
</div>
