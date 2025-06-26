export default function WorkCard({ title, company, start, end, points }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">{title} - {company}</h3>
      <p className="text-sm text-gray-600">{start} - {end}</p>
      <ul className="list-disc pl-5 mt-2">
        {points.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
    </div>
  );
}