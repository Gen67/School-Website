import PropTypes from "prop-types";

export default function RegistrationForm({ student, receipt, adviser, onContinue }) {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div id="registration-form" className="bg-white border border-green-200 rounded-xl shadow-sm p-8">
          <div className="text-center mb-6 border-b border-green-200 pb-4">
            <h1 className="font-serif text-2xl text-green-900">Fernwood Academy</h1>
            <p className="text-sm text-green-700">Official Registration Form</p>
          </div>

          <h2 className="text-sm font-medium text-green-900 mb-2">Student information</h2>
          <table className="w-full text-sm mb-6">
            <tbody>
              <tr><td className="py-1 pr-4 text-green-700">Name</td><td className="py-1 text-green-900">{student.name}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Student No.</td><td className="py-1 text-green-900">{student.studentNo}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">ID No.</td><td className="py-1 text-green-900">{student.idNo}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Course</td><td className="py-1 text-green-900">{student.course}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Age</td><td className="py-1 text-green-900">{student.age}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Address</td><td className="py-1 text-green-900">{student.address}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Contact No.</td><td className="py-1 text-green-900">{student.contact}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Email</td><td className="py-1 text-green-900">{student.email}</td></tr>
            </tbody>
          </table>

          <h2 className="text-sm font-medium text-green-900 mb-2">Payment receipt</h2>
          <table className="w-full text-sm mb-6">
            <tbody>
              <tr><td className="py-1 pr-4 text-green-700">OR No.</td><td className="py-1 text-green-900">{receipt.orNumber}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Date</td><td className="py-1 text-green-900">{receipt.date}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Amount paid</td><td className="py-1 text-green-900">₱{receipt.amount.toLocaleString()}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Method</td><td className="py-1 text-green-900">{receipt.method}</td></tr>
              <tr><td className="py-1 pr-4 text-green-700">Reference no.</td><td className="py-1 text-green-900">{receipt.reference}</td></tr>
            </tbody>
          </table>

          <h2 className="text-sm font-medium text-green-900 mb-2">Assigned adviser</h2>
          <p className="text-sm text-green-900 mb-6">{adviser.name}</p>

          <p className="text-xs text-green-600 border-t border-green-200 pt-3">
            Present this form, printed, to the registrar&aposs office to complete your school requirements.
          </p>
        </div>

        <div className="flex gap-3 mt-4 print:hidden">
          <button
            onClick={() => window.print()}
            className="flex-1 rounded-md border border-green-700 text-green-700 text-sm font-medium py-2.5 hover:bg-green-700 hover:text-white transition-colors"
          >
            Print
          </button>
          <button
            onClick={onContinue}
            className="flex-1 rounded-md bg-green-700 text-white text-sm font-medium py-2.5 hover:bg-green-800 transition-colors"
          >
            Continue to School Portal
          </button>
        </div>
      </div>
    </div>
  );
}

RegistrationForm.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    studentNo: PropTypes.string.isRequired,
    idNo: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    age: PropTypes.number,
    address: PropTypes.string,
    contact: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  receipt: PropTypes.shape({
    orNumber: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    method: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
  }).isRequired,
  adviser: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onContinue: PropTypes.func.isRequired,
};
