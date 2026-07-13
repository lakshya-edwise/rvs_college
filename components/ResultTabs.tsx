"use client";

import type { ResultTabId } from "@/lib/regulation-results-data";
import { resultTabs } from "@/lib/regulation-results-data";

interface ResultTabsProps {
  activeTab: ResultTabId;
  onTabChange: (tab: ResultTabId) => void;
}

export function ResultTabs({ activeTab, onTabChange }: ResultTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
      {resultTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={
            activeTab === tab.id
              ? "rounded-[5px] bg-exam-blue px-4 py-1.5 text-[13px] font-normal text-white"
              : "text-[13px] font-normal text-exam-blue"
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
