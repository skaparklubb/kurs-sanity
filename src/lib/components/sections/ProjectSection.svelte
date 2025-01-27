<script lang="ts">
	import SectionHeadline from "../SectionHeadline.svelte";


  interface MyWorkSectionProps {
    projects: ProcessedProject[];
  }
  let { projects }: MyWorkSectionProps = $props();
  const mainProject = projects[0];
  const otherProjects = projects.slice(1);

</script>

<section class="mt-l">
  <SectionHeadline sectionName="my-work">Prosjekter</SectionHeadline>
  <div class="default-margin projects-container mt-m">
    <article class="main-project mb-m">
      <a href={`/work/${mainProject.slug}`}>
        <img src={mainProject.projectImageUrl} alt={mainProject.name} />
      </a>
      <div class="project-info mt-s">
        <div class="title-and-company">
          <h3 class="text-4xl">{mainProject.name}</h3>
          <p class="company dark-grey text-3xl text-gray-400">{mainProject.company}</p>
        </div>
        <a href={`/project/${mainProject.slug}`} class="btn btn-primary">→</a>
      </div>
    </article>
    <div class="more-projects-container ">
      {#each otherProjects as project}
        <article class="project">
          <a href={`/project/${project.slug}`}>
            <img class="h-80" src={project.projectImageUrl} alt={project.name} />
          </a>
          <div class="project-info mt-s">
            <div class="">
              <h3 class="">{project.name}</h3>
              <p class="">{project.company}</p>
            </div>
            <a href={`/project/${project.slug}`} class="btn btn-primary">→</a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    cursor: pointer;
  }

  .more-projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .more-projects-container img {
    height: 350px;
  }

  .main-project img {
    max-height: 450px;
  }

  .project {
    width: 48%;
  }

  .project-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>