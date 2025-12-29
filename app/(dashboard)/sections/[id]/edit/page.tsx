import { SectionForm } from '@/components/sections/section-form';

interface EditSectionPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditSectionPage({
  params,
}: EditSectionPageProps) {
  const { id } = await params;
  return <SectionForm sectionId={id} />;
}
