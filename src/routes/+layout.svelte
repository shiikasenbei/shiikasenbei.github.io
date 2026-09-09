<script lang="ts">
  import "./layout.css"

  import deer from "$lib/assets/deer.jpeg"
  import Nav from "$lib/components/Nav.svelte"
  import { setContext } from "svelte"
  let { children } = $props()
  let currentTab = $state(0) // 0: socials, 1: things i'm working on, 2: faq
  const setTabState = (tab: number) => {
    currentTab = tab
  }
  setContext("tabState", {
    get currentTab() {
      return currentTab
    },
    setTabState,
  })
</script>

<svelte:head>
  <title>shika "shika" senbei</title>
</svelte:head>
<div class="page-wrapper">
  <div class="page-nav">
    <div class="border-b border-gray-400 p-4">
      <p class="section-heading">shika "shika" senbei</p>
      <p>i'm an idiot, and an artist apparently</p>
    </div>
    <Nav tabState={currentTab} set={setTabState} />
  </div>
  <main class="page-main">
    {@render children()}
  </main>
  <footer class="page-footer">
    <div class="flex w-1/2 flex-row items-center">
      <img
        alt="deer"
        src={deer}
        class="h-12 w-12"
        title="(if you can't see the image open it in a new tab)"
      />
      <p class="hidden px-2 text-sm text-gray-500 md:flex lg:flex">
        (if you can't see the image open it in a new tab)
      </p>
    </div>
    <div class="flex flex-col pl-2">
      <p class="font-bold">the shika senbei shitpost (portfolio) website</p>
      <p class="text-gray-500">
        designed and built by shika "shika" senbei, for shika "shika" senbei
      </p>
    </div>
  </footer>
</div>
