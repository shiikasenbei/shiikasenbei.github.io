<script lang="ts">
  import Card from "$lib/components/Card.svelte"
  import FAQ from "$lib/components/FAQ.svelte"
  import Gallery from "$lib/components/Gallery.svelte"
  import ProgressList from "$lib/components/ProgressList.svelte"
  import { SOCIAL_LINKS, WORK_ITEMS } from "$lib/constants"
  import { getContext } from "svelte"

  const links = SOCIAL_LINKS
  const things = WORK_ITEMS
  const tabState = getContext<{ currentTab: number }>("tabState")
</script>

<div class="flex h-full w-full flex-col">
  <div class="p-4 md:hidden lg:hidden">
    {#if tabState.currentTab === 0}
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
    {:else if tabState.currentTab === 1}
      <div class="flex-col">
        <div class="pb-4">
          <ProgressList {things} />
        </div>
      </div>
    {:else if tabState.currentTab === 2}
      <Gallery />
    {:else if tabState.currentTab === 3}
      <FAQ />
    {/if}
  </div>
  <div class="hidden h-full w-full flex-row p-4 md:flex lg:flex">
    {#if tabState.currentTab === 0}
      <div class="h-full w-1/2 border-r border-gray-400 pr-4">
        <p class="section-heading">socials</p>
        <div class="flex flex-col py-4">
          {#each links as link}
            <div class="my-1">
              <Card name={link.name} url={link.url} username={link.username} />
            </div>
          {/each}
        </div>
      </div>
      <div class="h-full w-1/2 flex-col pl-4">
        <div class="pb-4">
          <ProgressList {things} />
        </div>
      </div>
    {:else if tabState.currentTab === 2}
      <Gallery />
    {:else if tabState.currentTab === 3}
      <div class="w-1/2 flex-col">
        <FAQ />
      </div>
    {/if}
  </div>
</div>
