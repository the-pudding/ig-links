<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { csvParse } from "d3";
  import sheet from "$data/sheet.csv";
  import Block from "$components/Block.svelte";

  export let platformName;
  let data = [];

  onMount(async () => {
    const response = await fetch(`${base}/assets/data.csv?version=${Date.now()}`);
    const text = await response.text();
    const parsed = csvParse(text);
    data = parsed.filter((d) => d[platformName] === "TRUE");
  });
</script>

<section>
  {#each data as d}
    <Block {...d} />
  {/each}
</section>

<style>
  section {
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
