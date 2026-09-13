import PropTypes from "prop-types";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-sm text-green-700 hover:text-green-900 mb-6"
    >
      <ArrowLeft className="w-4 h-4" /> Back
    </button>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
