export type SectionRoute = {
  route: string;
  sectionId: string;
  title: string;
  description: string;
  titleKey: string;
  descKey: string;
};

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
    route: "contact",
    sectionId: "contactMe",
    title: "Imdadul Haque | Contact Me",
    description: "Contact Imdadul Haque",
    titleKey: "contactMe",
    descKey: "contactMeDesc",
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
    route: "publication",
    sectionId: "publication",
    title: "Imdadul Haque | Publication",
    description: "Publications of Imdadul Haque",
    titleKey: "publication",
    descKey: "publicationDesc",
  },
  {
    route: "projects",
    sectionId: "projects",
    title: "Imdadul Haque | Projects",
    description: "Projects of Imdadul Haque",
    titleKey: "projects",
    descKey: "projectsDesc",
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

export const navLinks = sectionRoutes.map((route) => ({
  route: route.route,
  labelKey: route.titleKey,
  path: route.route === "hireMe" ? "/" : `/${route.route}`,
  targetId: route.sectionId,
}));
