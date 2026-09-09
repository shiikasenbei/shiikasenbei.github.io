<script lang="ts">
  const modules = import.meta.glob("$lib/assets/art/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
  })
  const works = Object.entries(modules).map(([path, src]) => ({
    src: src as string,
    name: path.split("/").pop()?.replace(".webp", "") ?? "",
  }))
</script>

<div>
  <p class="section-heading">latest works</p>
  <p class="help-text">
    all my completed work can be found on
    <a
      href="https://www.pixiv.net/en/users/128340030"
      target="_blank"
      rel="noopener noreferrer"
      class="font-semibold text-black hover:underline"
    >
      pixiv
    </a>.
  </p>
  <p class="help-text">
    unrelated arts, sketches, wips, and the
    <b>shikamaxxing</b> project can be found on
    <a
      href="https://x.com/shiikasenbei"
      target="_blank"
      rel="noopener noreferrer"
      class="font-semibold text-black hover:underline"
    >
      twitter
    </a>.
  </p>
  <div class="grid grid-cols-1 items-center gap-4 py-4">
    {#each works as work}
      <img
        src={work.src}
        alt={work.name}
        loading="lazy"
        class="w-1/4 rounded-md border border-gray-400"
      />
    {/each}
  </div>
</div>
