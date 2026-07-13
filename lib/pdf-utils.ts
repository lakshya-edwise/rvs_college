export async function loadImageAsBase64(
  url: string,
): Promise<{ data: string; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      ctx.drawImage(img, 0, 0);
      resolve({
        data: canvas.toDataURL("image/png"),
        width: img.width,
        height: img.height,
      });
    };
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
}

export function formatReportDate(date = new Date()): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export function splitExamTitle(title: string): {
  line1: string;
  line2: string;
} {
  const regularIdx = title.indexOf(", Regular");
  const supplementaryIdx = title.indexOf(", Supplementary");
  const splitIndex =
    regularIdx >= 0
      ? regularIdx
      : supplementaryIdx >= 0
        ? supplementaryIdx
        : -1;

  if (splitIndex >= 0) {
    return {
      line1: title.slice(0, splitIndex),
      line2: title.slice(splitIndex + 2),
    };
  }

  return { line1: title, line2: "" };
}

export function openPdfInNewTab(
  doc: { output: (type: "blob") => Blob },
  filename: string,
): boolean {
  const blob = doc.output("blob");
  const pdfBlob =
    blob.type === "application/pdf"
      ? blob
      : new Blob([blob], { type: "application/pdf" });
  const url = URL.createObjectURL(pdfBlob);

  const pdfWindow = window.open("", "_blank");
  if (!pdfWindow) {
    URL.revokeObjectURL(url);
    return false;
  }

  const safeTitle = filename.replace(/"/g, "");

  pdfWindow.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${safeTitle}</title>
    <style>
      html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #525659; }
      iframe { width: 100%; height: 100%; border: 0; }
    </style>
  </head>
  <body>
    <iframe src="${url}" title="${safeTitle}"></iframe>
  </body>
</html>`);
  pdfWindow.document.close();

  return true;
}
