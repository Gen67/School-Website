import { ABOUT_TEXT } from "../../data/contentDb";

export default function AboutSection() {
  return (
    <div>
      <h2 className="font-serif text-xl text-green-900 mb-4">About Fernwood Academy</h2>
      <p className="text-sm text-green-800 leading-relaxed whitespace-pre-line">{ABOUT_TEXT}</p>
    </div>
  );
}
