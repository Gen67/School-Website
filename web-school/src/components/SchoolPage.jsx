import { useState } from "react";
import PropTypes from "prop-types";
import SiteHeader from "./SiteHeader";
import HomeSection from "./sections/HomeSection";
import GradesSection from "./sections/GradesSection";
import ScheduleSection from "./sections/ScheduleSection";
import NewsSection from "./sections/NewsSection";
import AboutSection from "./sections/AboutSection";
import RulesSection from "./sections/RulesSection";
import TeachersSection from "./sections/TeachersSection";

export default function SchoolPage({ student, onLogout }) {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-green-50">
      <SiteHeader
        activeTab={activeTab}
        onNavigate={setActiveTab}
        studentName={student.name}
        onLogout={onLogout}
      />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white border border-green-200 rounded-xl shadow-sm p-6 sm:p-8">
          {activeTab === "home" && <HomeSection student={student} onNavigate={setActiveTab} />}
          {activeTab === "grades" && <GradesSection student={student} />}
          {activeTab === "schedule" && <ScheduleSection student={student} />}
          {activeTab === "news" && <NewsSection />}
          {activeTab === "about" && <AboutSection />}
          {activeTab === "rules" && <RulesSection />}
          {activeTab === "teachers" && <TeachersSection />}
        </div>
      </main>
    </div>
  );
}

SchoolPage.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    studentNo: PropTypes.string.isRequired,
    subjects: PropTypes.array.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};
