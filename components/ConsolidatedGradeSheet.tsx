"use client";

import type { ConsolidatedStudent } from "@/types/grades";

interface ConsolidatedGradeSheetProps {
  student: ConsolidatedStudent;
}

const semesterLabels = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const yearGroups = [
  { title: "FIRST YEAR", semesters: [0, 1] },
  { title: "SECOND YEAR", semesters: [2, 3] },
  { title: "THIRD YEAR", semesters: [4, 5] },
  { title: "FOURTH YEAR", semesters: [6, 7] },
];

export function ConsolidatedGradeSheet({ student }: ConsolidatedGradeSheetProps) {
  return (
    <div className="overflow-x-auto border border-exam-border bg-[#f8fff8] p-4">
      <div className="mb-4 text-center">
        <p className="text-[12px] font-bold text-exam-title">
          CONSOLIDATED GRADE SHEET
        </p>
        <p className="text-[11px] text-black">Memo No. {student.memoNo}</p>
      </div>

      <div className="mb-4 grid gap-1 text-[12px] text-black">
        <p>
          <span className="font-bold text-portal-red">Regd. No.:</span>{" "}
          {student.regNo}
        </p>
        <p>
          <span className="font-bold text-portal-red">Course:</span>{" "}
          {student.course}
        </p>
        <p>
          <span className="font-bold text-portal-red">Name of the Candidate:</span>{" "}
          {student.studentName}
        </p>
        <p>
          <span className="font-bold text-portal-red">Father&apos;s Name:</span>{" "}
          {student.fatherName}
        </p>
        <p>
          <span className="font-bold text-portal-red">Mother&apos;s Name:</span>{" "}
          {student.motherName}
        </p>
        <p>
          <span className="font-bold text-portal-red">Period of Study:</span>{" "}
          {student.periodOfStudy}
        </p>
        <p>
          <span className="font-bold text-portal-red">Aadhar No:</span>{" "}
          {student.aadhaarNo}
        </p>
        <p>
          <span className="font-bold text-portal-red">Class Awarded:</span>{" "}
          {student.classAwarded}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {yearGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 text-center text-[12px] font-bold text-exam-title">
              {group.title}
            </h3>
            {group.semesters.map((semIndex) => {
              const semester = student.semesters[semIndex];
              const subjects =
                semIndex === 2
                  ? semester.subjects.map((subject) =>
                      subject.code === "CSMC3"
                        ? { ...subject, grade: "Satisfactory" }
                        : subject,
                    )
                  : semester.subjects;

              return (
                <div key={semester.semester} className="mb-4">
                  <p className="mb-1 text-center text-[11px] font-bold text-black">
                    {semester.semester.replace(" (REGULAR)", "").replace("(REGULAR)", "")}
                  </p>
                  <table className="w-full border-collapse border border-exam-border text-[11px]">
                    <thead>
                      <tr className="bg-exam-lightBlue">
                        <th className="border border-exam-border px-2 py-1 text-left">
                          Subject
                        </th>
                        <th className="border border-exam-border px-2 py-1 text-center">
                          Grade
                        </th>
                        <th className="border border-exam-border px-2 py-1 text-center">
                          Credits
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map((subject) => (
                        <tr key={subject.code} className="bg-white">
                          <td className="border border-exam-border px-2 py-1">
                            <span className="font-bold">{subject.code}</span>{" "}
                            {subject.name}
                          </td>
                          <td className="border border-exam-border px-2 py-1 text-center">
                            {subject.grade}
                          </td>
                          <td className="border border-exam-border px-2 py-1 text-center">
                            {subject.credits}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <table className="mt-4 w-full border-collapse border border-exam-border text-[11px]">
        <thead>
          <tr className="bg-exam-lightBlue">
            <th className="border border-exam-border px-2 py-1">YEAR</th>
            {yearGroups.map((group) => (
              <th
                key={group.title}
                colSpan={2}
                className="border border-exam-border px-2 py-1 text-center"
              >
                {group.title}
              </th>
            ))}
          </tr>
          <tr className="bg-exam-lightBlue">
            <th className="border border-exam-border px-2 py-1">SEMESTER</th>
            {semesterLabels.map((label) => (
              <th
                key={label}
                className="border border-exam-border px-2 py-1 text-center"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-exam-border px-2 py-1 font-bold text-portal-red">
              SGPA
            </td>
            {student.sgpaBySemester.map((sgpa, index) => (
              <td
                key={`sgpa-${index}`}
                className="border border-exam-border px-2 py-1 text-center"
              >
                {sgpa.toFixed(2)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-exam-border px-2 py-1 font-bold text-portal-red">
              CGPA
            </td>
            {student.cgpaBySemester.map((cgpa, index) => (
              <td
                key={`cgpa-${index}`}
                className="border border-exam-border px-2 py-1 text-center"
              >
                {cgpa.toFixed(2)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <p className="mt-4 text-center text-[12px] font-bold text-portal-red">
        Cumulative Grade Point Average of the Candidate after Successful Completion
        of the Course: {student.finalCgpa.toFixed(2)}
      </p>
      <p className="mt-2 text-center text-[11px] text-black">
        Date: {student.issueDate}
      </p>
    </div>
  );
}
