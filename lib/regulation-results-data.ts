export type ResultTabId = "latest" | "consolidated" | "detailed" | "results";

export interface ResultTab {
  id: ResultTabId;
  label: string;
}

export const resultTabs: ResultTab[] = [
  { id: "latest", label: "Latest Results" },
  { id: "consolidated", label: "Consolidated Results (RegNo Wise)" },
  { id: "detailed", label: "Detailed Results (RegNo)" },
  { id: "results", label: "Results" },
];

export interface RegulationResultItem {
  title: string;
  releaseDate: string;
}

export interface RegulationData {
  id: string;
  label: string;
  headerLabel: string;
  results: RegulationResultItem[];
}

export const regulations: RegulationData[] = [
  {
    id: "R24",
    label: "R24",
    headerLabel: "R24 Results Details",
    results: [
      {
        title:
          "B.Tech., Semester IV [Second Year] (R24), Regular Examination - May-2026-Revaluation",
        releaseDate: "04-03-2026",
      },
      {
        title:
          "B.Tech., Semester II [First Year] (R24), Regular Examination - May-2026",
        releaseDate: "10-03-2026",
      },
      {
        title:
          "B.Tech., Semester VI [Third Year] (R24), Regular Examination - May-2026",
        releaseDate: "15-03-2026",
      },
      {
        title:
          "B.Tech., Semester VIII [Fourth Year] (R24), Regular Examination - May-2026",
        releaseDate: "20-03-2026",
      },
      {
        title:
          "B.Tech., Semester IV [Second Year] (R24), Supplementary Examination - June-2026",
        releaseDate: "25-06-2026",
      },
    ],
  },
  {
    id: "R21PG",
    label: "R21(PG)",
    headerLabel: "R21PG Results Details",
    results: [
      {
        title:
          "M.Tech., II Year II Semester (R21), Regular Examination - July-2026",
        releaseDate: "01-07-2026",
      },
      {
        title:
          "MBA, II Year II Semester (R21), Regular/Supplementary Examination - April-2026",
        releaseDate: "03-06-2026",
      },
      {
        title:
          "MCA, II Year II Semester (R21), Regular/Supplementary Examination - April-2026",
        releaseDate: "03-06-2026",
      },
      {
        title:
          "M.Tech., I Year II Semester (R21), Regular Examination - May-2026",
        releaseDate: "12-05-2026",
      },
      {
        title:
          "MBA, I Year II Semester (R21), Regular Examination - May-2026",
        releaseDate: "18-05-2026",
      },
    ],
  },
  {
    id: "R20PG",
    label: "R20(PG)",
    headerLabel: "R20PG Results Details",
    results: [
      {
        title:
          "MCA, II Year I Semester (R20), Supplementary Examination - July-2024",
        releaseDate: "14-08-2024",
      },
      {
        title:
          "MBA, II Year I Semester (R20), Supplementary Examination - July-2024",
        releaseDate: "14-08-2024",
      },
      {
        title:
          "M.Tech., II Year I Semester (R20), Supplementary Examination - July-2024",
        releaseDate: "16-08-2024",
      },
      {
        title:
          "MCA, I Year II Semester (R20), Regular Examination - May-2025",
        releaseDate: "10-06-2025",
      },
    ],
  },
  {
    id: "Y19",
    label: "Y19",
    headerLabel: "Y19 Results Details",
    results: [
      {
        title:
          "B.Tech., Semester VIII [Fourth Year] (Y19), Regular Examination - May-2023",
        releaseDate: "10-07-2023",
      },
      {
        title:
          "B.Tech., Semester VII [Fourth Year] (Y19), Regular Examination - January-2023",
        releaseDate: "18-03-2023",
      },
      {
        title:
          "B.Tech., Semester VI [Third Year] (Y19), Regular Examination - September-2022",
        releaseDate: "08-12-2022",
      },
      {
        title:
          "B.Tech., Semester V [Third Year] (Y19), Regular Examination - April-2022",
        releaseDate: "11-07-2022",
      },
      {
        title:
          "B.Tech., Semester IV [Second Year] (Y19), Regular Examination - October-2021",
        releaseDate: "14-12-2021",
      },
      {
        title:
          "B.Tech., Semester III [Second Year] (Y19), Regular Examination - April-2021",
        releaseDate: "09-07-2021",
      },
      {
        title:
          "B.Tech., Semester II [First Year] (Y19), Regular Examination - October-2020",
        releaseDate: "22-12-2020",
      },
      {
        title:
          "B.Tech., Semester I [First Year] (Y19), Regular Examination - October-2020",
        releaseDate: "18-10-2020",
      },
    ],
  },
  {
    id: "R20",
    label: "R20",
    headerLabel: "R20 Results Details",
    results: [
      {
        title:
          "B.Tech., Semester VII [Fourth Year] (R20), Supplementary Examination - April-2026-Revaluation",
        releaseDate: "05-06-2026",
      },
      {
        title:
          "B.Tech., Semester V [Third Year] (R20), Supplementary Examination - April-2026",
        releaseDate: "05-06-2026",
      },
      {
        title:
          "B.Tech., Semester III [Second Year] (R20), Supplementary Examination - April-2026",
        releaseDate: "05-06-2026",
      },
      {
        title:
          "B.Tech., Semester I [First Year] (R20), Supplementary Examination - April-2026",
        releaseDate: "05-06-2026",
      },
      {
        title:
          "B.Tech., Semester VIII [Fourth Year] (R20), Regular Examination - May-2026",
        releaseDate: "20-05-2026",
      },
      {
        title:
          "B.Tech., Semester VI [Third Year] (R20), Regular Examination - May-2026",
        releaseDate: "20-05-2026",
      },
      {
        title:
          "B.Tech., Semester IV [Second Year] (R20), Regular Examination - May-2026",
        releaseDate: "20-05-2026",
      },
      {
        title:
          "B.Tech., Semester II [First Year] (R20), Regular Examination - May-2026",
        releaseDate: "20-05-2026",
      },
      {
        title:
          "B.Tech., Semester VII [Fourth Year] (R20), Supplementary Examination - December-2025",
        releaseDate: "15-01-2026",
      },
      {
        title:
          "B.Tech., Semester V [Third Year] (R20), Supplementary Examination - December-2025",
        releaseDate: "15-01-2026",
      },
      {
        title:
          "B.Tech., Semester III [Second Year] (R20), Supplementary Examination - December-2025",
        releaseDate: "15-01-2026",
      },
      {
        title:
          "B.Tech., Semester I [First Year] (R20), Supplementary Examination - December-2025",
        releaseDate: "15-01-2026",
      },
      {
        title:
          "B.Tech., Semester VIII [Fourth Year] (R20), Regular Examination - November-2025",
        releaseDate: "10-12-2025",
      },
      {
        title:
          "B.Tech., Semester VI [Third Year] (R20), Regular Examination - November-2025",
        releaseDate: "10-12-2025",
      },
      {
        title:
          "B.Tech., Semester IV [Second Year] (R20), Regular Examination - November-2025",
        releaseDate: "10-12-2025",
      },
    ],
  },
  {
    id: "R18",
    label: "R18",
    headerLabel: "R18 Results Details",
    results: [
      {
        title:
          "B.Tech., Semester VI [Third Year] (R18), Supplementary Examination - April-2026-Revaluation",
        releaseDate: "05-06-2026",
      },
      {
        title:
          "B.Tech., Semester IV [Second Year] (R18), Supplementary Examination - April-2026",
        releaseDate: "05-06-2026",
      },
      {
        title:
          "B.Tech., Semester II [First Year] (R18), Supplementary Examination - April-2026",
        releaseDate: "05-06-2026",
      },
      {
        title:
          "B.Tech., Semester VIII [Fourth Year] (R18), Regular Examination - May-2025",
        releaseDate: "15-05-2025",
      },
    ],
  },
  {
    id: "R17PG",
    label: "R17(PG)",
    headerLabel: "R17 Results Details",
    results: [
      {
        title:
          "MCA, II Year II Semester (R17), Supplementary Examination - May-2025",
        releaseDate: "18-06-2025",
      },
      {
        title:
          "MBA, II Year II Semester (R17), Supplementary Examination - May-2025",
        releaseDate: "18-06-2025",
      },
      {
        title:
          "M.Tech., II Year II Semester (R17), Supplementary Examination - May-2025",
        releaseDate: "20-06-2025",
      },
    ],
  },
  {
    id: "R16",
    label: "R16",
    headerLabel: "R16 Results Details",
    results: [
      {
        title:
          "B.Tech., I Year II Semester (R16), Supplementary Examination - April-2025-Revaluation",
        releaseDate: "12-06-2025",
      },
      {
        title:
          "B.Tech., III Year II Semester (R16), Supplementary Examination - April-2025",
        releaseDate: "12-06-2025",
      },
      {
        title:
          "B.Tech., II Year II Semester (R16), Supplementary Examination - April-2025",
        releaseDate: "14-06-2025",
      },
    ],
  },
  {
    id: "R12",
    label: "R12",
    headerLabel: "R12 Results Details",
    results: [
      {
        title:
          "B.Tech., IV Year II Semester (R12), Supplementary Examination - December-2023",
        releaseDate: "24-01-2024",
      },
      {
        title:
          "B.Tech., II Year II Semester (R12), Supplementary Examination - April-2023",
        releaseDate: "19-05-2023",
      },
      {
        title:
          "B.Tech., III Year II Semester (R12), Supplementary Examination - April-2023",
        releaseDate: "11-04-2023",
      },
    ],
  },
];

export function getRegulationById(id: string): RegulationData | undefined {
  return regulations.find((r) => r.id === id);
}
