import { PageTransition } from "@/components/PageTransition";
import { ExamPageTitle } from "@/components/ExamPageTitle";
import { ResultsPageContent } from "@/components/ResultsPageContent";

export default function HomePage() {
  return (
    <PageTransition className="mx-auto max-w-[1100px] px-4 py-6 font-[Arial,Helvetica,Tahoma,sans-serif]">
      <ExamPageTitle>Autonomous Examination Results</ExamPageTitle>
      <ResultsPageContent />
    </PageTransition>
  );
}
