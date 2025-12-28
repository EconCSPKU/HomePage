import { Hero } from "@/components/Hero";
import { ResearchGrid } from "@/components/ResearchGrid";
import { ProjectGrid } from "@/components/ProjectGrid";
import { PublicationList } from "@/components/PublicationList";
import { PeopleGrid } from "@/components/PeopleGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ResearchGrid />
      <ProjectGrid />
      <PeopleGrid />
      <PublicationList />
    </div>
  );
}
