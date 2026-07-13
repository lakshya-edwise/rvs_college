"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed left-0 top-0 z-50 h-0.5 w-full overflow-hidden bg-portal-lightBlue print:hidden">
      <div className="h-full w-1/3 animate-[loading_0.8s_ease-in-out_infinite] bg-portal-blue" />
    </div>
  );
}
