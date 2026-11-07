<script lang="ts">
  import getmynameright from "$lib/assets/getmynameright.jpeg"
</script>

{#snippet sections()}
  <div class="inline-flex">
    <p class="section-heading text-gray-400">in</p>
    <p class="section-heading">frequently asked questions</p>
  </div>
  <div class="py-1">
    <p class="subsection-heading">what do you draw?</p>
    <p class="subsection-body">
      shiori novella. hololive members. sometimes umamusume. anything with joy and whimsy.
    </p>
  </div>
  <div class="py-1">
    <p class="subsection-heading">do you take commissions?</p>
    <p class="subsection-body">
      waitlists for portraits/bust up/half body paintings are open on
      <a
        href="https://vgen.co/shiikasenbei"
        target="_blank"
        rel="noopener noreferrer"
        class="link-styling"
      >
        vgen
      </a>.
    </p>
  </div>
  <div class="py-1">
    <p class="subsection-heading">where should i contact you?</p>
    <p class="subsection-body">
      for whatever reason if there is a need to contact me, please do so on
      <a
        href="https://x.com/shiikasenbei"
        target="_blank"
        rel="noopener noreferrer"
        class="link-styling"
      >
        twitter
      </a>.
    </p>
  </div>
{/snippet}

<div class="flex w-full flex-col">
  <div class="hidden w-full flex-row md:flex">
    <div class="w-1/2">
      {@render sections()}
    </div>
    <div class="w-1/2">
      <img alt="get my name right" src={getmynameright} title="get my name right" />
      <p class="text-center text-lg font-bold">
        (disclaimer: both spellings are fine it's just funny)
      </p>
    </div>
  </div>
  <div class="flex flex-col md:hidden">
    {@render sections()}
    <img alt="get my name right" src={getmynameright} title="get my name right" />
    <p class="text-center text-sm font-bold">
      (disclaimer: both spellings are fine it's just funny)
    </p>
  </div>
</div>
