<script>
  import { fly } from "svelte/transition";
  import sheet from "$data/sheet.csv";
  import Block from "$components/Block.svelte";
</script>

<section>
  {#each sheet as data}
    <Block {...data} />
  {/each}
</section>

<style>
  section {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
