import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  
  const about: SanityAbout = await sanityClient.fetch(
    '*[_type == "about"][0]'
  );
  const experiences: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "experience"] | order(startDate desc)'
  );
  const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project'] | order(dateAccomplished desc)"
  );

  const projects = rawProjects.map(processProjectEntries);
  
  return {
    experiences,
    about,
    projects,
    
  };
};