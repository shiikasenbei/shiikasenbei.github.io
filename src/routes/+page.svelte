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
  <div class="p-4">
    {#if tabState.currentTab === 0}
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="mb-4 border-b border-b-gray-400 md:mb-0 md:border-none">
          <p class="section-heading">about</p>
          <div class="py-4">
            <p>shika, (mostly) a holo fanartist</p>
            <p>
              my oc reference can be found <a
                href="https://x.com/shiikasenbei/status/2103440664952443116"
                target="_blank"
                rel="noopener noreferrer"
                class="link-styling"
              >
                here
              </a>
            </p>
            <p>
              waitlists for commissions are also open on my <a
                href="https://vgen.co/shiikasenbei"
                target="_blank"
                rel="noopener noreferrer"
                class="link-styling"
              >
                vgen
              </a>
            </p>
          </div>
        </div>
        <div class="h-full">
          <p class="section-heading">socials</p>
          <div class="flex flex-col py-4">
            {#each links as link}
              <div class="my-1">
                <Card
                  name={link.name}
                  url={link.url}
                  username={link.username}
                  description={link.description}
                  colour={link.colour}
                />
              </div>
            {/each}
          </div>
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
</div>
