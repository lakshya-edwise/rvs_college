"use client";

import { Download, Printer } from "lucide-react";
import Link from "next/link";
import { generateResultPdf } from "@/lib/generate-result-pdf";
import type { Student } from "@/types/student";

interface ResultActionsProps {
  student: Student;
  examId?: string;
}

export function ResultActions({ student, examId }: ResultActionsProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    await generateResultPdf(student);
  };

  const backHref = examId
    ? `/results?exam=${encodeURIComponent(examId)}`
    : "/results";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 print:hidden">
      <button
        type="button"
        onClick={handlePrint}
        className="flex items-center gap-1.5 rounded-sm bg-portal-blue px-4 py-2 text-[13px] text-white transition-all hover:scale-[1.02] hover:bg-[#004a8c]"
      >
        <Printer size={14} />
        Print Result
      </button>
      <button
        type="button"
        onClick={handleDownloadPdf}
        className="flex items-center gap-1.5 rounded-sm bg-portal-darkBlue px-4 py-2 text-[13px] text-white transition-all hover:scale-[1.02] hover:bg-[#002d5c]"
      >
        <Download size={14} />
        Download PDF
      </button>
      <Link
        href={backHref}
        className="rounded-sm border border-portal-border bg-white px-4 py-2 text-[13px] text-portal-blue transition-colors hover:bg-gray-50"
      >
        Back
      </Link>
    </div>
  );
}
