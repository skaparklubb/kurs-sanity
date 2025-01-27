<script lang="ts">
	import Experience from '../Experience.svelte';
	import SectionHeadline from '../SectionHeadline.svelte';

	interface Props {
		experiences: SanityWorkExperience[];
	}

	let { experiences }: Props = $props();
</script>

<section>
	<SectionHeadline sectionName={'experience'}>Arbeidserfaring</SectionHeadline>

	<ul class="work-experience-list">
		{#each experiences as experience}
			<Experience
				title={experience.title}
				company={experience.company}
				startDate={experience.startDate}
				endDate={experience.endDate}
			/>
			
		{/each}
			
	</ul>
</section>

<style>
	

	.work-experience-list {
		width: 50%;
	}

	
</style>
