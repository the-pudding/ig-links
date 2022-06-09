<script>
  import { page } from "$app/stores";
  import { browser } from "$app/env";

  import Links from "$components/Links.svelte";
  import Details from "$components/Details.svelte";

  let platformName = "instagram";

  if (browser) {
    const p = $page.url.search;
    platformName = p.split("?")[1] || "instagram";
    console.log({ platformName });
  }
</script>

<Details {platformName} />
<Links {platformName} />
