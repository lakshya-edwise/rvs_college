import type { ExamResult, Student } from "@/types/student";

const createSubjects = (
  branch: string,
  semester: number,
): Student["subjects"] => [
  {
    code: `${branch}301`,
    name: "Advanced Data Structures",
    internal: 22,
    external: 58,
    grade: "A",
    credits: 3,
    result: "PASS",
  },
  {
    code: `${branch}302`,
    name: "Database Management Systems",
    internal: 24,
    external: 62,
    grade: "A+",
    credits: 4,
    result: "PASS",
  },
  {
    code: `${branch}303`,
    name: "Computer Networks",
    internal: 20,
    external: 55,
    grade: "B+",
    credits: 3,
    result: "PASS",
  },
  {
    code: `${branch}304`,
    name: "Operating Systems",
    internal: 23,
    external: 60,
    grade: "A",
    credits: 4,
    result: "PASS",
  },
  {
    code: `${branch}305`,
    name: "Software Engineering",
    internal: 21,
    external: 52,
    grade: "B+",
    credits: 3,
    result: "PASS",
  },
  {
    code: `${branch}306`,
    name: "Web Technologies",
    internal: 25,
    external: 65,
    grade: "A+",
    credits: 3,
    result: "PASS",
  },
  {
    code: `${branch}307`,
    name: "Professional Ethics",
    internal: 26,
    external: 68,
    grade: "A+",
    credits: 2,
    result: "PASS",
  },
  {
    code: `${branch}308`,
    name: semester % 2 === 0 ? "Machine Learning" : "Compiler Design",
    internal: 19,
    external: 48,
    grade: "B",
    credits: 3,
    result: "PASS",
  },
];

export const students: Student[] = [
  {
    regNo: "R21CS001",
    hallTicket: "HT2024001",
    studentName: "KAVIN KUMAR REDDY",
    course: "B.Tech",
    branch: "Computer Science & Engineering",
    regulation: "R21",
    semester: "IV Semester",
    cgpa: 8.45,
    status: "PASS",
    subjects: createSubjects("CS", 4),
  },
  {
    regNo: "R21CS002",
    hallTicket: "HT2024002",
    studentName: "PRIYA SHARMA",
    course: "B.Tech",
    branch: "Computer Science & Engineering",
    regulation: "R21",
    semester: "IV Semester",
    cgpa: 9.12,
    status: "PASS",
    subjects: createSubjects("CS", 4),
  },
  {
    regNo: "R21EC003",
    hallTicket: "HT2024003",
    studentName: "RAHUL VARMA",
    course: "B.Tech",
    branch: "Electronics & Communication Engineering",
    regulation: "R21",
    semester: "VI Semester",
    cgpa: 7.85,
    status: "PASS",
    subjects: createSubjects("EC", 6),
  },
  {
    regNo: "R21ME004",
    hallTicket: "HT2024004",
    studentName: "ANANYA DESAI",
    course: "B.Tech",
    branch: "Mechanical Engineering",
    regulation: "R21",
    semester: "VI Semester",
    cgpa: 8.02,
    status: "PASS",
    subjects: createSubjects("ME", 6),
  },
  {
    regNo: "R21EE005",
    hallTicket: "HT2024005",
    studentName: "VIKRAM SINGH",
    course: "B.Tech",
    branch: "Electrical & Electronics Engineering",
    regulation: "R21",
    semester: "VIII Semester",
    cgpa: 7.56,
    status: "PASS",
    subjects: createSubjects("EE", 8),
  },
  {
    regNo: "R21MT006",
    hallTicket: "HT2024006",
    studentName: "SRINIVAS RAO",
    course: "M.Tech",
    branch: "Computer Science & Engineering",
    regulation: "R21",
    semester: "II Semester",
    cgpa: 8.78,
    status: "PASS",
    subjects: createSubjects("MT", 2),
  },
  {
    regNo: "R21MBA007",
    hallTicket: "HT2024007",
    studentName: "MEERA KRISHNAN",
    course: "MBA",
    branch: "Business Administration",
    regulation: "R21",
    semester: "IV Semester",
    cgpa: 8.34,
    status: "PASS",
    subjects: createSubjects("MBA", 4),
  },
  {
    regNo: "R21MCA008",
    hallTicket: "HT2024008",
    studentName: "ARJUN NAIDU",
    course: "MCA",
    branch: "Computer Applications",
    regulation: "R21",
    semester: "IV Semester",
    cgpa: 7.92,
    status: "PASS",
    subjects: createSubjects("MCA", 4),
  },
  {
    regNo: "R21CE009",
    hallTicket: "HT2024009",
    studentName: "LAKSHMI PRIYA",
    course: "B.Tech",
    branch: "Civil Engineering",
    regulation: "R21",
    semester: "IV Semester",
    cgpa: 6.45,
    status: "FAIL",
    subjects: [
      ...createSubjects("CE", 4).slice(0, 7),
      {
        code: "CE308",
        name: "Structural Analysis",
        internal: 15,
        external: 28,
        grade: "F",
        credits: 3,
        result: "FAIL",
      },
    ],
  },
  {
    regNo: "R21IT010",
    hallTicket: "HT2024010",
    studentName: "ROHIT KUMAR",
    course: "B.Tech",
    branch: "Information Technology",
    regulation: "R21",
    semester: "IV Semester",
    cgpa: 8.67,
    status: "PASS",
    subjects: createSubjects("IT", 4),
  },
];

export const examResults: ExamResult[] = [
  {
    id: "exam-001",
    title:
      "M.Tech., II Year II Semester (R21), Regular Examination - July-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-002",
    title:
      "B.Tech., IV Year II Semester (R21), Regular Examination - July-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-003",
    title:
      "B.Tech., III Year II Semester (R21), Regular Examination - July-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-004",
    title:
      "B.Tech., II Year II Semester (R21), Regular Examination - July-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-005",
    title:
      "B.Tech., I Year II Semester (R21), Regular Examination - July-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-006",
    title: "MBA, II Year II Semester (R21), Regular Examination - July-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-007",
    title: "MCA, II Year II Semester (R21), Regular Examination - July-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-008",
    title:
      "B.Tech., IV Year II Semester (R20), Supplementary Examination - June-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-009",
    title:
      "B.Tech., III Year II Semester (R20), Supplementary Examination - June-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-010",
    title:
      "B.Tech., II Year II Semester (R20), Supplementary Examination - June-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-011",
    title:
      "B.Tech., I Year II Semester (R20), Supplementary Examination - June-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-012",
    title:
      "B.Tech., IV Year II Semester (R19), Supplementary Examination - June-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-013",
    title:
      "B.Tech., III Year II Semester (R19), Supplementary Examination - June-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-014",
    title:
      "B.Tech., II Year II Semester (R19), Supplementary Examination - June-2026",
    releaseDate: "01-07-2026",
  },
  {
    id: "exam-015",
    title: "BBA, II Year II Semester (R21), Regular Examination - June-2026",
    releaseDate: "01-07-2026",
    perVerificationDate: "22-06-2026",
    revaluationDate: "23-06-2026",
  },
];

export function getStudentByHallTicket(ticket: string): Student | undefined {
  return students.find(
    (s) => s.hallTicket.toLowerCase() === ticket.trim().toLowerCase(),
  );
}

export function getStudentByRegNo(regNo: string): Student | undefined {
  return students.find(
    (s) => s.regNo.toLowerCase() === regNo.trim().toLowerCase(),
  );
}

export function getExamById(id: string): ExamResult | undefined {
  return examResults.find((e) => e.id === id);
}
