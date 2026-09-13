import { useState } from "react";
import RoleSelect from "./components/RoleSelect";
import TeacherLogin from "./components/TeacherLogin";
import StudentTypeSelect from "./components/StudentTypeSelect";
import StudentLogin from "./components/StudentLogin";
import Enrollment from "./components/Enrollment";
import SchoolPage from "./components/SchoolPage";
import TeacherDashboard from "./components/TeacherDashboard";
import { INITIAL_STUDENTS } from "./data/studentsDb";

export default function App() {
  const [view, setView] = useState("role");
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleEnrolled = (student, proceed) => {
    if (proceed) {
      setCurrentStudent(student);
      setView("schoolPage");
      return;
    }
    setStudents((prev) => [...prev, student]);
  };

  const handleLogout = () => {
    setCurrentTeacher(null);
    setCurrentStudent(null);
    setView("role");
  };

  if (view === "schoolPage" && currentStudent) {
    return <SchoolPage student={currentStudent} onLogout={handleLogout} />;
  }

  if (view === "teacherDashboard" && currentTeacher) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
        <TeacherDashboard
          teacher={currentTeacher}
          students={students}
          setStudents={setStudents}
          onLogout={handleLogout}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      {view === "role" && <RoleSelect onSelect={(role) => setView(role === "teacher" ? "teacherLogin" : "studentType")} />}

      {view === "teacherLogin" && (
        <TeacherLogin
          onBack={() => setView("role")}
          onLoggedIn={(teacher) => {
            setCurrentTeacher(teacher);
            setView("teacherDashboard");
          }}
        />
      )}

      {view === "studentType" && (
        <StudentTypeSelect
          onBack={() => setView("role")}
          onSelect={(type) => setView(type === "new" ? "enrollment" : "studentLogin")}
        />
      )}

      {view === "studentLogin" && (
        <StudentLogin
          students={students}
          onBack={() => setView("studentType")}
          onLoggedIn={(student) => {
            setCurrentStudent(student);
            setView("schoolPage");
          }}
        />
      )}

      {view === "enrollment" && (
        <Enrollment students={students} onBack={() => setView("studentType")} onEnrolled={handleEnrolled} />
      )}
    </div>
  );
}
