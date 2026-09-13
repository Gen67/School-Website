import PropTypes from "prop-types";
import Card from "./Card";
import BackButton from "./BackButton";

export default function StudentTypeSelect({ onBack, onSelect }) {
  return (
    <Card>
      <BackButton onClick={onBack} />
      <h2 className="font-serif text-xl text-green-900 mb-4">Student sign in</h2>
      <p className="text-sm text-green-700 mb-6">Are you a new or returning student?</p>
      <div className="space-y-3">
        <button
          onClick={() => onSelect("new")}
          className="w-full rounded-md border border-green-300 px-4 py-3 text-sm font-medium text-green-900 hover:bg-green-50 transition-colors"
        >
          New Student — Enroll
        </button>
        <button
          onClick={() => onSelect("old")}
          className="w-full rounded-md border border-green-300 px-4 py-3 text-sm font-medium text-green-900 hover:bg-green-50 transition-colors"
        >
          Old Student — Log In
        </button>
      </div>
    </Card>
  );
}

StudentTypeSelect.propTypes = {
  onBack: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
