import type { ReactNode } from "react";

interface ExamPageTitleProps {
  children: ReactNode;
}

export function ExamPageTitle({ children }: ExamPageTitleProps) {
  return (
    <h1 className="mx-auto mb-4 w-fit border-b-2 border-exam-yellow pb-1 text-center font-[Arial,Helvetica,Tahoma,sans-serif] text-[22px] font-bold leading-tight text-exam-title">
      {children}
    </h1>
  );
}

interface ExamSectionTitleProps {
  children: ReactNode;
}

export function ExamSectionTitle({ children }: ExamSectionTitleProps) {
  return (
    <h2 className="mx-auto mb-4 mt-6 w-fit border-b-2 border-exam-yellow pb-0.5 text-center font-[Arial,Helvetica,Tahoma,sans-serif] text-[16px] font-bold leading-tight text-exam-title">
      {children}
    </h2>
  );
}
