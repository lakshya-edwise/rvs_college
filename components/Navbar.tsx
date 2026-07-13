"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Home, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { UnavailableMenuButton } from "@/components/UnavailableMenuButton";
import { navMenuItems } from "@/lib/nav-menu";

function DropdownPanel({
  items,
  sections,
  onItemClick,
}: {
  items?: string[];
  sections?: string[][];
  onItemClick: () => void;
}) {
  const isLong = !!sections?.length;
  const itemClassName =
    "block w-full text-left whitespace-nowrap px-4 py-1.5 text-[13px] text-black hover:bg-gray-100";

  return (
    <div
      className={`absolute left-0 top-full z-50 min-w-[240px] border border-portal-border bg-white py-1 shadow-md ${
        isLong ? "max-h-[420px] overflow-y-auto" : ""
      }`}
    >
      {items?.map((item) => (
        <UnavailableMenuButton
          key={item}
          className={itemClassName}
          onClick={onItemClick}
        >
          {item}
        </UnavailableMenuButton>
      ))}
      {sections?.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {sectionIndex > 0 && (
            <div className="my-1 border-t border-portal-border" />
          )}
          {section.map((item) => (
            <UnavailableMenuButton
              key={item}
              className={itemClassName}
              onClick={onItemClick}
            >
              {item}
            </UnavailableMenuButton>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const hasSubmenu = (item: (typeof navMenuItems)[number]) =>
    !!(item.children?.length || item.sections?.length);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="bg-portal-darkBlue print:hidden">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-center justify-between px-3 py-1.5 lg:justify-center lg:py-2">
          <button
            type="button"
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <ul className="hidden items-center lg:flex">
            <li>
              <Link
                href="/"
                className="flex items-center px-3 py-1.5 text-white transition-colors hover:bg-white/10"
              >
                <Home size={15} />
              </Link>
            </li>
            {navMenuItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => hasSubmenu(item) && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {hasSubmenu(item) ? (
                  <button
                    type="button"
                    className="flex items-center gap-0.5 whitespace-nowrap px-2.5 py-1.5 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
                  >
                    {item.label}
                    <ChevronDown size={10} className="mt-px fill-white" />
                  </button>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-0.5 whitespace-nowrap px-2.5 py-1.5 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <UnavailableMenuButton className="flex items-center gap-0.5 whitespace-nowrap px-2.5 py-1.5 text-[13px] font-bold text-white transition-colors hover:bg-white/10">
                    {item.label}
                  </UnavailableMenuButton>
                )}

                {hasSubmenu(item) && openDropdown === item.label && (
                  <DropdownPanel
                    items={item.children}
                    sections={item.sections}
                    onItemClick={() => setOpenDropdown(null)}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="lg:hidden">
            <Link href="/" className="text-white">
              <Home size={18} />
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="border-t border-white/20 px-3 py-2">
                {navMenuItems.map((item) => (
                  <li key={item.label}>
                    {hasSubmenu(item) ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between py-2 text-[13px] font-bold text-white"
                          onClick={() =>
                            setOpenMobileSection(
                              openMobileSection === item.label
                                ? null
                                : item.label,
                            )
                          }
                        >
                          {item.label}
                          <ChevronDown
                            size={12}
                            className={`transition-transform ${
                              openMobileSection === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {openMobileSection === item.label && (
                          <div className="mb-2 ml-3 border-l border-white/30 pl-3">
                            {item.children?.map((child) => (
                              <UnavailableMenuButton
                                key={child}
                                className="block w-full py-1.5 text-left text-[12px] text-white/90"
                                onClick={closeMobileMenu}
                              >
                                {child}
                              </UnavailableMenuButton>
                            ))}
                            {item.sections?.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                {sectionIndex > 0 && (
                                  <div className="my-1 border-t border-white/20" />
                                )}
                                {section.map((child) => (
                                  <UnavailableMenuButton
                                    key={child}
                                    className="block w-full py-1.5 text-left text-[12px] text-white/90"
                                    onClick={closeMobileMenu}
                                  >
                                    {child}
                                  </UnavailableMenuButton>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center py-2 text-[13px] font-bold text-white hover:bg-white/10"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <UnavailableMenuButton
                        className="flex w-full items-center py-2 text-left text-[13px] font-bold text-white hover:bg-white/10"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </UnavailableMenuButton>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
