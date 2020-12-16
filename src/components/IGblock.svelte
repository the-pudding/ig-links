<script>
    import { fly } from 'svelte/transition';
    import Icon from "./helpers/Icon.svelte";

    export let row={};
    let w;
    let visible = false;

    function toggleVisible() {
        visible = !visible
    }
</script>

<div class='IG-block' id='block_{row.id}'>
    <a href="{row.storyURL}">
        <div class='img-wrapper' on:mouseenter|self={toggleVisible} on:mouseleave={toggleVisible} bind:clientWidth={w} style='height: {w}px'>
            <img class='IG-img' src="assets/images/{row.id}.jpg" alt="instagram image">
            {#if visible}
                <p transition:fly="{{y: w, duration: 500 }}" class='IG-hed'>{row.hed}</p>
            {/if}
        </div>
    </a>
    <div class='link-wrapper'>
        {#if row.relatedLinkText1}
            <p>Related links</p>
        {/if}
        <ul>
            {#if row.relatedLinkText1}
                <a href="{row.relatedLinkURL1}">
                    <li>{row.relatedLinkText1}
                        <span><Icon name="arrow-right" stroke="var(--gray-light)"/></span>
                    </li>
                </a>
            {/if}
            {#if row.relatedLinkText2}
                <a href="{row.relatedLinkURL2}">
                    <li>{row.relatedLinkText2}
                        <span><Icon name="arrow-right" stroke="var(--gray-light)"/></span>
                    </li>
                </a>
            {/if}
            {#if row.relatedLinkText3}
                <a href="{row.relatedLinkURL3}">
                    <li>{row.relatedLinkText3}
                        <span><Icon name="arrow-right" stroke="var(--gray-light)"/></span>
                    </li>
                </a>
            {/if}
        </ul>
    </div>
</div>

<style>
    .IG-block {
        width: calc(33% - 1rem);
    }

    .img-wrapper {
        position: relative;
        overflow: hidden;
    }

    .img-wrapper:hover {
        outline: 5px solid var(--off-black);
        box-sizing: border-box;
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

    .link-wrapper {
        height: 10rem;
        margin: 1rem 0;
    }

    .link-wrapper p {
        font-size: 0.75em;
        color: var(--gray-dark);
        margin: 0;
    }

    ul {
        width: 100%;
        list-style-type: none;
    }

    ul a {
        color: var(--gray-dark);
        text-decoration: none;
    }

    li {
        width: 100%;
        border-bottom: 1px solid var(--gray-light);
        padding: 0.5rem 0;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    li span {
        padding: 0 0 0 0.25rem;
        position: relative;
        top: 0.125rem;
        opacity: 0;
    }

    ul a:hover  {
        color: var(--off-black);
    }

    ul a:hover li span {
        transition: 0.25s ease-in-out;
        opacity: 1;
        animation: bounceRight 1s infinite;
    }

    @media only screen and (max-width: 720px) {
        .IG-block {
            width: calc(50% - 1rem);
        } 

        .IG-hed {
            font-size: 1.5rem;
        }
    }

    @keyframes bounceRight {
        0%       { left:1px; }
        25%, 75% { left:2px; }
        50%      { left:3px; }
        100%     { left:0; }
    }
</style>