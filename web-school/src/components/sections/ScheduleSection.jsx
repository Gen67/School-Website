import PropTypes from "prop-types";
import { SCHEDULES } from "../../data/contentDb";

export default function ScheduleSection({ student }) {
  const schedule = SCHEDULES[student.course] || [];

  return (
    <div>
      <h2 className="font-serif text-xl text-green-900 mb-4">Your schedule — {student.course}</h2>
      <div className="rounded-lg border border-green-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left bg-green-50 text-green-700">
              <th className="py-2 px-4">Day</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Subject</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.subject} className="border-t border-green-100">
                <td className="py-2 px-4 text-green-900">{row.day}</td>
                <td className="py-2 px-4 text-green-900">{row.time}</td>
                <td className="py-2 px-4 text-green-900">{row.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

ScheduleSection.propTypes = {
  student: PropTypes.shape({
    course: PropTypes.string.isRequired,
  }).isRequired,
};
