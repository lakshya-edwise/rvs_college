import { getExamById } from "@/lib/dummy-data";
import {
  formatReportDate,
  loadImageAsBase64,
  openPdfInNewTab,
  splitExamTitle,
} from "@/lib/pdf-utils";

interface NotFoundPdfOptions {
  hallTicket: string;
  examId?: string;
}

function drawWatermark(doc: {
  internal: { pageSize: { getWidth: () => number; getHeight: () => number } };
  setFont: (font: string, style: string) => void;
  setFontSize: (size: number) => void;
  setTextColor: (r: number, g: number, b: number) => void;
  text: (text: string, x: number, y: number) => void;
}) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const watermark = "R.V.R. & J.C. College of Engineering (Autonomous)";

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(230, 210, 210);

  for (let y = 18; y < pageHeight - 8; y += 14) {
    for (let x = 8; x < pageWidth - 8; x += 52) {
      doc.text(watermark, x, y);
    }
  }
}

export async function generateNotFoundPdf({
  hallTicket,
  examId,
}: NotFoundPdfOptions): Promise<boolean> {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const centerX = pageWidth / 2;

  drawWatermark(doc);

  doc.setDrawColor(0, 100, 0);
  doc.setLineWidth(2.5);
  doc.rect(6, 6, pageWidth - 12, pageHeight - 12);

  try {
    const logo = await loadImageAsBase64("/Images/footer.png");
    const logoWidth = 28;
    const logoHeight = (logo.height / logo.width) * logoWidth;
    doc.addImage(logo.data, "PNG", 14, 14, logoWidth, logoHeight);
  } catch {
    // Continue without logo if image fails to load.
  }

  let y = 24;

  doc.setTextColor(0, 51, 153);
  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("R.V.R. & J.C. COLLEGE OF ENGINEERING", centerX, y, {
    align: "center",
  });

  y += 8;
  doc.setTextColor(178, 34, 34);
  doc.setFontSize(12);
  doc.text("(Autonomous)", centerX, y, { align: "center" });

  y += 8;
  doc.setTextColor(0, 102, 204);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(
    "(Approved by AICTE :: Accredited by NBA and NAAC with 'A+' Grade)",
    centerX,
    y,
    { align: "center" },
  );

  y += 7;
  doc.setTextColor(0, 128, 0);
  doc.setFont("helvetica", "bold");
  doc.text("(Sponsored by Nagarjuna Education Society)", centerX, y, {
    align: "center",
  });

  y += 7;
  doc.setTextColor(128, 0, 128);
  doc.text(
    "Chandramoulipuram :: Chowdavaram :: Guntur-522019",
    centerX,
    y,
    { align: "center" },
  );

  y += 6;
  doc.setDrawColor(0, 51, 153);
  doc.setLineWidth(1.5);
  doc.line(14, y, pageWidth - 14, y);

  const exam = examId ? getExamById(examId) : undefined;
  const examLines = splitExamTitle(
    exam?.title ?? "M.Tech., II Year II Semester (R21), Regular Examination - July-2026",
  );

  y += 12;
  doc.setTextColor(0, 51, 153);
  doc.setFont("times", "bold");
  doc.setFontSize(12);
  doc.text(examLines.line1, centerX, y, { align: "center" });

  if (examLines.line2) {
    y += 8;
    doc.text(examLines.line2, centerX, y, { align: "center" });
  }

  y += 14;
  const resultsBoxWidth = 42;
  const resultsBoxHeight = 10;
  doc.setFillColor(0, 100, 0);
  doc.rect(
    centerX - resultsBoxWidth / 2,
    y - 7,
    resultsBoxWidth,
    resultsBoxHeight,
    "F",
  );
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("RESULTS", centerX, y, { align: "center" });

  y += 22;
  doc.setTextColor(255, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(
    `${hallTicket.toUpperCase()} IS NOT REGISTERED FOR THIS EXAMINATION`,
    centerX,
    y,
    { align: "center" },
  );

  y = pageHeight - 28;
  doc.setTextColor(0, 128, 0);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(
    `This is web generated report :: generated on :: ${formatReportDate()}`,
    centerX,
    y,
    { align: "center" },
  );

  doc.setTextColor(230, 210, 210);
  doc.setFontSize(6);
  doc.text(
    "R.V.R. & J.C. College of Engineering (Autonomous)   R.V.R. & J.C. College of Engineering (Autonomous)",
    centerX,
    pageHeight - 12,
    { align: "center" },
  );

  return openPdfInNewTab(doc, `${hallTicket.toUpperCase()}-not-registered.pdf`);
}