<script lang="ts">
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ExperienceSection from '$lib/components/sections/ExperienceSection.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import ProjectSection from '$lib/components/sections/ProjectSection.svelte';

	const { data } = $props();
	let {
		experiences,
		about,
		projects,
	} = data;

	let { name, heroTitle, heroSubTitle} = data.about;
</script>

<HeroSection {name} {heroSubTitle} {heroTitle} />

<div class="mx-48 mt-4">
	<AboutSection {about}/>

	<ExperienceSection {experiences} /> 

	<!-- Enable the next section by removing the comment tags -->
	<ProjectSection {projects}/>
</div>
