<script lang="ts">
	interface ExpProps {
		experience: SanityWorkExperience;
	}
	let { experience }: ExpProps = $props();
</script>

<div class="work-experience">
	<h3>{experience.title}</h3>
	<p>{experience.company}</p>
	<p>{experience.startDate}</p>
	<p>{experience.endDate}</p>
</div>
