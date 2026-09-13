import { COURSE_SUBJECTS } from "./studentsDb";

export const ABOUT_TEXT = `Fernwood Academy has been educating students in computing and information
technology since 2005. Our campus blends small class sizes with hands-on lab
work, so every student graduates with real project experience alongside their
diploma. We currently offer two undergraduate programs: BS Computer Science
and BS Information Technology.`;

export const RULES = [
  "Students must wear the official school ID at all times while on campus.",
  "Attendance below 80% in a subject results in automatic exclusion from finals.",
  "Laboratory equipment must be reserved at least one day in advance.",
  "Uniforms are required from Monday to Thursday; Friday is free-dress.",
  "Grade appeals must be filed within one week of grades being posted.",
  "Mobile phones must be on silent mode during lectures and exams.",
];

export const NEWS = [
  { id: 1, date: "2026-08-20", title: "Enrollment for the new term is now open", summary: "New and returning students can now enroll online. See the Enroll page for details." },
  { id: 2, date: "2026-08-05", title: "Fernwood wins regional programming contest", summary: "Our BSCS team placed first in the inter-school hackathon held last month." },
  { id: 3, date: "2026-07-22", title: "New computer laboratory opens", summary: "The IT department's new lab is now open for BSIT networking classes." },
  { id: 4, date: "2026-07-10", title: "Library extends weekday hours", summary: "The library is now open until 7 PM on weekdays for exam reviewers." },
];

export const TEACHER_UPDATES = [
  { id: 1, date: "2026-08-15", title: "Mrs. Liza Fernandez named Teacher of the Year", summary: "Recognized for her work redesigning the Data Structures curriculum." },
  { id: 2, date: "2026-07-30", title: "Mr. Ramon Aquino to lead new networking elective", summary: "A hands-on networking elective opens to BSIT students next term." },
  { id: 3, date: "2026-07-01", title: "Faculty orientation completed", summary: "All teaching staff completed orientation ahead of the new school year." },
];

const timeSlots = ["8:00 - 9:30 AM", "9:45 - 11:15 AM", "1:00 - 2:30 PM"];
const days = ["Monday", "Wednesday", "Friday"];

function buildSchedule(course) {
  return COURSE_SUBJECTS[course].map((subject, i) => ({
    day: days[i % days.length],
    time: timeSlots[i % timeSlots.length],
    subject,
  }));
}

export const SCHEDULES = {
  BSCS: buildSchedule("BSCS"),
  BSIT: buildSchedule("BSIT"),
};
