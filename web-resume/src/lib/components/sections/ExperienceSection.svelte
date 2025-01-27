<script lang="ts">
	import Experience from "../Experience.svelte";

  
interface ExpProps {
 experiences: SanityWorkExperience[]
}
let { experiences }: ExpProps= $props();

</script>

<section id="work-experience">
  <h2>Arbeidserfaring</h2>
  {#each experiences as experience}
    <Experience {experience} />
  {/each}
</section>