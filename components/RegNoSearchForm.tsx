"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Home, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { getStudentByRegNoPdf } from "@/lib/pdf-student-data";
import type { ConsolidatedStudent } from "@/types/grades";

const regNoSchema = z.object({
  regNo: z.string().min(1, "Registration Number cannot be empty."),
});

type RegNoFormData = z.infer<typeof regNoSchema>;

interface RegNoSearchFormProps {
  buttonVariant?: "blue" | "red";
  placeholder?: string;
  onStudentFound: (student: ConsolidatedStudent) => void;
}

export function RegNoSearchForm({
  buttonVariant = "blue",
  placeholder = "Registration Number",
  onStudentFound,
}: RegNoSearchFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegNoFormData>({
    resolver: zodResolver(regNoSchema),
    defaultValues: { regNo: "" },
  });

  const onSubmit = async (data: RegNoFormData) => {
    const regNo = data.regNo.trim();
    setErrorMessage(null);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const student = getStudentByRegNoPdf(regNo);
    if (!student) {
      setErrorMessage("No student found.");
      setIsLoading(false);
      return;
    }

    onStudentFound(student);
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto w-full max-w-lg border border-portal-border p-6"
    >
      <h2 className="mb-5 text-center text-[15px] font-bold text-portal-green">
        Enter Valid Registration Number
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
            {...register("regNo")}
            placeholder={placeholder}
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

        {errors.regNo && (
          <p className="mt-2 text-center text-[12px] text-red-600">
            {errors.regNo.message}
          </p>
        )}

        {errorMessage && (
          <p className="mt-2 text-center text-[12px] font-semibold text-red-600">
            {errorMessage}
          </p>
        )}
      </form>
    </motion.div>
  );
}
