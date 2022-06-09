<script>
  import { fly } from "svelte/transition";
  import sheet from "$data/sheet.csv";
  import Block from "$components/Block.svelte";

  export let platformName;

  const filteredSheet = sheet.filter((d) => d[platformName] == "TRUE");
</script>

<section>
  {#each filteredSheet as data}
    <Block {...data} />
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
