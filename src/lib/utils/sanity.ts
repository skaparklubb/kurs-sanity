import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "8egq2rce",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-09-29",
};

const sanityClient = createClient(config);
export default sanityClient;

export function processAboutEntry(rawAbout: SanityAbout) {
  const builder = imageUrlBuilder(sanityClient);
  const aboutImageUrl = builder.image(rawAbout.image).url();

  const processedAbout: ProcessedAbout = {
    name: rawAbout.name,
    heroTitle: rawAbout.heroTitle,
    heroSubTitle: rawAbout.heroSubTitle,
    aboutImageUrl,
    description: rawAbout.description.map(processRawContent),
  };

  return processedAbout;

}

export function getTagFromStyle(style: ProcessedTextContent["style"]): string {
    if (style === "normal") {
      return "p";
    } else {
      return style;
    }
}

export function processProjectEntries(rawProject: SanityProject) {
  const builder = imageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(rawProject.image).url();

  const processedProject: ProcessedProject = {
    name: rawProject.name,
    company: rawProject.company,
    dateAccomplished: rawProject.dateAccomplished,
    stack: rawProject.stack,
    slug: rawProject.slug,
    projectImageUrl,
    content: rawProject.content.map(processRawContent),
  };

  return processedProject;
}

function processRawContent(content: RawTextContent | RawImageContent) {
  if (content._type === "block") {
    // process text content
    const processedTextContent: ProcessedTextContent = {
      type: "text",
      style: content.style,
      textToRender: content.children.map((elem) => elem.text).join("\n"),
    };
    return processedTextContent;
  } else {
    // process image content
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(content).url();

    const processedImage: ProcessedImageContent = {
      type: "image",
      url: projectImageUrl,
    };
    return processedImage;
  }
}
