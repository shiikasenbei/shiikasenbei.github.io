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
      shiori novella. hololive members. sometimes umamusume. anything that provides joy and whimsy.
    </p>
  </div>
  <div class="py-1">
    <p class="subsection-heading">do you take commissions?</p>
    <p class="subsection-body">
      no. sometimes i will ask on
      <a
        href="https://x.com/shiikasenbei"
        target="_blank"
        rel="noopener noreferrer"
        class="font-semibold hover:underline"
      >
        twitter
      </a>
      for suggestions, and no, this does not mean you can freely use the artwork if i do draw it.
    </p>
    <p class="subsection-body">
      if you ask me to draw something and i say no, please don't ask me the same thing again! no
      means no.
    </p>
  </div>
  <div class="py-1">
    <p class="subsection-heading">
      what is <i>shikamaxxing</i>? and why <i>shikamax</i>?
    </p>
    <p class="subsection-body">
      draw deer for an hour, every day for 30 days. joy and whimsy increases with proven results
      from day 1.
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
