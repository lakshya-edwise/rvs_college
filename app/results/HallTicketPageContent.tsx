import { ExamPageTitle } from "@/components/ExamPageTitle";
import { HallTicketForm } from "@/components/HallTicketForm";
import { PageTransition } from "@/components/PageTransition";
import { getExamById } from "@/lib/dummy-data";

interface HallTicketPageContentProps {
  searchParams: Promise<{ exam?: string }>;
}

export async function HallTicketPageContent({
  searchParams,
}: HallTicketPageContentProps) {
  const params = await searchParams;
  const exam = params.exam ? getExamById(params.exam) : undefined;

  return (
    <PageTransition className="mx-auto max-w-[1100px] px-4 py-6 font-[Arial,Helvetica,Tahoma,sans-serif]">
      <ExamPageTitle>Autonomous Examination Results</ExamPageTitle>

      {exam && (
        <h2 className="mb-8 text-center text-[14px] font-bold text-[#4a2c8a]">
          {exam.title} Results
        </h2>
      )}

      <HallTicketForm examId={params.exam} />
    </PageTransition>
  );
}
