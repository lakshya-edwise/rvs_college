import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { UnavailableLinkProvider } from "./UnavailableLinkProvider";

interface PortalShellProps {
  children: ReactNode;
}

export function PortalShell({ children }: PortalShellProps) {
  return (
    <UnavailableLinkProvider>
      <Header />
      <Navbar />
      <Breadcrumb />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </UnavailableLinkProvider>
  );
}
