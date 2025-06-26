import { projects } from '../Data/projects';
import ProjectCard from '../Components/ProjectCard';

export default function Projects() {
  return (
    <section className="p-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj) => (
        <ProjectCard key={proj.title} {...proj} />
      ))}
    </section>
  );
}