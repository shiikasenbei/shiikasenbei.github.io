<script lang="ts">
  import Card from "$lib/components/Card.svelte"
  import ProgressList from "$lib/components/ProgressList.svelte"
  import { SOCIAL_LINKS, WORK_ITEMS } from "$lib/constants"
  import { MediaQuery } from "svelte/reactivity"

  const links = SOCIAL_LINKS
  const things = WORK_ITEMS
  let currentTab = $state(0) // 0: socials, 1: things i'm working on
  const setTabState = (tab: number) => {
    currentTab = tab
  }
</script>

<div class="flex h-full w-full flex-col">
  <div class="border-b border-gray-400 p-4">
    <p class="text-2xl font-bold">shika "shika" senbei</p>
    <p>i'm an idiot</p>
  </div>
  <div
    class="flex flex-row border-b border-gray-400 *:font-bold *:transition-colors md:hidden lg:hidden"
  >
    <button onclick={() => setTabState(0)} class="p-4">
      <p class={currentTab !== 0 ? "text-gray-400" : "text-black"}>socials</p>
    </button>
    <button onclick={() => setTabState(1)} class="p-4">
      <p class={currentTab !== 1 ? "text-gray-400" : "text-black"}>things i'm working on</p>
    </button>
  </div>
  <div class="p-4 md:hidden lg:hidden">
    {#if currentTab == 0}
      <div class="h-full">
        <p class="text-2xl font-bold">socials</p>
        <div class="flex flex-col py-4">
          {#each links as link}
            <div class="my-1">
              <Card name={link.name} url={link.url} username={link.username} />
            </div>
          {/each}
        </div>
      </div>
    {:else if currentTab == 1}
      <div class="flex-col">
        <p class="text-2xl font-bold">things i'm working on</p>
        <p class="text-sm text-gray-500 italic">
          shiori is not mentioned here, but assume she is always being drawn at any given point.
        </p>
        <div class="pb-4">
          <ProgressList {things} />
        </div>
      </div>
    {/if}
  </div>
  <div class="hidden h-full w-full flex-row p-4 md:flex lg:flex">
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
    <div class="w-1/2 flex-col pl-2">
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
