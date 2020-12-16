<script>
    import sheet from "../data/sheet.csv";
    import {selection, select, selectAll} from "d3-selection";
    import { fly } from 'svelte/transition';

    let w;
    let visible = false;

    function handleIn(event) {
        visible = true
    }

    function handleOut(event) {
        visible = false
    }
</script>

<section id='IG-links-wrapper'>
    {#each sheet as row, i}
        <div class='IG-block' id='block_{row.id}'>
            <div class='img-wrapper' on:mouseover={handleIn} on:mouseleave={handleOut} bind:clientWidth={w} style='height: {w}px'>
                <img class='IG-img' src="assets/images/{row.id}.jpg" alt="instagram image">
                {#if visible}
                    <p transition:fly="{{ y: w, duration: 500 }}" class='IG-hed'>{row.hed}</p>
                {/if}
            </div>
            <div class='link-wrapper'>
                <p>Related links</p>
                <ul>
                    {#if row.relatedLinkText1}
                        <a href="{row.relatedLinkURL1}"><li>{row.relatedLinkText1}</li></a>
                    {/if}
                    {#if row.relatedLinkText2}
                        <a href="{row.relatedLinkURL2}"><li>{row.relatedLinkText2}</li></a>
                    {/if}
                    {#if row.relatedLinkText3}
                        <a href="{row.relatedLinkURL3}"><li>{row.relatedLinkText3}</li></a>
                    {/if}
                </ul>
            </div>
        </div>
    {/each}
</section>

<style>
    #IG-links-wrapper {
        max-width: 60rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .IG-block {
        width: calc(33% - 1rem);
        margin: 0.5rem;
    }

    .img-wrapper {
        position: relative;
        overflow: hidden;
    }

    .IG-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    .IG-hed {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 1rem;
        font-size: 2rem;
        text-align: center;
        background-color: rgba(40, 40, 40, 0.75);
        margin: 0;
        color: var(--white);
        display: flex;
        align-items: center;
        transition: 1s ease-in-out;
    }

    .link-wrapper p {
        font-size: 0.75em;
    }

    ul {
        width: 100%;
        list-style-type: none;
    }

    li {
        width: 100%;
        border-bottom: 1px solid var(--gray-light);
        padding: 0.5rem 0;
        font-size: 0.75em;
    }

</style>