import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { TUITION_FEES, generateOrNumber, assignAdviser } from "../utils/paymentUtils";
import { TEACHERS_DB } from "../data/teachersDb";

export default function Payment({ student, onPaid }) {
  const [method, setMethod] = useState("Cash");
  const [reference, setReference] = useState("");
  const amount = TUITION_FEES[student.course];

  const handleSubmit = (e) => {
    e.preventDefault();
    const receipt = {
      orNumber: generateOrNumber(),
      amount,
      method,
      reference: reference.trim() || "N/A",
      date: new Date().toLocaleDateString(),
    };
    const adviser = assignAdviser(TEACHERS_DB);
    onPaid(receipt, adviser);
  };

  return (
    <Card>
      <h2 className="font-serif text-xl text-green-900 mb-1">Tuition payment</h2>
      <p className="text-sm text-green-700 mb-4">
        {student.name} — {student.course}
      </p>

      <div className="rounded-md bg-green-50 border border-green-200 p-4 mb-4 text-sm text-green-900">
        <div className="flex justify-between">
          <span>Amount due</span>
          <span className="font-medium">₱{amount.toLocaleString()}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-green-900 mb-1">Payment method</span>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full rounded-md border border-green-300 px-3 py-2 text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Cash">Cash</option>
            <option value="GCash">GCash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium text-green-900 mb-1">Reference no. (optional)</span>
          <input
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Transaction reference, if any"
            className="w-full rounded-md border border-green-300 px-3 py-2 text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>

        <button type="submit" className="w-full rounded-md bg-green-700 text-white text-sm font-medium py-2.5 hover:bg-green-800 transition-colors">
          Confirm Payment
        </button>
      </form>
    </Card>
  );
}

Payment.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
  }).isRequired,
  onPaid: PropTypes.func.isRequired,
};
