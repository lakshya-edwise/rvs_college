import type { ConsolidatedStudent, GradeSubject, SemesterStatement } from "@/types/grades";

const sem1Subjects: GradeSubject[] = [
  { code: "CS111", name: "Mathematics-I", grade: "B", credits: "3.0" },
  { code: "CS112", name: "Engineering Physics", grade: "C", credits: "3.0" },
  {
    code: "CS113",
    name: "Basic Electrical & Electronics Engineering",
    grade: "D",
    credits: "3.0",
  },
  {
    code: "CS114",
    name: "Programming for Problem Solving",
    grade: "C",
    credits: "3.0",
  },
  { code: "CS151", name: "Engineering Physics Lab", grade: "A", credits: "1.5" },
  {
    code: "CS152",
    name: "Basic Electrical & Electronics Engineering Lab",
    grade: "A+",
    credits: "1.5",
  },
  {
    code: "CS153",
    name: "Engineering Graphics & Design Lab",
    grade: "A+",
    credits: "3.0",
  },
  {
    code: "CS154",
    name: "Programming for Problem Solving Lab",
    grade: "B",
    credits: "1.5",
  },
  { code: "CSMC1", name: "Constitution of India", grade: "A+", credits: "--" },
  {
    code: "MC000",
    name: "Three Weeks Orientation Programme",
    grade: "Satisfactory",
    credits: "--",
  },
];

const sem2Subjects: GradeSubject[] = [
  { code: "CS121", name: "Mathematics-II", grade: "E", credits: "3.0" },
  { code: "CS122", name: "Engineering Chemistry", grade: "E", credits: "3.0" },
  { code: "CS123", name: "Digital Electronics", grade: "D", credits: "3.0" },
  {
    code: "CS124",
    name: "English for Communication Skills",
    grade: "C",
    credits: "3.0",
  },
  { code: "CS125", name: "Programming in Python", grade: "C", credits: "2.0" },
  { code: "CS161", name: "Engineering Chemistry Lab", grade: "A", credits: "1.5" },
  { code: "CS162", name: "Programming in Python Lab", grade: "A", credits: "1.0" },
  {
    code: "CS163",
    name: "Computer Engineering Workshop Lab",
    grade: "A",
    credits: "1.5",
  },
  {
    code: "CS164",
    name: "English Language Communication Skills Lab",
    grade: "A+",
    credits: "1.5",
  },
  { code: "CSMC2", name: "Environmental Science", grade: "D", credits: "--" },
];

const sem3Subjects: GradeSubject[] = [
  {
    code: "CS211",
    name: "Probability and Statistics",
    grade: "D",
    credits: "3.0",
  },
  { code: "CS212", name: "Discrete Mathematics", grade: "B", credits: "3.0" },
  { code: "CS213", name: "Computer Organization", grade: "D", credits: "3.0" },
  { code: "CS214", name: "Data Structures", grade: "D", credits: "3.0" },
  {
    code: "CS215",
    name: "Object Oriented Programming",
    grade: "E",
    credits: "3.0",
  },
  {
    code: "CS251",
    name: "Probability and Statistics Lab",
    grade: "A",
    credits: "1.5",
  },
  { code: "CS252", name: "Data Structures Lab", grade: "B", credits: "1.5" },
  {
    code: "CS253",
    name: "Object Oriented Programming Lab",
    grade: "C",
    credits: "1.5",
  },
  { code: "CSSL1", name: "2D-Computer Animation", grade: "A", credits: "2.0" },
  {
    code: "CSMC3",
    name: "Design Thinking & Product Innovation",
    grade: "A",
    credits: "--",
  },
];

const sem3ConsolidatedSubjects: GradeSubject[] = sem3Subjects.map((subject) =>
  subject.code === "CSMC3"
    ? { ...subject, grade: "Satisfactory" }
    : subject,
);

