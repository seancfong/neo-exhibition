import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// ===========================================
// SANITY DATA FETCHING
// ===========================================

export interface sanityResponseType {
  heroLinks: Array<HeroSectionLink>;
  experiences: Array<ExperienceType>;
  projects: Array<ProjectType>;
}

// ===========================================
// SANITY REACT ICON
// ===========================================
export interface SanityReactIcon {
  library: string;
  name: string;
}

// ===========================================
// HERO SECTION
// ===========================================
export interface HeroSectionLink {
  name: string;
  linkURL: string;
  key: string;
  reactIcon: SanityReactIcon;
}

// ===========================================
// EXPERIENCE SECTION
// ===========================================
interface ExperienceBullet {
  content: string;
}

export interface ExperienceType {
  _id: string;
  position: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  companyLogo: SanityImageSource;
  bullets: Array<ExperienceBullet>;
}

// ===========================================
// PROJECT SECTION
// ===========================================
export interface ProjectType {
  title: string;
  subtitle: string;
}
