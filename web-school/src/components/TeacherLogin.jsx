import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import BackButton from "./BackButton";
import Field from "./Field";
import { TEACHERS_DB } from "../data/teachersDb";

export default function TeacherLogin({ onBack, onLoggedIn }) {
  const [idNo, setIdNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const teacher = TEACHERS_DB.find((t) => t.idNo === idNo.trim() && t.password === password);
    if (teacher) {
      setError("");
      onLoggedIn(teacher);
    } else {
      setError("Invalid ID number or password.");
    }
  };

  return (
    <Card>
      <BackButton onClick={onBack} />
      <h2 className="font-serif text-xl text-green-900 mb-4">Teacher sign in</h2>
      <form onSubmit={handleSubmit}>
        <Field label="ID No." placeholder="e.g. T-5510" value={idNo} onChange={(e) => setIdNo(e.target.value)} />
        <Field label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        <button type="submit" className="w-full rounded-md bg-green-700 text-white text-sm font-medium py-2.5 hover:bg-green-800 transition-colors">
          Sign In
        </button>
      </form>
    </Card>
  );
}

TeacherLogin.propTypes = {
  onBack: PropTypes.func.isRequired,
  onLoggedIn: PropTypes.func.isRequired,
};