const sem4Subjects: GradeSubject[] = [
  { code: "CS221", name: "Computational Statistics", grade: "C", credits: "3.0" },
  {
    code: "CS222",
    name: "Database Management Systems",
    grade: "E",
    credits: "3.0",
  },
  { code: "CS223", name: "Operating Systems", grade: "C", credits: "3.0" },
  { code: "CS224", name: "Software Engineering", grade: "D", credits: "3.0" },
  { code: "CS225", name: "Web Technologies", grade: "E", credits: "3.0" },
  {
    code: "CS261",
    name: "Computational Statistics Lab",
    grade: "C",
    credits: "1.5",
  },
  {
    code: "CS262",
    name: "Database Management Systems Lab",
    grade: "C",
    credits: "1.5",
  },
  { code: "CS263", name: "Web Technologies Lab", grade: "B", credits: "1.5" },
  {
    code: "CSSL2",
    name: "Mobile Application Development",
    grade: "B",
    credits: "2.0",
  },
  { code: "CSMC4", name: "Ethics & Human Values", grade: "C", credits: "--" },
];

const sem5Subjects: GradeSubject[] = [
  {
    code: "CS311",
    name: "Automata Theory & Formal Languages",
    grade: "D",
    credits: "3.0",
  },
  { code: "CS312", name: "Computer Networks", grade: "D", credits: "3.0" },
  {
    code: "CS313",
    name: "Design & Analasis of Algorithms",
    grade: "D",
    credits: "3.0",
  },
  {
    code: "CS314",
    name: "Professional Elective-I (CSEL03): Data Engineering",
    grade: "E",
    credits: "3.0",
  },
  {
    code: "CS315",
    name: "Open / Job Oriented Elective-I (MEOL1): Operations Research",
    grade: "D",
    credits: "3.0",
  },
  {
    code: "CS351",
    name: "Design & Analysis of Algorithms Lab",
    grade: "B",
    credits: "1.5",
  },
  { code: "CS352", name: "Data Analysis Lab", grade: "B", credits: "1.5" },
  { code: "CS353", name: "Summer Internship", grade: "A", credits: "1.5" },
  { code: "CSSL3", name: "Soft Skills", grade: "B", credits: "2.0" },
];

const sem6Subjects: GradeSubject[] = [
  { code: "CS321", name: "Artificial Intelligence", grade: "D", credits: "3.0" },
  {
    code: "CS322",
    name: "Cryptography & Network Security",
    grade: "D",
    credits: "3.0",
  },
  { code: "CS323", name: "Machine Learning", grade: "C", credits: "3.0" },
  {
    code: "CS324",
    name: "Professional Elective-II (CSEL04): Compiler Design",
    grade: "C",
    credits: "3.0",
  },
  {
    code: "CS325",
    name: "Open / Job Oriented Elective-II (JOEL01): Full Stack Development",
    grade: "C",
    credits: "3.0",
  },
  {
    code: "CS361",
    name: "Artificial Intelligence Lab",
    grade: "B",
    credits: "1.5",
  },
  { code: "CS362", name: "Machine Learning Lab", grade: "B", credits: "1.5" },
  { code: "CS363", name: "Term Paper", grade: "B", credits: "1.5" },
  { code: "CSSL4", name: "Socket Programming", grade: "A", credits: "2.0" },
];

const sem7Subjects: GradeSubject[] = [
  {
    code: "CS411",
    name: "Humanities Elective (HSEL2): Economics for Engineers",
    grade: "B",
    credits: "3.0",
  },
  {
    code: "CS412",
    name: "Professional Elective-III (CSEL10): Web and Micro Services",
    grade: "C",
    credits: "3.0",
  },
  {
    code: "CS413",
    name: "Professional Elective-IV (CSEL12): Visual Programming",
    grade: "D",
    credits: "3.0",
  },
  {
    code: "CS414",
    name: "Professional Elective-V (MOOCs): Cloud Computing",
    grade: "D",
    credits: "3.0",
  },
  {
    code: "CS415",
    name: "Open / Job Oriented Elective-III (JOEL01): Big Data Processing",
    grade: "D",
    credits: "3.0",
  },
  {
    code: "CS416",
    name: "Open Elective-IV (MOOCs): Principles of Management",
    grade: "B",
    credits: "3.0",
  },
  { code: "CS451", name: "Internship/Certification", grade: "A", credits: "3.0" },
  {
    code: "CSSL5",
    name: "User Interface Design with ReactJS",
    grade: "A+",
    credits: "2.0",
  },
];

const sem8Subjects: GradeSubject[] = [
  {
    code: "CS461",
    name: "Project Work, Seminar and Internship in Industry",
    grade: "A+",
    credits: "12.0",
  },
];

