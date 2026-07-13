import type { Student } from "@/types/student";

interface MarksTableProps {
  student: Student;
}

export function MarksTable({ student }: MarksTableProps) {
  const totalCredits = student.subjects.reduce((sum, s) => sum + s.credits, 0);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[750px] border-collapse border border-portal-border text-[12px]">
        <thead>
          <tr className="bg-portal-lightBlue">
            <th className="border border-portal-border px-2 py-2 font-bold">Subject Code</th>
            <th className="border border-portal-border px-2 py-2 font-bold">Subject Name</th>
            <th className="border border-portal-border px-2 py-2 font-bold">Internal Marks</th>
            <th className="border border-portal-border px-2 py-2 font-bold">External Marks</th>
            <th className="border border-portal-border px-2 py-2 font-bold">Total</th>
            <th className="border border-portal-border px-2 py-2 font-bold">Grade</th>
            <th className="border border-portal-border px-2 py-2 font-bold">Credits</th>
            <th className="border border-portal-border px-2 py-2 font-bold">Result</th>
          </tr>
        </thead>
        <tbody>
          {student.subjects.map((subject) => (
            <tr key={subject.code} className="hover:bg-gray-50">
              <td className="border border-portal-border px-2 py-2 text-center">
                {subject.code}
              </td>
              <td className="border border-portal-border px-2 py-2 text-left">
                {subject.name}
              </td>
              <td className="border border-portal-border px-2 py-2 text-center">
                {subject.internal}
              </td>
              <td className="border border-portal-border px-2 py-2 text-center">
                {subject.external}
              </td>
              <td className="border border-portal-border px-2 py-2 text-center">
                {subject.internal + subject.external}
              </td>
              <td className="border border-portal-border px-2 py-2 text-center">
                {subject.grade}
              </td>
              <td className="border border-portal-border px-2 py-2 text-center">
                {subject.credits}
              </td>
              <td
                className={`border border-portal-border px-2 py-2 text-center font-semibold ${
                  subject.result === "PASS" ? "text-portal-green" : "text-red-600"
                }`}
              >
                {subject.result}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-portal-lightBlue font-bold">
            <td
              colSpan={6}
              className="border border-portal-border px-2 py-2 text-right"
            >
              Total Credits
            </td>
            <td className="border border-portal-border px-2 py-2 text-center">
              {totalCredits}
            </td>
            <td className="border border-portal-border px-2 py-2 text-center">
              CGPA: {student.cgpa.toFixed(2)} — {student.status}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
