import PropTypes from "prop-types";

export default function Field({ label, ...props }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-green-900 mb-1">{label}</span>
      <input
        {...props}
        className="w-full rounded-md border border-green-300 px-3 py-2 text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </label>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
};
