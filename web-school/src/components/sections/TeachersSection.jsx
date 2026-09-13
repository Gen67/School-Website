import { TEACHERS_DB } from "../../data/teachersDb";
import { TEACHER_UPDATES } from "../../data/contentDb";

export default function TeachersSection() {
  return (
    <div>
      <h2 className="font-serif text-xl text-green-900 mb-4">Teachers</h2>

      <h3 className="text-sm font-medium text-green-900 mb-2">Faculty directory</h3>
      <ul className="mb-6 space-y-1">
        {TEACHERS_DB.map((t) => (
          <li key={t.idNo} className="text-sm text-green-800">
            {t.name}
          </li>
        ))}
      </ul>

      <h3 className="text-sm font-medium text-green-900 mb-2">Teacher updates</h3>
      <div className="space-y-4">
        {TEACHER_UPDATES.map((item) => (
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
