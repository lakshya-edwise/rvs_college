"use client";

import { useState } from "react";
import { ExamSectionTitle } from "@/components/ExamPageTitle";
import { HallTicketForm } from "@/components/HallTicketForm";
import { LatestResultTable } from "@/components/LatestResultTable";
import { RegulationResultsTable } from "@/components/RegulationResultsTable";
import { ResultTabs } from "@/components/ResultTabs";
import { examResults } from "@/lib/dummy-data";
import type { ResultTabId } from "@/lib/regulation-results-data";

const sectionTitles: Record<ResultTabId, string | null> = {
  latest: "Latest Results",
  consolidated: "Results (RegNo Wise)",
  detailed: "Results (Notification Wise)",
  results: null,
};

export function ResultsPageContent() {
  const [activeTab, setActiveTab] = useState<ResultTabId>("latest");
  const sectionTitle = sectionTitles[activeTab];

  return (
    <>
      <ResultTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {sectionTitle && <ExamSectionTitle>{sectionTitle}</ExamSectionTitle>}

      {activeTab === "latest" && <LatestResultTable exams={examResults} />}

      {activeTab === "consolidated" && <HallTicketForm />}

      {activeTab === "detailed" && <HallTicketForm buttonVariant="red" />}

      {activeTab === "results" && (
        <div className="mt-6">
          <RegulationResultsTable />
        </div>
      )}
    </>
  );
}
