import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const experiences: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "experience"] | order(startDate desc)'
  );
//   const rawProjects: SanityProject[] = await sanityClient.fetch(
//     "*[_type == 'project'] | order(dateAccomplished desc)"
//   );

//   const skills: Skill[] = await sanityClient.fetch(
//     `*[_type == 'skills'][0].skillsList`
//   );

//   const projects = rawProjects.map(processProjectEntries);
  return {
    experiences,
    // projects,
    // skills,
  };
};