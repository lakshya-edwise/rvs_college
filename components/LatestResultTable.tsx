"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ExamResult } from "@/types/student";

interface LatestResultTableProps {
  exams: ExamResult[];
}

export function LatestResultTable({ exams }: LatestResultTableProps) {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleGetDetails = (examId: string) => {
    setLoadingId(examId);
    setTimeout(() => {
      router.push(`/results?exam=${encodeURIComponent(examId)}`);
    }, 300);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] border-collapse border border-exam-border text-[12px] font-normal text-black">
        <thead>
          <tr className="bg-exam-lightBlue">
            <th
              rowSpan={2}
              className="border border-exam-border px-3 py-2.5 text-left text-[12px] font-bold text-black"
            >
              Recent Results Details{" "}
              <span className="font-normal text-exam-red">
                (Released in past 30days)
              </span>
            </th>
            <th
              colSpan={2}
              className="border border-exam-border px-3 py-2 text-center text-[12px] font-bold text-black"
            >
              Results
            </th>
            <th
              colSpan={2}
              className="border border-exam-border px-3 py-2 text-center text-[12px] font-bold text-black"
            >
              Last Date For
            </th>
          </tr>
          <tr className="bg-exam-lightBlue">
            <th className="border border-exam-border px-3 py-2 text-center text-[12px] font-bold text-black">
              Remarks
            </th>
            <th className="border border-exam-border px-3 py-2 text-center text-[12px] font-bold text-black">
              ReleaseDate
            </th>
            <th className="border border-exam-border px-3 py-2 text-center text-[12px] font-bold text-black">
              PerVerification
            </th>
            <th className="border border-exam-border px-3 py-2 text-center text-[12px] font-bold text-black">
              Revaluation
            </th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id} className="bg-white">
              <td className="border border-exam-border px-3 py-2.5 text-left text-[12px] font-normal">
                {exam.title}
              </td>
              <td className="border border-exam-border px-3 py-2.5 text-center">
                <button
                  type="button"
                  onClick={() => handleGetDetails(exam.id)}
                  disabled={loadingId === exam.id}
                  className="rounded-[4px] bg-exam-blue px-3 py-1 text-[11px] font-bold text-white disabled:opacity-70"
                >
                  {loadingId === exam.id ? "Loading..." : "Get Details"}
                </button>
              </td>
              <td className="border border-exam-border px-3 py-2.5 text-center text-[12px] font-normal">
                {exam.releaseDate}
              </td>
              <td className="border border-exam-border px-3 py-2.5 text-center text-[12px] font-normal">
                {exam.perVerificationDate ?? "--"}
              </td>
              <td className="border border-exam-border px-3 py-2.5 text-center text-[12px] font-normal">
                {exam.revaluationDate ?? "--"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
