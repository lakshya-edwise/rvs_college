"use client";

import { useState } from "react";
import type { RegulationData } from "@/lib/regulation-results-data";
import { regulations } from "@/lib/regulation-results-data";

const ITEMS_PER_PAGE = 10;

interface RegulationResultsTableProps {
  data?: RegulationData[];
}

export function RegulationResultsTable({
  data = regulations,
}: RegulationResultsTableProps) {
  const [activeRegulation, setActiveRegulation] = useState(data[0]?.id ?? "R24");
  const [currentPage, setCurrentPage] = useState(1);

  const selected = data.find((r) => r.id === activeRegulation) ?? data[0];
  const totalPages = Math.max(
    1,
    Math.ceil((selected?.results.length ?? 0) / ITEMS_PER_PAGE),
  );
  const page = Math.min(currentPage, totalPages);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageResults = selected?.results.slice(start, start + ITEMS_PER_PAGE) ?? [];

  const handleRegulationChange = (id: string) => {
    setActiveRegulation(id);
    setCurrentPage(1);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-[13px] font-bold text-portal-green">
          Regulations
        </span>
        {data.map((reg) => (
          <button
            key={reg.id}
            type="button"
            onClick={() => handleRegulationChange(reg.id)}
            className={
              activeRegulation === reg.id
                ? "rounded-[5px] bg-exam-blue px-3 py-1 text-[12px] font-normal text-white"
                : "text-[12px] font-normal text-exam-blue"
            }
          >
            {reg.label}
          </button>
        ))}
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-1 border border-exam-border bg-exam-lightBlue px-2 py-1.5 text-[12px] font-normal">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="px-2 py-0.5 text-exam-blue disabled:opacity-40"
        >
          Previous
        </button>
        {pageNumbers.map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => setCurrentPage(num)}
            className={
              page === num
                ? "min-w-[24px] rounded bg-exam-title px-2 py-0.5 font-normal text-white"
                : "min-w-[24px] px-2 py-0.5 font-normal text-exam-blue"
            }
          >
            {num}
          </button>
        ))}
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          className="px-2 py-0.5 text-exam-blue disabled:opacity-40"
        >
          Next
        </button>
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className="px-2 py-0.5 text-exam-blue disabled:opacity-40"
        >
          Last &gt;&gt;
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-exam-border text-[12px] font-normal">
          <thead>
            <tr className="bg-exam-lightBlue">
              <th className="border border-exam-border px-3 py-2 text-center text-[12px] font-bold text-exam-red">
                {selected?.headerLabel}
              </th>
              <th className="w-[120px] border border-exam-border px-3 py-2 text-center text-[12px] font-bold text-black">
                ReleaseDate
              </th>
            </tr>
          </thead>
          <tbody>
            {pageResults.map((item) => (
              <tr key={item.title} className="bg-white">
                <td className="border border-exam-border px-3 py-2 text-left text-[12px] font-normal">
                  {item.title}
                </td>
                <td className="border border-exam-border px-3 py-2 text-center text-[12px] font-normal">
                  {item.releaseDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
