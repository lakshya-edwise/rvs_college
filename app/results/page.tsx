import { Suspense } from "react";
import { HallTicketPageContent } from "./HallTicketPageContent";

interface ResultsPageProps {
  searchParams: Promise<{ exam?: string }>;
}

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  return (
    <Suspense fallback={<div className="py-12 text-center text-sm">Loading...</div>}>
      <HallTicketPageContent searchParams={searchParams} />
    </Suspense>
  );
}
