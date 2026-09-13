import PropTypes from "prop-types";
import { GraduationCap, UserCog } from "lucide-react";
import Card from "./Card";

export default function RoleSelect({ onSelect }) {
  return (
    <Card>
      <h1 className="font-serif text-2xl text-green-900 mb-1">Fernwood Academy</h1>
      <p className="text-sm text-green-700 mb-6">Sign in to continue</p>
      <div className="space-y-3">
        <button
          onClick={() => onSelect("teacher")}
          className="w-full flex items-center gap-3 rounded-md border border-green-300 px-4 py-3 hover:bg-green-50 transition-colors"
        >
          <UserCog className="w-5 h-5 text-green-700" />
          <span className="text-sm font-medium text-green-900">I'm a Teacher</span>
        </button>
        <button
          onClick={() => onSelect("student")}
          className="w-full flex items-center gap-3 rounded-md border border-green-300 px-4 py-3 hover:bg-green-50 transition-colors"
        >
          <GraduationCap className="w-5 h-5 text-green-700" />
          <span className="text-sm font-medium text-green-900">I'm a Student</span>
        </button>
      </div>
    </Card>
  );
}

RoleSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