const semesterStatements: SemesterStatement[] = [
  {
    semester: "Semester I (REGULAR)",
    yearLabel: "B.TECH.[First Year]",
    monthYear: "JULY 2019",
    memoNo: "132471",
    date: "18-10-2020",
    sgpa: 7.92,
    cgpa: 7.92,
    subjects: sem1Subjects,
  },
  {
    semester: "Semester II (REGULAR)",
    yearLabel: "B.TECH.[First Year]",
    monthYear: "OCTOBER 2020",
    memoNo: "183174",
    date: "22-12-2020",
    sgpa: 6.87,
    cgpa: 7.4,
    subjects: sem2Subjects,
  },
  {
    semester: "Semester III (REGULAR)",
    yearLabel: "B.TECH.[Second Year]",
    monthYear: "APRIL 2021",
    memoNo: "172117",
    date: "09-07-2021",
    sgpa: 6.84,
    cgpa: 7.2,
    subjects: sem3Subjects,
  },
  {
    semester: "Semester IV(REGULAR)",
    yearLabel: "B.TECH.[Second Year]",
    monthYear: "OCTOBER 2021",
    memoNo: "099741",
    date: "14-12-2021",
    sgpa: 6.47,
    cgpa: 7.01,
    subjects: sem4Subjects,
  },
  {
    semester: "Semester V(REGULAR)",
    yearLabel: "B.TECH.[Third Year]",
    monthYear: "APRIL 2022",
    memoNo: "117432",
    date: "11-07-2022",
    sgpa: 6.53,
    cgpa: 6.91,
    subjects: sem5Subjects,
  },
  {
    semester: "Semester VI (REGULAR)",
    yearLabel: "B.TECH.[Third Year]",
    monthYear: "SEPTEMBER 2022",
    memoNo: "131795",
    date: "08-12-2022",
    sgpa: 7.12,
    cgpa: 6.94,
    subjects: sem6Subjects,
  },
  {
    semester: "Semester VII(REGULAR)",
    yearLabel: "B.TECH.[Fourth Year]",
    monthYear: "JANUARY 2023",
    memoNo: "109472",
    date: "18-03-2022",
    sgpa: 7.39,
    cgpa: 7.01,
    subjects: sem7Subjects,
  },
  {
    semester: "Semester VIII (REGULAR)",
    yearLabel: "B.TECH.[Fourth Year]",
    monthYear: "MAY 2023",
    memoNo: "180749",
    date: "10-07-2023",
    sgpa: 10.0,
    cgpa: 8.24,
    subjects: sem8Subjects,
  },
];

export const mekaChandraStudent: ConsolidatedStudent = {
  regNo: "Y19CS281",
  hallTicket: "Y19CS281",
  studentName: "MEKA CHANDRAABHILASHKUMAR",
  fatherName: "MEKA SRINIVASA RAO",
  motherName: "MEKA VENKATESWARAMMA",
  aadhaarNo: "342332481761",
  course: "BACHELOR OF TECHNOLOGY - COMPUTER SCIENCE & ENGINEERING",
  branch: "COMPUTER SCIENCE & ENGINEERING",
  periodOfStudy: "2019-2023",
  classAwarded: "FIRST CLASS",
  finalCgpa: 8.24,
  memoNo: "21874",
  issueDate: "10-08-2023",
  semesters: semesterStatements,
  sgpaBySemester: [7.92, 6.87, 6.84, 6.47, 6.53, 7.12, 7.39, 10.0],
  cgpaBySemester: [7.92, 7.4, 7.2, 7.01, 6.91, 6.94, 7.01, 8.24],
};

export const consolidatedSemesterSubjects: GradeSubject[][] = [
  sem1Subjects,
  sem2Subjects,
  sem3ConsolidatedSubjects,
  sem4Subjects,
  sem5Subjects,
  sem6Subjects,
  sem7Subjects,
  sem8Subjects,
];

export const pdfStudents: ConsolidatedStudent[] = [mekaChandraStudent];

export function getStudentByRegNoPdf(regNo: string): ConsolidatedStudent | undefined {
  return pdfStudents.find(
    (student) => student.regNo.toLowerCase() === regNo.trim().toLowerCase(),
  );
}

export function getStudentByHallTicketPdf(
  ticket: string,
): ConsolidatedStudent | undefined {
  const normalized = ticket.trim().toLowerCase();
  return pdfStudents.find(
    (student) =>
      student.hallTicket.toLowerCase() === normalized ||
      student.regNo.toLowerCase() === normalized,
  );
}
