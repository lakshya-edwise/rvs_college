"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Home, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getStudentByHallTicket } from "@/lib/dummy-data";
import { generateNotFoundPdf } from "@/lib/generate-not-found-pdf";
import { Input } from "@/components/ui/input";

const hallTicketSchema = z.object({
  hallTicket: z.string().min(1, "Hall Ticket cannot be empty."),
});

type HallTicketFormData = z.infer<typeof hallTicketSchema>;

interface HallTicketFormProps {
  examId?: string;
  buttonVariant?: "blue" | "red";
}

export function HallTicketForm({
  examId,
  buttonVariant = "blue",
}: HallTicketFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HallTicketFormData>({
    resolver: zodResolver(hallTicketSchema),
    defaultValues: { hallTicket: "" },
  });

  const onSubmit = async (data: HallTicketFormData) => {
    const ticket = data.hallTicket.trim();
    const student = getStudentByHallTicket(ticket);

    setNotFoundMessage(null);
    setIsLoading(true);

    if (!student) {
      try {
        const opened = await generateNotFoundPdf({
          hallTicket: ticket,
          examId,
        });
        setNotFoundMessage(
          opened
            ? `${ticket.toUpperCase()} is not registered for this examination. The report has been opened in a new tab.`
            : "Popup blocked. Please allow popups for this site to view the report.",
        );
      } catch {
        setNotFoundMessage("Unable to generate the not-registered PDF report.");
      } finally {
        setIsLoading(false);
      }
      return;
    }

    setTimeout(() => {
      const examParam = examId ? `?exam=${encodeURIComponent(examId)}` : "";
      router.push(`/result/${student.regNo}${examParam}`);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto w-full max-w-lg border border-portal-border p-6"
    >
      <h2 className="mb-5 text-center text-[15px] font-bold text-portal-green">
        Enter Valid HallTicket Number
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-stretch border border-portal-border">
          <Link
            href="/"
            className="flex items-center justify-center border-r border-portal-border bg-white px-3 text-portal-blue transition-colors hover:bg-gray-50"
          >
            <Home size={16} />
          </Link>
          <Input
            {...register("hallTicket")}
            placeholder="HallTicket Number"
            className="h-9 flex-1 rounded-none border-0 text-[13px] shadow-none focus-visible:ring-0"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`flex items-center gap-1.5 px-4 text-[13px] font-bold text-white transition-all disabled:opacity-70 ${
              buttonVariant === "red"
                ? "bg-portal-red hover:bg-[#b81d0d]"
                : "bg-exam-blue hover:bg-[#0d5cd4]"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Loading...
              </>
            ) : (
              "GetResults"
            )}
          </button>
        </div>

        {errors.hallTicket && (
          <p className="mt-2 text-center text-[12px] text-red-600">
            {errors.hallTicket.message}
          </p>
        )}

        {notFoundMessage && (
          <p className="mt-2 text-center text-[12px] font-semibold text-red-600">
            {notFoundMessage}
          </p>
        )}
      </form>
    </motion.div>
  );
}
