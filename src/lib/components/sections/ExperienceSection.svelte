<script lang="ts">
	import Experience from '../Experience.svelte';
	import SectionHeadline from '../SectionHeadline.svelte';

</script>

<section>
	<SectionHeadline sectionName={'experience'}>Arbeidserfaring</SectionHeadline>

	<ul class="work-experience-list">
			<Experience
				title="Arbeid 3"
				company="Bedrift 3"
				startDate="2022-01-01"
				
			/>
			<Experience
				title="Arbeid 2"
				company="Bedrift 2"
				startDate="2021-01-01"
				endDate="2022-01-01"
			/>
			<Experience
				title="Arbeid 1"
				company="Bedrift 1"
				startDate="2020-01-01"
				endDate="2020-01-01"
			/>
		
	</ul>
</section>

<style>
	

	.work-experience-list {
		width: 50%;
	}

	
</style>
