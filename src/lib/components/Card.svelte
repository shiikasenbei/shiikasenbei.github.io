<script lang="ts">
  let { name, username, url }: { name: string; username: string; url: string } = $props();
  const openLink = () => {
    window.open(url, "_blank");
  };
</script>

<button
  type="button"
  class="flex w-full flex-col items-start rounded-md border border-gray-400 p-4 transition-colors hover:bg-gray-200 *:hover:pointer-events-none"
  onclick={openLink}
>
  <p class="text-lg font-bold">{name}</p>
  <p>{username}</p>
</button>
