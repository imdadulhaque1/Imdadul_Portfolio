export interface PublicationItem {
  id: number;
  titleKey: string;
  publisherKey: string;
  publicationDate: string;
  authorKey: string;
  publicationURL: string;
  descriptionKey: string;
}

export const publications: PublicationItem[] = [
  {
    id: 1,
    titleKey: "pub1Title",
    publisherKey: "pub1Publisher",
    publicationDate: "2023-05-05",
    authorKey: "pub1Author",
    publicationURL: "https://ieeexplore.ieee.org/document/10141780",
    descriptionKey: "pub1Description",
  },
  {
    id: 2,
    titleKey: "pub2Title",
    publisherKey: "pub2Publisher",
    publicationDate: "2022-07-29",
    authorKey: "pub2Author",
    publicationURL: "https://ieeexplore.ieee.org/abstract/document/9835732",
    descriptionKey: "pub2Description",
  },
  {
    id: 3,
    titleKey: "pub3Title",
    publisherKey: "pub3Publisher",
    publicationDate: "2022-06-16",
    authorKey: "pub3Author",
    publicationURL: "https://ieeexplore.ieee.org/abstract/document/9793178",
    descriptionKey: "pub3Description",
  },
  {
    id: 4,
    titleKey: "pub4Title",
    publisherKey: "pub4Publisher",
    publicationDate: "2022-03-31",
    authorKey: "pub4Author",
    publicationURL:
      "https://link.springer.com/chapter/10.1007/978-981-16-9012-9_15",
    descriptionKey: "pub4Description",
  },
  {
    id: 5,
    titleKey: "pub5Title",
    publisherKey: "pub5Publisher",
    publicationDate: "2021-01-18",
    authorKey: "pub5Author",
    publicationURL: "https://ieeexplore.ieee.org/abstract/document/9316106",
    descriptionKey: "pub5Description",
  },
];
