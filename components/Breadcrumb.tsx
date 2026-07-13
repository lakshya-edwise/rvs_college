interface BreadcrumbProps {
  segments?: string[];
}

export function Breadcrumb({ segments = ["RVRJC", "Examcell", "Results"] }: BreadcrumbProps) {
  return (
    <div className="border-b border-portal-border bg-white px-4 py-2 print:hidden">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-[12px] font-normal text-[#666666]">
          {segments.join(" / ")}
        </p>
      </div>
    </div>
  );
}
