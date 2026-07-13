export interface GradeSubject {
  code: string;
  name: string;
  grade: string;
  credits: string;
}

export interface SemesterStatement {
  semester: string;
  yearLabel: string;
  monthYear: string;
  memoNo: string;
  date: string;
  sgpa: number;
  cgpa: number;
  subjects: GradeSubject[];
}

export interface ConsolidatedStudent {
  regNo: string;
  hallTicket: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  aadhaarNo: string;
  course: string;
  branch: string;
  periodOfStudy: string;
  classAwarded: string;
  finalCgpa: number;
  memoNo: string;
  issueDate: string;
  semesters: SemesterStatement[];
  sgpaBySemester: number[];
  cgpaBySemester: number[];
}
