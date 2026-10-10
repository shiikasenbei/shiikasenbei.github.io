<script lang="ts">
  const modules = import.meta.glob("$lib/assets/art/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
  })
  const works = Object.entries(modules)
    .map(([path, src]) => ({
      src: src as string,
      name: path.split("/").pop()?.replace(".webp", "") ?? "",
    }))
    .reverse()
</script>

<div>
  <p class="section-heading">latest works</p>
  <p class="help-text">
    all my completed hololive work can be found on
    <a
      href="https://www.pixiv.net/en/users/128340030"
      target="_blank"
      rel="noopener noreferrer"
      class="link-styling"
    >
      pixiv
    </a>.
  </p>
  <p class="help-text">
    unrelated arts, sketches, and wips can be found on
    <a
      href="https://x.com/shiikasenbei"
      target="_blank"
      rel="noopener noreferrer"
      class="link-styling"
    >
      twitter
    </a>.
  </p>
  <div>
    <div class="columns-1 gap-4 py-4 md:columns-2 lg:columns-3">
      {#each works as work}
        <img
          src={work.src}
          alt={work.name}
          loading="lazy"
          decoding="async"
          draggable="false"
          oncontextmenu={() => false}
          class="pointer-events-none mb-4 w-full break-inside-avoid rounded-md border border-gray-400 select-none"
        />
      {/each}
    </div>
  </div>
</div>
