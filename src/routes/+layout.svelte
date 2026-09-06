<script lang="ts">
  import "./layout.css";

  import deer from "$lib/assets/deer.jpeg";
  let { children } = $props();
</script>

<svelte:head>
  <title>shika "shika" senbei</title>
</svelte:head>
<div class="page-wrapper">
  <main class="page-main">
    {@render children()}
  </main>
  <footer class="page-footer">
    <div class="w-1/2">
      <img alt="deer" src={deer} class="h-16 w-16" />
    </div>
    <div class="w-1/2 flex-col">
      <p class="font-bold">shika portfolio shitpost website</p>
      <p class="text-gray-600">designed by shika for shika "shika" senbei</p>
    </div>
  </footer>
</div>
