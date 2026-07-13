"use client";

import { useState } from "react";
import type { ConsolidatedStudent } from "@/types/grades";

interface StatementOfGradesViewProps {
  student: ConsolidatedStudent;
}

export function StatementOfGradesView({ student }: StatementOfGradesViewProps) {
  const [activeSemester, setActiveSemester] = useState(0);
  const semester = student.semesters[activeSemester];

  return (
    <div>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {student.semesters.map((item, index) => (
          <button
            key={item.memoNo}
            type="button"
            onClick={() => setActiveSemester(index)}
            className={
              activeSemester === index
                ? "rounded-[5px] bg-exam-blue px-3 py-1 text-[12px] text-white"
                : "text-[12px] text-exam-blue"
            }
          >
            {item.semester.replace(" (REGULAR)", "").replace("(REGULAR)", "")}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto border border-exam-border bg-[#f8fff8] p-4">
        <div className="mb-3 text-center">
          <p className="text-[12px] font-bold text-exam-title">
            STATEMENT OF GRADES
          </p>
          <p className="text-[11px] font-bold text-black">{student.branch}</p>
          <p className="text-[11px] text-black">Memo No. {semester.memoNo}</p>
        </div>

        <div className="mb-4 grid gap-1 text-[12px] text-black md:grid-cols-2">
          <p>
            <span className="font-bold text-portal-red">Name :</span>{" "}
            {student.studentName}
          </p>
          <p>
            <span className="font-bold text-portal-red">Regd. No. :</span>{" "}
            {student.regNo}
          </p>
          <p>
            <span className="font-bold text-portal-red">Father&apos;s Name :</span>{" "}
            {student.fatherName}
          </p>
          <p>
            <span className="font-bold text-portal-red">Aadhaar No :</span>{" "}
            {student.aadhaarNo}
          </p>
          <p>
            <span className="font-bold text-portal-red">Mother&apos;s Name :</span>{" "}
            {student.motherName}
          </p>
          <p>
            <span className="font-bold text-portal-red">Month &amp; Year of Exam :</span>{" "}
            {semester.monthYear}
          </p>
          <p>
            <span className="font-bold text-portal-red">Year :</span>{" "}
            {semester.yearLabel}
          </p>
          <p>
            <span className="font-bold text-portal-red">Semester :</span>{" "}
            {semester.semester}
          </p>
        </div>

        <table className="w-full border-collapse border border-exam-border text-[12px]">
          <thead>
            <tr className="bg-exam-lightBlue">
              <th className="border border-exam-border px-2 py-2 text-left font-bold text-portal-red">
                Subject Code
              </th>
              <th className="border border-exam-border px-2 py-2 text-left font-bold text-portal-red">
                Subject Title
              </th>
              <th className="border border-exam-border px-2 py-2 text-center font-bold text-portal-red">
                Grade
              </th>
              <th className="border border-exam-border px-2 py-2 text-center font-bold text-portal-red">
                Credits
              </th>
            </tr>
          </thead>
          <tbody>
            {semester.subjects.map((subject) => (
              <tr key={subject.code} className="bg-white">
                <td className="border border-exam-border px-2 py-2">
                  {subject.code}
                </td>
                <td className="border border-exam-border px-2 py-2">
                  {subject.name}
                </td>
                <td className="border border-exam-border px-2 py-2 text-center">
                  {subject.grade}
                </td>
                <td className="border border-exam-border px-2 py-2 text-center">
                  {subject.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-3 text-center text-[11px] font-bold text-black">
          Programme Accredited by National Board of Accreditation(NBA)
        </p>

        <div className="mt-3 flex flex-wrap justify-between gap-2 text-[12px] font-bold text-portal-red">
          <p>SGPA : {semester.sgpa.toFixed(2)}</p>
          <p>CGPA : {semester.cgpa.toFixed(2)}</p>
        </div>

        <p className="mt-2 text-[11px] text-black">Date: {semester.date}</p>
      </div>
    </div>
  );
}
