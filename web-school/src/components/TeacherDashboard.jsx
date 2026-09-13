import { useState } from "react";
import PropTypes from "prop-types";
import { LogOut, Search } from "lucide-react";

export default function TeacherDashboard({ teacher, students, setStudents, onLogout }) {
  const [course, setCourse] = useState("BSCS");
  const [name, setName] = useState("");
  const [idNo, setIdNo] = useState("");
  const [found, setFound] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [draftGrades, setDraftGrades] = useState({});
  const [saved, setSaved] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSaved(false);
    const match = students.find(
      (s) =>
        s.course === course &&
        s.name.toLowerCase().trim() === name.toLowerCase().trim() &&
        s.idNo === idNo.trim()
    );
    if (match) {
      setFound(match);
      setNotFound(false);
      setDraftGrades(Object.fromEntries(match.subjects.map((s) => [s.subject, s.grade])));
    } else {
      setFound(null);
      setNotFound(true);
    }
  };

  const handleSaveGrades = () => {
    setStudents((prev) =>
      prev.map((s) =>
        s.studentNo === found.studentNo
          ? { ...s, subjects: s.subjects.map((subj) => ({ ...subj, grade: draftGrades[subj.subject] })) }
          : s
      )
    );
    setSaved(true);
  };

  return (
    <div className="w-full max-w-2xl bg-white border border-green-200 rounded-xl shadow-sm p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl text-green-900">Welcome, {teacher.name}</h2>
        <button onClick={onLogout} className="flex items-center gap-1 text-sm text-green-700 hover:text-green-900">
          <LogOut className="w-4 h-4" /> Log out
        </button>
      </div>

      <form onSubmit={handleSearch} className="grid sm:grid-cols-3 gap-3 mb-6 items-end">
        <label className="block">
          <span className="block text-sm font-medium text-green-900 mb-1">Course</span>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full rounded-md border border-green-300 px-3 py-2 text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="BSCS">BSCS</option>
            <option value="BSIT">BSIT</option>
          </select>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-green-900 mb-1">Student name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-green-300 px-3 py-2 text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-green-900 mb-1">ID No.</span>
          <input
            value={idNo}
            onChange={(e) => setIdNo(e.target.value)}
            className="w-full rounded-md border border-green-300 px-3 py-2 text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>
        <button
          type="submit"
          className="sm:col-span-3 flex items-center justify-center gap-2 rounded-md bg-green-700 text-white text-sm font-medium py-2.5 hover:bg-green-800 transition-colors"
        >
          <Search className="w-4 h-4" /> Find student
        </button>
      </form>

      {notFound && <p className="text-sm text-red-600 mb-4">No student found with those details.</p>}

      {found && (
        <div className="border border-green-200 rounded-md p-4">
          <p className="text-sm text-green-900 mb-3">
            <span className="font-medium">{found.name}</span> — {found.studentNo} — {found.course}
          </p>
          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="text-left text-green-700 border-b border-green-200">
                <th className="py-1.5">Subject</th>
                <th className="py-1.5 text-right">Grade</th>
              </tr>
            </thead>
            <tbody>
              {found.subjects.map((s) => (
                <tr key={s.subject} className="border-b border-green-100">
                  <td className="py-1.5 text-green-900">{s.subject}</td>
                  <td className="py-1.5 text-right">
                    <input
                      value={draftGrades[s.subject] ?? ""}
                      onChange={(e) => setDraftGrades((d) => ({ ...d, [s.subject]: e.target.value }))}
                      className="w-20 text-right rounded-md border border-green-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleSaveGrades}
            className="rounded-md bg-green-700 text-white text-sm font-medium px-4 py-2 hover:bg-green-800 transition-colors"
          >
            Save grades
          </button>
          {saved && <span className="ml-3 text-sm text-green-700">Grades updated.</span>}
        </div>
      )}
    </div>
  );
}

TeacherDashboard.propTypes = {
  teacher: PropTypes.shape({
    idNo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      studentNo: PropTypes.string.isRequired,
      idNo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      subjects: PropTypes.arrayOf(
        PropTypes.shape({
          subject: PropTypes.string.isRequired,
          grade: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
      ).isRequired,
    })
  ).isRequired,
  setStudents: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};
