export interface FooterLinkColumn {
  title: string;
  links: { label: string; highlight?: boolean }[];
}

export const footerLinkColumns: FooterLinkColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Online Payments" },
      { label: "News Letters" },
      { label: "Alumni" },
      { label: "Central Library" },
      { label: "Moodle/LMS" },
      { label: "Placement Portal" },
      { label: "Grievance Redressal Cell" },
      { label: "Social Protection Cell" },
      { label: "Transport Committee" },
      { label: "Internal Committee/ Internal Complaints Committee" },
      { label: "ECO Friendly Practices" },
      { label: "Extra Curricular & Co-Curricular Activities" },
      { label: "Photo Gallery" },
      { label: "Feedback" },
    ],
  },
  {
    title: "Quick Information",
    links: [
      { label: "Best Practices" },
      { label: "Web Studio" },
      { label: "Web Portal" },
      { label: "Facilities" },
      { label: "Training & Placements" },
      { label: "Career Guidance Cell" },
      { label: "Anti-Ragging" },
      { label: "Examination Section" },
      { label: "Student Wellness Centre" },
      { label: "Swayam-NPTEL Local Chapter" },
      { label: "AICTE-PRERANA" },
      { label: "ISTE chapter and ISTE Student chapter" },
      { label: "IEEE Student Branch" },
      { label: "Code of Conduct" },
      { label: "College Services Directory" },
    ],
  },
  {
    title: "Important Links",
    links: [
      { label: "AICTE Approvals" },
      { label: "NAAC Reports" },
      { label: "Autonomous Order" },
      { label: "NBA Orders" },
      { label: "Audited Financial Statements" },
      { label: "EPFO" },
      { label: "Internal Quality Assurance Cell (IQAC)" },
      { label: "National Institutional Ranking Framework (NIRF)-2026", highlight: true },
      { label: "ISO 21001:2018 Certification" },
      { label: "Mandatory Disclosure" },
      { label: "Institute Level Committees" },
      { label: "Details of the college" },
    ],
  },
  {
    title: "Research & Innovations",
    links: [
      { label: "R & D Cell" },
      { label: "RJ E-NEST (ITBI)" },
      { label: "AICTE-IDEA Lab" },
      { label: "Institution's Innovation Council (IIC)" },
      { label: "Innoforge: Ideate & Prototype Club" },
      { label: "SMART INDIA HACKATHON (SIH)" },
      { label: "CLUB SAPPHIRE (AICTE-SPICES)" },
      { label: "Skill Development Center" },
      { label: "EDC Cell" },
      { label: "IIT Bombay Remote Centre" },
    ],
  },
];

export const collegeAddress = {
  title: "College Address",
  lines: [
    "R.V.R. & J.C. College of Engineering,",
    "Chandramoulipuram, Chowdavaram,",
    "GUNTUR-522 019, Andhra Pradesh :: India",
    "Ph: 94910 73317 & 94910 73318",
  ],
};

export const cityOffice = {
  title: "City Office",
  lines: [
    "R.V.R. & J.C.CoE City Office,",
    "Opposite Chinmaya Vidyalaya, S.V.N. Colony,",
    "GUNTUR-522 006, Andhra Pradesh :: India",
    "Ph: 0863-2232505(O)",
    "Fax: 0863-2350343",
  ],
};
