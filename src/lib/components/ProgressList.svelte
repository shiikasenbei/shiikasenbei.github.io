<div class="w-full">
    <p class="font-bold text-lg">i am currently working on:</p>
    {#each inProgress as item}
        <p>{item.name}</p>
      {:else}
        <p>NOTHING!</p>
      {/each}
    <p class="font-bold text-lg">backlog</p>
    {#each backlog as item}
    <p>{item.name}</p>
        {/each}
</div>

<script lang="ts">
  let { things }: { things: { name: string; inProgress: boolean }[] } = $props();
  let inProgress = $derived(things.filter((t) => t.inProgress));
  let backlog = $derived(things.filter((t) => !t.inProgress));
</script>
