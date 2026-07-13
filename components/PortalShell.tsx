import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

interface PortalShellProps {
  children: ReactNode;
}

export function PortalShell({ children }: PortalShellProps) {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrumb />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </>
  );
}
