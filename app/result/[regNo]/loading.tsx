import { ResultSkeleton } from "@/components/ResultSkeleton";

export default function ResultLoading() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-6">
      <ResultSkeleton />
    </div>
  );
}
