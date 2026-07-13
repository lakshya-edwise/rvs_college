import Image from "next/image";

const ANNIVERSARY_GIF = "/Images/41-20annual-20day-20cele-20-online.gif";

export function Header() {
  return (
    <header className="border-b border-portal-border bg-white print:hidden">
      <div className="mx-auto max-w-[1100px] px-2 py-2 sm:px-3">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Image
              src="/Images/header.png"
              alt="R.V.R. & J.C. College of Engineering"
              width={920}
              height={110}
              className="h-auto w-full max-h-[95px] object-contain object-left sm:max-h-[105px]"
              priority
            />
          </div>

          <div className="hidden shrink-0 sm:block">
            <div className="h-[80px] w-[95px] overflow-hidden rounded-xl border border-portal-border lg:h-[88px] lg:w-[105px]">
              <Image
                src={ANNIVERSARY_GIF}
                alt="Celebrating 41 Years"
                width={105}
                height={88}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="mt-1 flex justify-center sm:hidden">
          <div className="h-[70px] w-[85px] overflow-hidden rounded-xl border border-portal-border">
            <Image
              src={ANNIVERSARY_GIF}
              alt="Celebrating 41 Years"
              width={85}
              height={70}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </header>
  );
}
