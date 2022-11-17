<script>
  import { browser } from "$app/env";

  import Links from "$components/Links.svelte";
  import Details from "$components/Details.svelte";

  let platformName = "instagram";

  if (browser) {
    const p = window.location.search;
    platformName = p.split("?")[1] === "tiktok" ? "tiktok" : "instagram";
  }
</script>

<Details {platformName} />
<Links {platformName} />
