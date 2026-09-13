import { RULES } from "../../data/contentDb";

export default function RulesSection() {
  return (
    <div>
      <h2 className="font-serif text-xl text-green-900 mb-4">School rules</h2>
      <ul className="space-y-2">
        {RULES.map((rule) => (
          <li key={rule} className="text-sm text-green-800 border-l-2 border-green-300 pl-3">
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
}
