export interface Subject {
  code: string;
  name: string;
  internal: number;
  external: number;
  grade: string;
  credits: number;
  result: "PASS" | "FAIL";
}

export interface Student {
  regNo: string;
  hallTicket: string;
  studentName: string;
  course: string;
  branch: string;
  regulation: string;
  semester: string;
  cgpa: number;
  status: "PASS" | "FAIL";
  subjects: Subject[];
}

export interface ExamResult {
  id: string;
  title: string;
  releaseDate: string;
  perVerificationDate?: string;
  revaluationDate?: string;
}
