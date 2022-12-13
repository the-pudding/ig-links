<script>
  import { fly } from "svelte/transition";
  import { Image } from "svelte-lazy-loader";
  import Icon from "$components/helpers/Icon.svelte";

  export let id;
  export let hed;
  export let url;
  export let instagram;
  export let tiktok;
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
    <a class="wrapper" href={url} target="_blank">
      <Image classes="image" src="assets/images/{id}.jpg" alt="instagram" />
    </a>
  {:else}
    <div class="wrapper">
      <Image classes="image" src="assets/images/{id}.jpg" alt="instagram" />
    </div>
  {/if}

  <div class="text-wrapper">
    {#if url}
      <a href={url} target="_blank">
        <p class="hed">{hed}</p>
      </a>
    {:else}
      <p class="hed">{hed}</p>
    {/if}
    {#if text1}
      <div class="link-wrapper">
        <ul>
          {#if text1}
            <a href={url1} target="_blank">
              <li>
                <span
                  ><Icon
                    name={icon1}
                    stroke="var(--color-gray-600)"
                    strokeWidth="1px"
                  /></span
                >
                {text1}
              </li>
            </a>
          {/if}
          {#if text2}
            <a href={url2} target="_blank">
              <li>
                <span
                  ><Icon
                    name={icon2}
                    stroke="var(--color-gray-600)"
                    strokeWidth="1px"
                  /></span
                >
                {text2}
              </li>
            </a>
          {/if}
          {#if text3}
            <a href={url3} target="_blank">
              <li>
                <span
                  ><Icon
                    name={icon3}
                    stroke="var(--color-gray-600)"
                    strokeWidth="1px"
                  /></span
                >
                {text3}
              </li>
            </a>
          {/if}
        </ul>
      </div>
      {/if}
    </div>
  </div>

<style>
  .block {
    width: 100%;
    background-color: var(--color-white);
    padding: 2rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    box-shadow: 0 1rem 1rem var(--color-gray-100);
    border-radius: var(--border-radius);
  }

  .block .wrapper {
    width: 10rem;
    height: 10rem;
    margin-right: 1rem;
  }

  :global(.image) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  .wrapper:hover {
    transform: scale(1.025);
    transition: transform .1s ease-in; 
  }

  .text-wrapper {
    width: calc(100% - 11rem);
    display: flex;
    flex-direction: column;
  }

  .text-wrapper a {
    text-decoration: none;
  }

  .hed {
    font-size: 2rem;
    line-height: 1.25;
    text-align: left;
    margin: 0;
    color: var(--color-gray-900);
    display: flex;
    align-items: center;
  }

  .hed:hover {
    text-decoration: underline;
  }

  .link-wrapper {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
  }

  .link-wrapper p {
    font-size: 0.75em;
    color: var(--color-gray-600);
    margin: 0;
    width: 4rem;
  }

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }

  ul a {
    color: var(--color-gray-600);
    text-decoration: none;
    margin-right: 2rem;
  }

  li {
    width: 100%;
    padding: 0;
    font-size: 1em;
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
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    .block .wrapper {
      width: 8rem;
      height: 8rem;
    }

    .text-wrapper {
      width: calc(100% - 9rem);
    }

    .hed {
      font-size: 1.5rem;
    }

    ul {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 450px) {
    .block {
      flex-direction: column;
    }

    .block .wrapper {
      width: 100%;
      padding-top: 100%;
      margin-right: 0;
      position: relative;
    }

    :global(.image) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .text-wrapper {
      width: 100%;
      margin-top: 1rem;
    }
  }
</style>
