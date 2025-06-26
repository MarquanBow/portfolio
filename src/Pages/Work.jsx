import ExpandableWorkCard from '../Components/ExpandableWorkCard';

const workData = [
  {
    company: 'CapTech Consulting',
    title: 'Consultant',
    dates: 'Jan 2023 – Present',
    clients: [
      {
        name: 'Bank of America',
        duration: 'Jan 2023 – Jun 2023',
        summary: 'Led modernization of a legacy loan processing system.',
        tech: ['React', 'Spring Boot', 'AWS']
      },
      {
        name: 'Capital One',
        duration: 'Jul 2023 – Dec 2023',
        summary: 'Built a real-time fraud detection dashboard.',
        tech: ['Vue.js', 'Python', 'Kubernetes']
      }
    ]
  }
];

export default function Work() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Work Experience</h2>
      {workData.map((job, index) => (
        <ExpandableWorkCard key={index} {...job} />
      ))}
    </div>
  );
}
