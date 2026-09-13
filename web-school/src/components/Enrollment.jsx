import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import BackButton from "./BackButton";
import Field from "./Field";
import { COURSE_SUBJECTS } from "../data/studentsDb";
import { generateStudentIdNo, generateStudentNo } from "../utils/idGenerators";

export default function Enrollment({ students, onBack, onEnrolled, onContinue }) {
  const [form, setForm] = useState({ name: "", age: "", address: "", contact: "", email: "", course: "BSCS" });
  const [result, setResult] = useState(null);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const idNo = generateStudentIdNo(students);
    const studentNo = generateStudentNo(students);
    const newStudent = {
      studentNo,
      idNo,
      name: form.name,
      age: Number(form.age),
      address: form.address,
      contact: form.contact,
      email: form.email,
      course: form.course,
      subjects: COURSE_SUBJECTS[form.course].map((subject) => ({ subject, grade: "N/A" })),
    };
    onEnrolled(newStudent);
    setResult(newStudent);
  };

  if (result) {
    return (
      <Card>
        <h2 className="font-serif text-xl text-green-900 mb-2">Enrollment complete</h2>
        <p className="text-sm text-green-700 mb-4">Save these — you'll need them to log in next time.</p>
        <div className="rounded-md bg-green-50 border border-green-200 p-4 mb-4 text-sm text-green-900">
          <p><span className="font-medium">Student No.:</span> {result.studentNo}</p>
          <p><span className="font-medium">ID No.:</span> {result.idNo}</p>
          <p><span className="font-medium">Course:</span> {result.course}</p>
        </div>
        <button
          onClick={() => onContinue(result)}
          className="w-full rounded-md bg-green-700 text-white text-sm font-medium py-2.5 hover:bg-green-800 transition-colors"
        >
          Proceed to Payment
        </button>
      </Card>
    );
  }

  return (
    <Card>
      <BackButton onClick={onBack} />
      <h2 className="font-serif text-xl text-green-900 mb-4">New student enrollment</h2>
      <form onSubmit={handleSubmit}>
        <Field label="Full Name" required value={form.name} onChange={update("name")} />
        <Field label="Age" type="number" required value={form.age} onChange={update("age")} />
        <Field label="Address" required value={form.address} onChange={update("address")} />
        <Field label="Contact No." required value={form.contact} onChange={update("contact")} />
        <Field label="Email" type="email" required value={form.email} onChange={update("email")} />
        <label className="block mb-4">
          <span className="block text-sm font-medium text-green-900 mb-1">Course</span>
          <select
            value={form.course}
            onChange={update("course")}
            className="w-full rounded-md border border-green-300 px-3 py-2 text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="BSCS">BSCS</option>
            <option value="BSIT">BSIT</option>
          </select>
        </label>
        <button type="submit" className="w-full rounded-md bg-green-700 text-white text-sm font-medium py-2.5 hover:bg-green-800 transition-colors">
          Submit Enrollment
        </button>
      </form>
    </Card>
  );
}

Enrollment.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      studentNo: PropTypes.string.isRequired,
      idNo: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBack: PropTypes.func.isRequired,
  onEnrolled: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};
