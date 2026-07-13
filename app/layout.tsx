import type { Metadata } from "next";
import { NavigationLoader } from "@/components/NavigationLoader";
import { PortalShell } from "@/components/PortalShell";
import "./globals.css";
import "./print.css";

export const metadata: Metadata = {
  title: "Autonomous Examination Results | R.V.R. & J.C. College of Engineering",
  description:
    "Autonomous Examination Results portal for R.V.R. & J.C. College of Engineering.",
  icons: {
    icon: "/Images/footer.png",
    shortcut: "/Images/footer.png",
    apple: "/Images/footer.png",
  },
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
