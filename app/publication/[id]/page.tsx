import PublicationDetail from "@/components/PublicationDetail";
import { publications } from "@/lib/publication-data";
import { notFound } from "next/navigation";

interface PublicationDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PublicationDetailPage({
  params,
}: PublicationDetailPageProps) {
  const resolvedParams = await params;

  const publication = publications.find(
    (pub) => pub.id.toString() === resolvedParams.id,
  );

  if (!publication) {
    return notFound();
  }

  return <PublicationDetail publication={publication} />;
}
