<script>
	import { base } from "$app/paths";
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
			<a href="https://pudding.cool/subscribe">
				<img aria-label="subscribe" src="{base}/assets/subscribe@2x.png" alt="subscribe" />
			</a>
			<a href="https://www.patreon.com/thepudding">
				<img aria-label="donate" src="{base}/assets/donate@2x.png" alt="donate" />
			</a>
		</div>
		<div class="social-wrapper">
			<a href="https://bsky.app/profile/puddingviz.bsky.social">
				<img aria-label="bluesky" src="{base}/assets/bluesky@2x.png" alt="bluesky" />
			</a>
			<a href="https://www.facebook.com/pudding.viz/">
				<img aria-label="facebook" src="{base}/assets/facebook@2x.png" alt="facebook" />
			</a>
			{#if platformName == "tiktok"}
				<a href="https://www.instagram.com/the.pudding/?hl=en">
					<img aria-label="instagram" src="{base}/assets/instagram@2x.png" alt="instagram" />
				</a>
			{/if}
			<a href="https://www.threads.net/@the.pudding">
				<img aria-label="threads" src="{base}/assets/threads@2x.png" alt="threads" />
			</a>
			{#if platformName == "instagram"}
				<a href="https://www.tiktok.com/@the_pudding">
					<img aria-label="tiktok" src="{base}/assets/tiktok@2x.png" alt="tiktok" />
				</a>
			{/if}
			<a href="https://twitter.com/puddingviz">
				<img aria-label="twitter" src="{base}/assets/twitter_x@2x.png" alt="twitter" />
			</a>
			<a href="https://www.youtube.com/@thepudding">
				<img aria-label="youtube" src="{base}/assets/youtube@2x.png" alt="youtube" />
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
		max-width: 45rem;
	}

	.button-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 66%;
	}

	.button-wrapper a img {
		max-width: 10rem;
		transition: transform 0.25s ease-in-out;
	}

	.button-wrapper a:hover img {
		transform: rotate(var(--left-tilt)) scale(1.05);
	}

	.social-wrapper {
		margin-left: 0.5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 22rem;
		justify-content: space-between;
	}
	.social-wrapper a img {
		width: 3rem;
		transition: transform 0.25s ease-in-out;
	}

	.social-wrapper a:hover img {
		transform: rotate(var(--left-tilt)) scale(1.05);
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
