import { notFound } from "next/navigation";
import { projects } from "../../../data/projectsData";
import ProjectClient from "./ProjectClient";
import WhyPentaAutomationSection from "../../components/WhyPentaAutomationSection/WhyPentaAutomationSection";
import ServicesCTASection from "../../services/ServicesCTASection";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  // IMPORTANT
  const { slug } = await params;

  const project = projects.find((p) => p.slug.trim() === slug.trim());

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectClient project={project} />
      <WhyPentaAutomationSection />
      <ServicesCTASection />
    </>
  );
}
