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
	<div class="round-svg">
		<svg {...icon.attrs} style={`transform: rotate(${rotation}deg);`}>
			<g>
				{@html icon.contents}
			</g>
		</svg>
	</div>
{/if}

<style>
	svg {
		width: 1.5em;
		height: 1.5em;
		overflow: visible;
		transform-origin: 50% 50%;
	}

	:global(.round-svg) {
		border: 1px solid var(--color-gray-400);
		fill: var(--color-gray-400);
		height: 3rem;
		width: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 1.5rem;
		margin-left: 0.5rem;
	}

	:global(.round-svg:hover) {
		background-color: var(--color-gray-900);
		border: 1px solid var(--color-gray-900);
	}

	:global(.round-svg:hover svg) {
		fill: var(--color-white);
	}
</style>
