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
    publicationDate: "2023-05-15",
    authorKey: "pub1Author",
    publicationURL: "https://example.com/react-guide",
    descriptionKey: "pub1Description",
  },
  {
    id: 2,
    titleKey: "pub2Title",
    publisherKey: "pub2Publisher",
    publicationDate: "2022-11-20",
    authorKey: "pub2Author",
    publicationURL: "https://example.com/typescript-paper",
    descriptionKey: "pub2Description",
  },
  {
    id: 3,
    titleKey: "pub3Title",
    publisherKey: "pub3Publisher",
    publicationDate: "2022-08-10",
    authorKey: "pub3Author",
    publicationURL: "https://example.com/nodejs-api",
    descriptionKey: "pub3Description",
  },
];
