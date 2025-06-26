export default function ProjectCard({ title, description, tech, repo, demo, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tech.map((t) => <span key={t} className="bg-gray-200 px-2 py-1 text-sm rounded">{t}</span>)}
        </div>
        <div className="flex justify-between">
          <a href={repo} target="_blank" className="text-blue-600">GitHub</a>
          <a href={demo} target="_blank" className="text-green-600">Live Demo</a>
        </div>
      </div>
    </div>
  );
}