import Link from "next/link";

export default function ResultNotFound() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-12 text-center">
      <h1 className="mb-2 text-[22px] font-semibold text-portal-blue">
        Student Not Found
      </h1>
      <p className="mb-6 text-[13px] text-[#666666]">
        No student record exists for the provided registration number.
      </p>
      <Link
        href="/"
        className="inline-block rounded-sm bg-portal-blue px-4 py-2 text-[13px] text-white hover:bg-[#004a8c]"
      >
        Back to Results
      </Link>
    </div>
  );
}
