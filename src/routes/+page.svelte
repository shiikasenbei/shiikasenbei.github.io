<script lang="ts">
  import Card from "$lib/components/Card.svelte"
  import FAQ from "$lib/components/FAQ.svelte"
  import ProgressList from "$lib/components/ProgressList.svelte"
  import { SOCIAL_LINKS, WORK_ITEMS } from "$lib/constants"

  const links = SOCIAL_LINKS
  const things = WORK_ITEMS
  let currentTab = $state(0) // 0: socials, 1: things i'm working on, 2: faq
  const setTabState = (tab: number) => {
    currentTab = tab
  }
</script>

<div class="flex h-full w-full flex-col">
  <div
    class="flex flex-row border-b border-gray-400 p-1 *:font-bold *:transition-colors md:hidden lg:hidden"
  >
    <button
      onclick={() => setTabState(0)}
      class="rounded-md p-3 transition-colors hover:bg-gray-200"
    >
      <p class={currentTab !== 0 ? "text-gray-400" : "text-black"}>socials</p>
    </button>
    <button
      onclick={() => setTabState(1)}
      class="rounded-md p-3 transition-colors hover:bg-gray-200"
    >
      <p class={currentTab !== 1 ? "text-gray-400" : "text-black"}>things i'm working on</p>
    </button>
    <button
      onclick={() => setTabState(2)}
      class="rounded-md p-3 transition-colors hover:bg-gray-200"
    >
      <p class={currentTab !== 2 ? "text-gray-400" : "text-black"}>faq</p>
    </button>
  </div>
  <div class="p-4 md:hidden lg:hidden">
    {#if currentTab == 0}
      <div class="h-full">
        <p class="section-heading">socials</p>
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
        <div class="pb-4">
          <ProgressList {things} />
        </div>
      </div>
    {:else if currentTab == 2}
      <FAQ />
    {/if}
  </div>
  <div class="hidden h-full w-full flex-row p-4 md:flex lg:flex">
    <div class="h-full w-1/2 pr-4">
      <p class="section-heading">socials</p>
      <div class="flex flex-col py-4">
        {#each links as link}
          <div class="my-1">
            <Card name={link.name} url={link.url} username={link.username} />
          </div>
        {/each}
      </div>
    </div>
    <div class="w-1/2 flex-col border-l border-gray-400 pl-4">
      <div class="pb-4">
        <ProgressList {things} />
      </div>
      <div class="flex-col border-t border-gray-400 pt-4">
        <FAQ />
      </div>
    </div>
  </div>
</div>
