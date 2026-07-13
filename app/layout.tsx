import type { Metadata } from "next";
import { NavigationLoader } from "@/components/NavigationLoader";
import { PortalShell } from "@/components/PortalShell";
import "./globals.css";
import "./print.css";

export const metadata: Metadata = {
  title: "Autonomous Examination Results | R.V.R. & J.C. College of Engineering",
  description:
    "Demonstration examination results portal with dummy data only. Not connected to any real examination system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <NavigationLoader />
        <PortalShell>{children}</PortalShell>
      </body>
    </html>
  );
}
