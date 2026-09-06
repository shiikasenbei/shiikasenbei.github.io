<script lang="ts">
  let { things }: { things: { name: string; inProgress: boolean }[] } = $props();
  let inProgress = $derived(things.filter((t) => t.inProgress));
  let backlog = $derived(things.filter((t) => !t.inProgress));
</script>

<div class="w-full">
  <p class="text-lg font-bold">i am currently working on:</p>
  <div class="pl-2">
    {#each inProgress as item}
      <p>{item.name}</p>
    {:else}
      <p>NOTHING!</p>
    {/each}
  </div>

  <p class="text-lg font-bold">backlog:</p>
  <div class="pl-2">
    {#each backlog as item}
      <p>{item.name}</p>
    {:else}
      <p>NOTHING!</p>
    {/each}
  </div>
</div>
