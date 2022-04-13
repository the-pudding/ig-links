<script>
  import { fly } from "svelte/transition";
  import { Image } from "svelte-lazy-loader";
  import Icon from "$components/helpers/Icon.svelte";

  export let id;
  export let hed;
  export let url;
  export let text1;
  export let url1;
  export let icon1;
  export let text2;
  export let url2;
  export let icon2;
  export let text3;
  export let url3;
  export let icon3;

  let visible = false;

  const toggleVisible = () => (visible = !visible);

  $: w = 100;
</script>

<div class="block">
  {#if url}
    <a class="wrapper" href={url} on:mouseenter|self={toggleVisible} on:mouseleave={toggleVisible}>
      <Image classes="image" src="assets/images/{id}.jpg" alt="instagram" />
      {#if visible}
        <p transition:fly={{ y: w, duration: 250 }} class="hed">
          {hed}
        </p>
      {/if}
    </a>
  {:else}
    <div class="wrapper">
      <Image classes="image" src="assets/images/{id}.jpg" alt="instagram" />
    </div>
  {/if}

  <div class="link-wrapper">
    {#if text1}
      <p>Related</p>
    {/if}
    <ul>
      {#if text1}
        <a href={url1}>
          <li>
            <span
              ><Icon
                name={icon1}
                stroke="var(--color-gray-600)"
                strokeWidth="1px"
                fill="none"
              /></span
            >
            {text1}
          </li>
        </a>
      {/if}
      {#if text2}
        <a href={url2}>
          <li>
            <span
              ><Icon
                name={icon2}
                stroke="var(--color-gray-600)"
                strokeWidth="1px"
                fill="none"
              /></span
            >
            {text2}
          </li>
        </a>
      {/if}
      {#if text3}
        <a href={url3}>
          <li>
            <span
              ><Icon
                name={icon3}
                stroke="var(--color-gray-600)"
                strokeWidth="1px"
                fill="none"
              /></span
            >
            {text3}
          </li>
        </a>
      {/if}
    </ul>
  </div>
</div>

<style>
  .block {
    width: calc(33% - 1rem);
  }

  .block .wrapper {
    display: block;
    aspect-ratio: 1;
    overflow: hidden;
    position: relative;
  }

  @supports not (aspect-ratio: 1 / 1) {
    .block .wrapper::before {
      float: left;
      padding-top: 100%;
      content: "";
    }

    .block .wrapper::after {
      display: block;
      content: "";
      clear: both;
    }
  }

  :global(.image) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .hed {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;
    background-color: rgba(40, 40, 40, 0.75);
    margin: 0;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s ease-in-out;
  }

  .link-wrapper {
    height: 10rem;
    margin: 1rem 0;
  }

  .link-wrapper p {
    font-size: 0.75em;
    color: var(--color-gray-600);
    margin: 0;
  }

  ul {
    width: 100%;
    list-style-type: none;
  }

  ul a {
    color: var(--color-gray-600);
    text-decoration: none;
  }

  li {
    width: 100%;
    border-bottom: 1px solid var(--color-gray-300);
    padding: 0.5rem 0;
    font-size: 0.9em;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li span {
    padding: 0 0.25rem 0 0;
    position: relative;
    top: 0.125rem;
  }

  ul a:hover {
    color: var(--color-gray-900);
    font-weight: 700;
  }

  @media only screen and (max-width: 720px) {
    .block {
      width: calc(50% - 1rem);
    }

    .hed {
      font-size: 1.25rem;
      display: none;
    }
  }

  @media only screen and (max-width: 400px) {
    .block {
      width: 100%;
    }
    .hed {
      display: none;
    }
  }
</style>
