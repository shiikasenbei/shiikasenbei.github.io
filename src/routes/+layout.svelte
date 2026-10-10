<script lang="ts">
  import "./layout.css"

  import Nav from "$lib/components/Nav.svelte"
  import { onMount, setContext } from "svelte"
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
      <p class="text-sm">the shika "shika" senbei portfolio page</p>
    </div>
    <Nav tabState={currentTab} set={setTabState} />
  </div>
  <main class="page-main">
    {@render children()}
  </main>
</div>
