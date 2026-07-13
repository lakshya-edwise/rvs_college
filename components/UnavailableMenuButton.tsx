"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useUnavailableLink } from "@/components/UnavailableLinkProvider";

interface UnavailableMenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function UnavailableMenuButton({
  children,
  className = "",
  type = "button",
  onClick,
  ...props
}: UnavailableMenuButtonProps) {
  const { showUnavailableMessage } = useUnavailableLink();

  return (
    <button
      type={type}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          showUnavailableMessage();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
