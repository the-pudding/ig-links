<script>
  import feather from "feather-icons";
  export const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];

  export let name;
  export let direction = "n";
  export let strokeWidth;
  export let stroke;
  export let fill;

  $: icon = feather.icons[name];
  $: rotation = directions.indexOf(direction) * 45;
  $: if (icon) {
    if (stroke) icon.attrs["stroke"] = stroke;
    if (strokeWidth) icon.attrs["stroke-width"] = strokeWidth;
    if (fill) icon.attrs["fill"] = fill;
  }
</script>

{#if icon}
      <svg {...icon.attrs} style="{`transform: rotate(${rotation}deg);`}">
        <g>
          {@html icon.contents}
        </g>
      </svg>
{/if}

<style>
  svg {
    width: 1.125em;
    height: 1.125em;
    overflow: visible;
    transform-origin: 50% 50%;
  }
</style>
