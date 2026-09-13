import { useState } from "react";
import PropTypes from "prop-types";
import { Leaf, Menu, X, LogOut } from "lucide-react";

const NAV_ITEMS = [
  { key: "home", label: "Home" },
  { key: "grades", label: "Grades" },
  { key: "schedule", label: "Schedule" },
  { key: "news", label: "News" },
  { key: "about", label: "About" },
  { key: "rules", label: "Rules" },
  { key: "teachers", label: "Teachers" },
];

export default function SiteHeader({ activeTab, onNavigate, studentName, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (key) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-green-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => go("home")} className="flex items-center gap-2 shrink-0">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-green-700">
              <Leaf className="w-5 h-5 text-white" strokeWidth={2} />
            </span>
            <span className="font-serif text-xl text-green-900 tracking-tight">Fernwood Academy</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={`text-sm font-medium transition-colors ${
                  activeTab === item.key ? "text-green-900 border-b-2 border-green-700" : "text-green-700 hover:text-green-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm text-green-700">{studentName}</span>
            <button
              onClick={onLogout}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-green-700 px-4 py-1.5 text-sm font-medium text-green-700 hover:bg-green-700 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" /> Log out
            </button>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden p-2 rounded-md text-green-800 hover:bg-green-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-green-100 bg-white px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className={`block w-full text-left px-2 py-2 rounded-md text-sm font-medium ${
                activeTab === item.key ? "bg-green-50 text-green-900" : "text-green-800 hover:bg-green-50"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 mt-2 px-2 py-2 rounded-md text-sm font-medium text-green-700 border border-green-700"
          >
            <LogOut className="w-4 h-4" /> Log out
          </button>
        </div>
      )}
    </header>
  );
}

SiteHeader.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  studentName: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
