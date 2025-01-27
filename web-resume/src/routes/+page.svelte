<script>
	import ExperienceSection from '$lib/components/sections/ExperienceSection.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';

	const { data } = $props();
	let {
		experiences
		// projects,
		// skills
	} = data;
</script>

<HeroSection />

<div class="m-4">
	<ExperienceSection {experiences} />
</div>
