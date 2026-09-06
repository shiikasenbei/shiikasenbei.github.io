<script lang="ts">
  import Card from "$lib/components/Card.svelte";
	import ProgressList from "$lib/components/ProgressList.svelte";

  const links: { name: string; username: string; url: string }[] = [
    { name: "instagram", username: "@shiikasenbei", url: "https://instagram.com/shiikasenbei" },
    { name: "twitter", username: "@shiikasenbei", url: "https://x.com/shiikasenbei" },
    { name: "twitch", username: "@shiikasenbei", url: "https://twitch.tv/shiikasenbei" },
    { name: "discord server", username: "shikacord", url: "https://discord.com/invite/qEXM5PzTqB" },
    { name: "pixiv", username: "shika", url: "https://www.pixiv.net/en/users/128340030" },
  ];
  const things: { name: string; inProgress: boolean }[] = [
    { name: "30 days of shikamaxxing", inProgress: true},
    { name: "haru urara", inProgress: false },
  ];
</script>
<div class="w-full h-full flex-col flex">
    <div class="border-b border-gray-500 p-4">
        <p class="text-2xl font-bold">shika "shika" senbei</p>
        <p>
            i'm an idiot
        </p>
    </div>
    <div class="flex w-full h-full flex-row p-4">
      <div class="w-1/2 h-full border-r border-gray-500 pr-2">
        <p class="text-2xl font-bold">socials</p>
        <div class="flex flex-col py-4">
          {#each links as link}
              <div class="my-1">
                  <Card name={link.name} url={link.url} username={link.username} />
              </div>
          {/each}
        </div>
      </div>
      <div class="flex-col pl-2">
        <p class="text-2xl font-bold">things i'm working on</p>
        <ProgressList things={things}/>
      </div>
    </div>
</div>
