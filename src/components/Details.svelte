<script>
	import IconCircle from "$components/helpers/IconCircle.svelte";
	import tiktokLogo from "$svg/tiktok.svg";
	import instagramLogo from "$svg/instagram.svg";
	import mastodonLogo from "$svg/mastodon.svg";
	import threadsLogo from "$svg/threads.svg";

	export let platformName;
</script>

<section>
	<p class="description">
		<span class="sr-only">The Pudding</span> is a digital publication that explains
		ideas debated in culture with visual essays.
	</p>
	<div class="ctas">
		<div class="button-wrapper">
			<a
				class="btn"
				href="https://pudding.cool/subscribe"
				>Join our newsletter</a
			>
			<a class="btn" href="https://www.patreon.com/thepudding"
				>Support us on Patreon</a
			>
		</div>
		<div class="social-wrapper">
			<p>Find us on social</p>
			<a href="https://www.facebook.com/pudding.viz/">
				<IconCircle
					name="facebook"
					fill="var(--gray)"
					stroke="none"
					strokeWidth="0"
				/>
			</a>
			<a href="https://twitter.com/puddingviz">
				<IconCircle
					name="twitter"
					fill="var(--gray)"
					stroke="none"
					strokeWidth="0"
				/>
			</a>
			{#if platformName == "tiktok"}
				<a href="https://www.instagram.com/the.pudding/?hl=en">
					<div class="round-svg">{@html instagramLogo}</div>
				</a>
			{:else}
				<a href="https://www.tiktok.com/@the_pudding">
					<div class="round-svg">{@html tiktokLogo}</div>
				</a>
			{/if}
			<a href="https://www.threads.net/@the.pudding">
				<div class="round-svg">{@html threadsLogo}</div>
			</a>
			<a href="https://vis.social/@thepudding">
				<div class="round-svg">{@html mastodonLogo}</div>
			</a>
		</div>
	</div>
	<p class="directions">Tap on an image to see the full interactive project</p>
</section>

<style>
	section {
		padding: 0 1em;
	}

	.description {
		font-family: var(--serif);
		text-align: center;
		max-width: 35rem;
		margin: 0 auto;
		font-size: 1.5em;
	}

	:global(.round-svg:hover svg path) {
		fill: var(--color-white);
	}

	.ctas {
		margin: 1.5rem auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.button-wrapper {
		display: flex;
		flex-direction: row;
	}

	a.btn {
		background-color: var(--color-gray-50);
		border: 1px solid var(--color-gray-300);
		border-radius: var(--border-radius);
		margin: 0 0.75rem 0 0;
		padding: 1rem;
		width: 12.25rem;
		height: 3.25rem;
		color: var(--color-gray-600);
		text-decoration: none;
		text-align: center;
	}

	a.btn:hover {
		background-color: var(--color-gray-900);
		color: var(--color-white);
		border: 1px solid var(--color-gray-900);
	}

	.social-wrapper {
		margin-left: 0.5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 22rem;
		justify-content: space-between;
	}
	.social-wrapper p {
		margin: 0;
		color: var(--color-gray-600);
	}

	.directions {
		max-width: 60rem;
		margin: 3rem auto 1rem auto;
		width: 100%;
		text-align: center;
		padding: 0.5rem;
		color: var(--color-gray-600);
	}

	@media only screen and (max-width: 750px) {
		.ctas {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.button-wrapper {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		a.btn {
			margin: 0 0 0.5rem 0;
			width: 15rem;
		}

		.social-wrapper {
			margin-left: 0;
			justify-content: center;
			align-items: center;
		}
	}
</style>
