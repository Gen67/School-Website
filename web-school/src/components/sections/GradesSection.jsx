import PropTypes from "prop-types";

export default function GradesSection({ student }) {
  return (
    <div>
      <h2 className="font-serif text-xl text-green-900 mb-4">Your grades</h2>
      <div className="rounded-lg border border-green-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left bg-green-50 text-green-700">
              <th className="py-2 px-4">Subject</th>
              <th className="py-2 px-4 text-right">Grade</th>
            </tr>
          </thead>
          <tbody>
            {student.subjects.map((s) => (
              <tr key={s.subject} className="border-t border-green-100">
                <td className="py-2 px-4 text-green-900">{s.subject}</td>
                <td className="py-2 px-4 text-right text-green-900">{s.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

GradesSection.propTypes = {
  student: PropTypes.shape({
    subjects: PropTypes.arrayOf(
      PropTypes.shape({
        subject: PropTypes.string.isRequired,
        grade: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ).isRequired,
  }).isRequired,
};
