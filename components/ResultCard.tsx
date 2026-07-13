import type { Student } from "@/types/student";

interface ResultCardProps {
  student: Student;
}

export function ResultCard({ student }: ResultCardProps) {
  const fields = [
    { label: "Student Name", value: student.studentName },
    { label: "Hall Ticket Number", value: student.hallTicket },
    { label: "Course", value: student.course },
    { label: "Branch", value: student.branch },
    { label: "Regulation", value: student.regulation },
    { label: "Semester", value: student.semester },
    { label: "CGPA", value: student.cgpa.toFixed(2) },
    {
      label: "Status",
      value: student.status,
      highlight: student.status === "PASS" ? "text-portal-green" : "text-red-600",
    },
  ];

  return (
    <div className="border border-portal-border bg-[#fafafa] p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.label} className="flex gap-2 text-[13px]">
            <span className="min-w-[140px] font-semibold text-portal-darkBlue">
              {field.label}:
            </span>
            <span className={field.highlight ?? "text-black"}>{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
