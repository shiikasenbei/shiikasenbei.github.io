<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import ProgressList from "$lib/components/ProgressList.svelte";
  import { SOCIAL_LINKS, WORK_ITEMS } from "$lib/constants";

  const links = SOCIAL_LINKS;
  const things = WORK_ITEMS;
</script>

<div class="flex h-full w-full flex-col">
  <div class="border-b border-gray-400 p-4">
    <p class="text-2xl font-bold">shika "shika" senbei</p>
    <p>i'm an idiot</p>
  </div>
  <div class="flex h-full w-full flex-row p-4">
    <div class="h-full w-1/2 border-r border-gray-400 pr-2">
      <p class="text-2xl font-bold">socials</p>
      <div class="flex flex-col py-4">
        {#each links as link}
          <div class="my-1">
            <Card name={link.name} url={link.url} username={link.username} />
          </div>
        {/each}
      </div>
    </div>
    <div class="flex-col pl-2">
      <p class="text-2xl font-bold">things i'm working on</p>
      <p class="text-sm text-gray-500 italic">
        shiori is not mentioned here, but assume she is always being drawn at any given point.
      </p>
      <div class="pb-4">
        <ProgressList {things} />
      </div>
    </div>
  </div>
</div>
