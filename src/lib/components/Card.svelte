<script lang="ts">
  import type { SocialLink } from "$lib/types"

  let { name, username, url, description, colour }: SocialLink = $props()
  const openLink = () => {
    window.open(url, "_blank")
  }
</script>

<button
  type="button"
  class={`flex w-full flex-col items-start border-t-6 p-4 transition-colors hover:bg-gray-200 *:hover:pointer-events-none ${colour}`}
  onclick={openLink}
>
  <div class="flex w-full flex-row justify-between">
    <p class="text-lg font-bold">{name}</p>
    {#if description}
      <p class="bg-info-gray p-1 text-white">{description}</p>
    {/if}
  </div>
  <p>{username}</p>
</button>
