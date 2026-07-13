"use client";

import { useEffect, useState } from "react";
import type { Student } from "@/types/student";
import { MarksTable } from "./MarksTable";
import { PrintResultHeader } from "./PrintResultHeader";
import { ResultActions } from "./ResultActions";
import { ResultCard } from "./ResultCard";
import { ResultSkeleton } from "./ResultSkeleton";

interface ResultPageClientProps {
  student: Student;
  examId?: string;
}

export function ResultPageClient({ student, examId }: ResultPageClientProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ResultSkeleton />;
  }

  return (
    <div className="space-y-6">
      <PrintResultHeader />
      <ResultCard student={student} />
      <MarksTable student={student} />
      <ResultActions student={student} examId={examId} />
    </div>
  );
}
