import PropTypes from "prop-types";

export default function Card({ children }) {
  return (
    <div className="w-full max-w-md bg-white border border-green-200 rounded-xl shadow-sm p-8">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
