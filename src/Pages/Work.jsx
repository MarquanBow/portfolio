import { experience } from '../Data/experience';
import WorkCard from '../Components/WorkCard';

export default function Work() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
      {experience.map((job, i) => (
        <WorkCard key={i} {...job} />
      ))}
    </section>
  );
}