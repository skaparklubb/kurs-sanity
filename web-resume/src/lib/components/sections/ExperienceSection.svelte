<script lang="ts">
	import Experience from '../Experience.svelte';
	import SectionHeadline from '../SectionHeadline.svelte';

	interface ExpProps {
		experiences: SanityWorkExperience[];
	}
	let { experiences }: ExpProps = $props();
</script>

<section>
	<SectionHeadline sectionName={'experience'}>Arbeidserfaring</SectionHeadline>

	<ul class="work-experience-list">
		{#each experiences as experience}
			<Experience {experience} />
		{/each}
	</ul>
</section>

<style>
	.work-experience {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.work-experience-list {
		width: 50%;
	}

	.headline {
		text-align: right;
	}

	.work-item {
		border-bottom: 1px solid #f0eded;
		padding-bottom: 12px;
	}

	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}

	.work-item p {
		margin-bottom: 0;
	}

	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>
