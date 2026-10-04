import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careers, getCareer } from "@/data/careers";
import { CareerDetails } from "@/components/career/CareerDetails";
export function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareer(slug);
  return {
    title: career?.name ?? "Career not found",
    description: career?.description,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) notFound();
  return <CareerDetails career={career} />;
}
