import sanityClient, { processProjectEntries, processAboutEntry } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  
  const rawAbout: SanityAbout = await sanityClient.fetch(
    '*[_type == "about"][0]'
  );
  const experiences: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "experience"] | order(startDate desc)'
  );
  const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project'] | order(dateAccomplished desc)"
  );

  const projects = rawProjects.map(processProjectEntries);
  const about = processAboutEntry(rawAbout);
  
  return {
    experiences,
    about,
    projects,
    
  };
};