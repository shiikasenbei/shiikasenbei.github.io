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
    <div class="flex w-1/2 flex-row items-center">
      <img alt="deer" src={deer} class="h-12 w-12" />
      <p class="px-2 text-sm text-gray-500">(if you can't see the image open it in a new tab)</p>
    </div>
    <div class="flex flex-col pl-2">
      <p class="font-bold">the shika portfolio shitpost website</p>
      <p class="text-gray-500">
        designed and built by shika "shika" senbei, for shika "shika" senbei
      </p>
    </div>
  </footer>
</div>
