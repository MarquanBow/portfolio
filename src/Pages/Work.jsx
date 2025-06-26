import ExpandableWorkCard from '../Components/ExpandableWorkCard';

const workData = [
  {
    company: 'CapTech Consulting',
    title: 'Consultant',
    dates: 'Sep 2021 – Present',
    clients: [
      {
        name: 'Capital One',
        duration: 'Sep 2024 – Jul 2025',
        summary: 'Collaborated with a cross-functional team to design and develop a microservice from the ground up in Go for Capital One’s Loyalty platform. Led the implementation of RESTful API endpoints, service logic, and automated testing to ensure scalability, reliability, and maintainability. Contributed to improving overall code quality and deployment readiness through rigorous testing and code reviews.',
        tech: ['Golang']
      },
      {
        name: 'Capital One',
        duration: 'Apr 2024 – Jul 2024',
        summary: 'Migrated 200+ datasets of financial data to AWS S3, improving data accessibility and reducing storage costs by 30%. Developed and integrated Databricks scripts to validate batch datasets reducing development time by 30%. Collaborated with business stakeholders to define requirements, reducing development cycle time by 20%. Conducted unit and integration testing, achieving an 85%+ test coverage rate and reducing post-deployment bugs by 40%.',
        tech: ['Databricks', 'Python', 'AWS', 'Spark']
      },
      {
        name: 'LPL Financial',
        duration: 'Sep 2023 – Apr 2024',
        summary: 'Developed a customer account platform using Angular, Tailwind CSS, and gRPC APIs, reducing page load times by 35% and increasing user engagement. Integrated third-party APIs like SmartyStreets for address validation, improving data accuracy by 98%. Ensured application reliability through comprehensive testing, reducing system downtime by 50%.',
        tech: ['Angular', 'Tailwind CSS', '.NET']
      },
      {
        name: 'Capital One',
        duration: "Mar 2022 - Dec 2022",
        summary: 'Implemented Angular features for card management, increasing customer self-service usage by 25%, reducing support tickets.Developed new deployment pipelines using Nx Monorepo, reducing deployment time by 40%. Optimized database queries, reducing API response time from 1.2s to 400ms.  Collaborated with cross-functional teams in Agile sprints, ensuring 100% on-time delivery of features.',
        tech: ['Angular', 'Nx Monorepo']
      },
      {
        name: 'See Kids Dream',
        duration: "Jan 2022 - Mar 2022",
        summary: 'Improved website performance, increasing load speed by 50%, enhancing user engagement. Optimized GraphQL queries, reducing data retrieval time by 60%. Resolved 30+ bugs, improving website stability and functionality.',
        tech: ['GraphQl']
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
