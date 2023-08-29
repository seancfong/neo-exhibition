export interface sanityResponseType {
  heroLinks: Array<HeroSectionLink>;
  projects: Array<ProjectType>;
}

export interface HeroSectionLink {
  name: string;
  linkURL: string;
  key: string;
}

export interface ProjectType {
  title: string;
  subtitle: string;
}
