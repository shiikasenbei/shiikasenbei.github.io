<script lang="ts">
  import type { WorkItem } from "$lib/types"

  let { workItem }: { workItem: WorkItem } = $props()
</script>

<div class="my-1 rounded-md border border-gray-300 p-4">
  <div class="flex w-full flex-row justify-between">
    <p class="font-bold">
      {workItem.name}
    </p>
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
