import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import BackButton from "./BackButton";
import Field from "./Field";

export default function StudentLogin({ students, onBack, onLoggedIn }) {
  const [studentNo, setStudentNo] = useState("");
  const [idNo, setIdNo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = students.find((s) => s.studentNo === studentNo.trim() && s.idNo === idNo.trim());
    if (student) {
      setError("");
      onLoggedIn(student);
    } else {
      setError("No matching student record found.");
    }
  };

  return (
    <Card>
      <BackButton onClick={onBack} />
      <h2 className="font-serif text-xl text-green-900 mb-4">Returning student</h2>
      <form onSubmit={handleSubmit}>
        <Field label="Student No." placeholder="e.g. 0001" value={studentNo} onChange={(e) => setStudentNo(e.target.value)} />
        <Field label="ID No." placeholder="e.g. STU-3021" value={idNo} onChange={(e) => setIdNo(e.target.value)} />
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        <button type="submit" className="w-full rounded-md bg-green-700 text-white text-sm font-medium py-2.5 hover:bg-green-800 transition-colors">
          Sign In
        </button>
      </form>
    </Card>
  );
}

StudentLogin.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      studentNo: PropTypes.string.isRequired,
      idNo: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBack: PropTypes.func.isRequired,
  onLoggedIn: PropTypes.func.isRequired,
};
