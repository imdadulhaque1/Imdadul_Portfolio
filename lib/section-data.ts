export type SectionRoute = {
  route: string;
  sectionId: string;
  title: string;
  description: string;
  titleKey: string;
  descKey: string;
};

// Order matches the single-page top-to-bottom section order in app/page.tsx
// (SECTION_IDS), so the navbar links line up with what the visitor actually
// scrolls through.
export const sectionRoutes: SectionRoute[] = [
  {
    route: "hireMe",
    sectionId: "hireMe",
    title: "Imdadul Haque",
    description: "Personal profile of Imdadul Haque",
    titleKey: "hireMe",
    descKey: "hireMeDesc",
  },
  {
    route: "about",
    sectionId: "about",
    title: "Imdadul Haque | About",
    description: "About Imdadul Haque",
    titleKey: "about",
    descKey: "aboutDesc",
  },
  {
    route: "experience",
    sectionId: "experience",
    title: "Imdadul Haque | Experience",
    description: "Experience of Imdadul Haque",
    titleKey: "experience",
    descKey: "experienceDesc",
  },
  {
    route: "projects",
    sectionId: "projects",
    title: "Imdadul Haque | Projects",
    description: "Projects of Imdadul Haque",
    titleKey: "projects",
    descKey: "projectsDesc",
  },
  {
    route: "publication",
    sectionId: "publication",
    title: "Imdadul Haque | Publication",
    description: "Publications of Imdadul Haque",
    titleKey: "publication",
    descKey: "publicationDesc",
  },
  {
    route: "contact",
    sectionId: "contactMe",
    title: "Imdadul Haque | Contact Me",
    description: "Contact Imdadul Haque",
    titleKey: "contactMe",
    descKey: "contactMeDesc",
  },
];

export const sectionRouteLookup: Record<string, SectionRoute> =
  sectionRoutes.reduce(
    (acc, route) => ({
      ...acc,
      [route.route]: route,
    }),
    {} as Record<string, SectionRoute>,
  );

export const sectionIdLookup: Record<string, SectionRoute> =
  sectionRoutes.reduce(
    (acc, route) => ({
      ...acc,
      [route.sectionId]: route,
    }),
    {} as Record<string, SectionRoute>,
  );

// "Hire Me" is left out here - the navbar's own logo/name button already
// scrolls there, and Contact Me is the actual call-to-action for hiring.
export const navLinks = sectionRoutes
  .filter((route) => route.route !== "hireMe")
  .map((route) => ({
    route: route.route,
    labelKey: route.titleKey,
    path: `/${route.route}`,
    targetId: route.sectionId,
  }));
