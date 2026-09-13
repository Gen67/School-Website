import { NEWS } from "../../data/contentDb";

export default function NewsSection() {
  return (
    <div>
      <h2 className="font-serif text-xl text-green-900 mb-4">School news</h2>
      <div className="space-y-4">
        {NEWS.map((item) => (
          <div key={item.id} className="rounded-lg border border-green-200 p-4">
            <p className="text-xs text-green-600 mb-1">{item.date}</p>
            <p className="text-sm font-medium text-green-900">{item.title}</p>
            <p className="text-sm text-green-700 mt-1">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
