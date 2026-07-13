import Image from "next/image";
import {
  cityOffice,
  collegeAddress,
  footerLinkColumns,
} from "@/lib/footer-data";
import { SocialMediaIcons } from "./SocialMediaIcons";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=R.V.R.%26%20J.C.%20College%20of%20Engineering%2C%20Guntur%2C%20Andhra%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed";

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; highlight?: boolean }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-[14px] font-bold text-[#ffcc00]">{title}</h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <span
              className={`cursor-default text-[12px] leading-snug hover:underline ${
                link.highlight ? "text-[#ffcc00]" : "text-white"
              }`}
            >
              {link.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-[#002147] text-white print:hidden">
      <div className="mx-auto max-w-[1100px] px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinkColumns.map((column) => (
            <FooterLinkList
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto max-w-[1100px] px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/Images/footer.png"
                alt="R.V.R. & J.C. College of Engineering Logo"
                width={120}
                height={140}
                className="h-[120px] w-auto object-contain"
              />
              <SocialMediaIcons />
            </div>

            <div>
              <h3 className="mb-3 text-[14px] font-bold text-[#ffcc00]">
                {collegeAddress.title}
              </h3>
              <address className="space-y-0.5 not-italic text-[12px] leading-relaxed text-white">
                {collegeAddress.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>

            <div>
              <h3 className="mb-3 text-[14px] font-bold text-[#ffcc00]">
                {cityOffice.title}
              </h3>
              <address className="space-y-0.5 not-italic text-[12px] leading-relaxed text-white">
                {cityOffice.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>

            <div>
              <h3 className="mb-3 text-[14px] font-bold text-[#ffcc00]">
                Locate Us
              </h3>
              <div className="overflow-hidden border border-white/20 bg-white">
                <iframe
                  title="R.V.R. & J.C. College of Engineering Location"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-3 text-center">
        <p className="text-[10px] text-white/60">
          Demonstration Portal — Dummy Data Only. Not connected to any real
          examination system.
        </p>
      </div>
    </footer>
  );
}
