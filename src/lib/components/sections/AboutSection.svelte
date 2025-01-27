<script lang="ts">
	import SectionHeadline from '../SectionHeadline.svelte';
	import { getTagFromStyle } from '$lib/utils/sanity';

	interface Props {
		about: ProcessedAbout;
	}
	let { about }: Props = $props();

</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={'about-me'}>Om Meg</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img class="image" src={about.aboutImageUrl} alt="" />
		<div class="text">
			{#each about.description as block}
        {#if block.type === "text"}
          <svelte:element this={getTagFromStyle(block.style)}
            >{block.textToRender}</svelte:element
          >
        {:else}
          <img class="content-image" src={block.url} alt="" />
        {/if}
      {/each}
		</div>
	</div>
</section>

<style>
	p {
		font-size: 1.5rem;
		line-height: 1.2;
		margin-bottom: 1.5rem;
	}
	.content-container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}

	.image {
		width: 42%;
		border-radius: 20px;
		object-fit: cover;
	}

	.text {
		width: 55%;
		text-align: left;
	}
</style>
