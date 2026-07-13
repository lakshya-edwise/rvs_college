"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ConsolidatedGradeSheet } from "@/components/ConsolidatedGradeSheet";
import { ExamSectionTitle } from "@/components/ExamPageTitle";
import { LatestResultTable } from "@/components/LatestResultTable";
import { RegNoSearchForm } from "@/components/RegNoSearchForm";
import { RegulationResultsTable } from "@/components/RegulationResultsTable";
import { ResultTabs } from "@/components/ResultTabs";
import { StatementOfGradesView } from "@/components/StatementOfGradesView";
import { examResults } from "@/lib/dummy-data";
import { getStudentByRegNoPdf } from "@/lib/pdf-student-data";
import type { ResultTabId } from "@/lib/regulation-results-data";
import type { ConsolidatedStudent } from "@/types/grades";

const sectionTitles: Record<ResultTabId, string | null> = {
  latest: "Latest Results",
  consolidated: "Results (RegNo Wise)",
  detailed: "Results (Notification Wise)",
  results: null,
};

const validTabs: ResultTabId[] = [
  "latest",
  "consolidated",
  "detailed",
  "results",
];

export function ResultsPageContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<ResultTabId>("latest");
  const [consolidatedStudent, setConsolidatedStudent] =
    useState<ConsolidatedStudent | null>(null);
  const [detailedStudent, setDetailedStudent] =
    useState<ConsolidatedStudent | null>(null);
  const sectionTitle = sectionTitles[activeTab];

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    const regNo = searchParams.get("regNo");
    const tab = validTabs.includes(tabParam as ResultTabId)
      ? (tabParam as ResultTabId)
      : null;

    if (tab) {
      setActiveTab(tab);
    }

    if (regNo) {
      const student = getStudentByRegNoPdf(regNo);
      if (student) {
        const targetTab = tab ?? "consolidated";
        if (targetTab === "detailed") {
          setDetailedStudent(student);
        } else if (targetTab === "consolidated") {
          setConsolidatedStudent(student);
        }
      }
    }
  }, [searchParams]);

  const handleTabChange = (tab: ResultTabId) => {
    setConsolidatedStudent(null);
    setDetailedStudent(null);
    setActiveTab(tab);
  };

  return (
    <>
      <ResultTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {sectionTitle && <ExamSectionTitle>{sectionTitle}</ExamSectionTitle>}

      {activeTab === "latest" && <LatestResultTable exams={examResults} />}

      {activeTab === "consolidated" && (
        <div className="space-y-6">
          <RegNoSearchForm onStudentFound={setConsolidatedStudent} />
          {consolidatedStudent && (
            <ConsolidatedGradeSheet student={consolidatedStudent} />
          )}
        </div>
      )}

      {activeTab === "detailed" && (
        <div className="space-y-6">
          <RegNoSearchForm
            buttonVariant="red"
            onStudentFound={setDetailedStudent}
          />
          {detailedStudent && (
            <StatementOfGradesView student={detailedStudent} />
          )}
        </div>
      )}

      {activeTab === "results" && (
        <div className="mt-6">
          <RegulationResultsTable />
        </div>
      )}
    </>
  );
}
