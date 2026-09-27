<script lang="ts">
  import type { SocialLink } from "$lib/types"

  let { name, username, url, description }: SocialLink = $props()
  const openLink = () => {
    window.open(url, "_blank")
  }
</script>

<button
  type="button"
  class="flex w-full flex-col items-start rounded-md border border-gray-300 p-4 transition-colors hover:bg-gray-200 *:hover:pointer-events-none"
  onclick={openLink}
>
  <div class="flex w-full flex-row justify-between">
    <p class="text-lg font-bold">{name}</p>
    {#if description}
      <p class="text-gray-500">{description}</p>
    {/if}
  </div>
  <p>{username}</p>
</button>
