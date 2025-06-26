import ProjectCard from '../Components/ProjectCard';

const projects = [
  {
    title: 'Expense Tracker',
    description: 'A full-stack app to track monthly expenses with visual summaries.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/yourname/expense-tracker',
    demo: 'https://yourtracker.netlify.app'
  },
  {
    title: 'Pokemon Data Explorer',
    description: 'Explore Pokémon stats and search by type using a clean UI.',
    tech: ['React', 'Axios', 'PokeAPI'],
    github: 'https://github.com/yourname/pokemon-project',
    demo: ''
  }
];

export default function Projects() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
