import type { Student } from "@/types/student";
import {
  loadImageAsBase64,
} from "@/lib/pdf-utils";

export async function generateResultPdf(student: Student): Promise<void> {
  const { default: jsPDF } = await import("jspdf");
  const { default: autoTable } = await import("jspdf-autotable");

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 14;

  const headerImage = await loadImageAsBase64("/Images/header.png");
  const imgWidth = pageWidth - margin * 2;
  const imgHeight = (headerImage.height / headerImage.width) * imgWidth;

  doc.addImage(headerImage.data, "PNG", margin, 8, imgWidth, imgHeight);

  let y = 8 + imgHeight + 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Autonomous Examination Results", margin, y);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Student: ${student.studentName}`, margin, y);
  y += 6;
  doc.text(`Hall Ticket: ${student.hallTicket}`, margin, y);
  y += 6;
  doc.text(`Reg No: ${student.regNo}`, margin, y);
  y += 6;
  doc.text(
    `Course: ${student.course} | Branch: ${student.branch}`,
    margin,
    y,
  );
  y += 6;
  doc.text(
    `CGPA: ${student.cgpa.toFixed(2)} | Status: ${student.status}`,
    margin,
    y,
  );

  autoTable(doc, {
    startY: y + 8,
    head: [
      [
        "Code",
        "Subject",
        "Internal",
        "External",
        "Total",
        "Grade",
        "Credits",
        "Result",
      ],
    ],
    body: student.subjects.map((s) => [
      s.code,
      s.name,
      s.internal,
      s.external,
      s.internal + s.external,
      s.grade,
      s.credits,
      s.result,
    ]),
    styles: {
      fontSize: 8,
      cellPadding: 2,
      lineColor: [215, 215, 215],
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: [0, 91, 172],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "center",
    },
    columnStyles: {
      0: { halign: "center", cellWidth: 18 },
      1: { halign: "left", cellWidth: 52 },
      2: { halign: "center", cellWidth: 16 },
      3: { halign: "center", cellWidth: 16 },
      4: { halign: "center", cellWidth: 14 },
      5: { halign: "center", cellWidth: 14 },
      6: { halign: "center", cellWidth: 14 },
      7: { halign: "center", cellWidth: 16 },
    },
    alternateRowStyles: {
      fillColor: [248, 248, 248],
    },
    margin: { left: margin, right: margin },
  });

  doc.save(`${student.regNo}-result.pdf`);
}
