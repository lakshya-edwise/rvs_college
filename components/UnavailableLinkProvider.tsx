"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { UNAVAILABLE_LINK_MESSAGE } from "@/lib/unavailable-link";

interface UnavailableLinkContextValue {
  showUnavailableMessage: () => void;
}

const UnavailableLinkContext = createContext<UnavailableLinkContextValue | null>(
  null,
);

export function useUnavailableLink() {
  const context = useContext(UnavailableLinkContext);
  if (!context) {
    throw new Error(
      "useUnavailableLink must be used within UnavailableLinkProvider",
    );
  }
  return context;
}

export function UnavailableLinkProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const showUnavailableMessage = useCallback(() => {
    setOpen(true);
  }, []);

  const value = useMemo(
    () => ({ showUnavailableMessage }),
    [showUnavailableMessage],
  );

  return (
    <UnavailableLinkContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 print:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2 }}
              role="alertdialog"
              aria-live="assertive"
              aria-labelledby="unavailable-link-title"
              aria-describedby="unavailable-link-message"
              className="w-full max-w-md border border-portal-border bg-white p-6 text-center shadow-lg"
              onClick={(event) => event.stopPropagation()}
            >
              <h2
                id="unavailable-link-title"
                className="mb-2 text-[16px] font-bold text-portal-blue"
              >
                Something went wrong
              </h2>
              <p
                id="unavailable-link-message"
                className="mb-5 text-[13px] leading-relaxed text-[#666666]"
              >
                {UNAVAILABLE_LINK_MESSAGE}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-exam-blue px-5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-[#0d5cd4]"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </UnavailableLinkContext.Provider>
  );
}
