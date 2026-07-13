import { notFound } from "next/navigation";
import { ExamPageTitle } from "@/components/ExamPageTitle";
import { PageTransition } from "@/components/PageTransition";
import { ResultPageClient } from "@/components/ResultPageClient";
import { getExamById, getStudentByRegNo, students } from "@/lib/dummy-data";

interface ResultPageProps {
  params: Promise<{ regNo: string }>;
  searchParams: Promise<{ exam?: string }>;
}

export function generateStaticParams() {
  return students.map((student) => ({
    regNo: student.regNo,
  }));
}

export default async function ResultPage({
  params,
  searchParams,
}: ResultPageProps) {
  const { regNo } = await params;
  const { exam: examId } = await searchParams;
  const student = getStudentByRegNo(regNo);

  if (!student) {
    notFound();
  }

  const exam = examId ? getExamById(examId) : undefined;

  return (
    <PageTransition className="mx-auto max-w-[1100px] px-4 py-6 font-[Arial,Helvetica,Tahoma,sans-serif]">
      <ExamPageTitle>Autonomous Examination Results</ExamPageTitle>

      {exam && (
        <h2 className="mb-6 text-center text-[14px] font-bold text-[#4a2c8a] print:hidden">
          {exam.title} Results
        </h2>
      )}

      <ResultPageClient student={student} examId={examId} />
    </PageTransition>
  );
}
