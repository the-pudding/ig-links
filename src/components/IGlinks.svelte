<script>
    import sheet from "../data/sheet.csv";
    import {selection, select, selectAll} from "d3-selection";
    import { fly } from 'svelte/transition';
    import IGblock from './IGblock.svelte';

    let w;
    let visible = false;
    let hoverIndex = null;

    function toggleVisible(i) {
        hoverIndex = i;
    }
</script>

<section id='IG-links-wrapper'>
    {#each sheet as row, i}
        <IGblock row={row} imageIndex={i}/>
    {/each}
</section>

<style>
    #IG-links-wrapper {
        max-width: 60rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

</style>