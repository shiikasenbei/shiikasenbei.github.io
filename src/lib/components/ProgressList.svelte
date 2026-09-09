<script lang="ts">
  import type { WorkItem } from "$lib/types"

  let { things }: { things: WorkItem[] } = $props()
  let inProgress = $derived(things.filter((t) => t.inProgress))
  let backlog = $derived(things.filter((t) => !t.inProgress))
</script>

<div class="w-full">
  <p class="section-heading">things i'm working on</p>
  <p class="help-text">
    shiori isn't mentioned here, but assume she is always being drawn at any given point, even if
    she isn't.
  </p>
  <p class="subsection-heading">i am currently working on:</p>
  <div class="subsection-body">
    {#each inProgress as item}
      <p class="border-b border-gray-200 py-1 last:border-none">{item.name}</p>
    {:else}
      <p>NOTHING!</p>
    {/each}
  </div>

  <p class="subsection-heading">backlog (note that these are not in order):</p>
  <div class="subsection-body">
    {#each backlog as item}
      <p class="border-b border-gray-200 py-1 last:border-none">{item.name}</p>
    {:else}
      <p>NOTHING!</p>
    {/each}
  </div>
</div>
