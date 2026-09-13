import PropTypes from "prop-types";

export default function HomeSection({ student, onNavigate }) {
  return (
    <div>
      <h1 className="font-serif text-2xl text-green-900 mb-2">Welcome back, {student.name.split(" ")[0]}</h1>
      <p className="text-sm text-green-700 mb-6">
        {student.course} — Student No. {student.studentNo}
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        <button
          onClick={() => onNavigate("grades")}
          className="text-left rounded-lg border border-green-200 p-4 hover:bg-green-50 transition-colors"
        >
          <p className="text-sm font-medium text-green-900">Check grades</p>
          <p className="text-xs text-green-700 mt-1">View your latest subject grades.</p>
        </button>
        <button
          onClick={() => onNavigate("schedule")}
          className="text-left rounded-lg border border-green-200 p-4 hover:bg-green-50 transition-colors"
        >
          <p className="text-sm font-medium text-green-900">Check schedule</p>
          <p className="text-xs text-green-700 mt-1">See your weekly class schedule.</p>
        </button>
        <button
          onClick={() => onNavigate("news")}
          className="text-left rounded-lg border border-green-200 p-4 hover:bg-green-50 transition-colors"
        >
          <p className="text-sm font-medium text-green-900">School news</p>
          <p className="text-xs text-green-700 mt-1">Catch up on the latest announcements.</p>
        </button>
      </div>
    </div>
  );
}

HomeSection.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    studentNo: PropTypes.string.isRequired,
  }).isRequired,
  onNavigate: PropTypes.func.isRequired,
};
