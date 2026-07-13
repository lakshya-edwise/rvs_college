import Image from "next/image";

export function PrintResultHeader() {
  return (
    <div className="mb-4 hidden print:block">
      <Image
        src="/Images/header.png"
        alt="R.V.R. & J.C. College of Engineering"
        width={920}
        height={110}
        className="mx-auto h-auto w-full max-h-[100px] object-contain"
      />
      <h1 className="mt-3 text-center text-[14px] font-bold text-black">
        Autonomous Examination Results
      </h1>
    </div>
  );
}
