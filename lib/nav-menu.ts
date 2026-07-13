export interface NavMenuItem {
  label: string;
  href?: string;
  children?: string[];
  sections?: string[][];
}

export const navMenuItems: NavMenuItem[] = [
  {
    label: "About RVRJC",
    children: [
      "RVR & JC History",
      "Vision and Mission",
      "Accreditation & Affiliation",
      "Rankings & Recognitions",
      "Principal's Message",
      "Directors",
      "Campus Map",
      "Organizational Map",
    ],
  },
  {
    label: "Management",
    children: [
      "About NES",
      "Founders",
      "President's Message",
      "Executive Body",
      "Governing Body",
      "Other Institutes under NES",
    ],
  },
  {
    label: "Academics",
    children: [
      "Programs Offered",
      "Fee structure",
      "Academic Calendars",
      "Academic Regulations",
      "Academic scholarship",
      "Examination Section",
    ],
  },
  {
    label: "Departments",
    sections: [
      [
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science & Engineering",
        "Computer Science & Business Systems (TCS)",
        "Computer Science & Engineering (DS)",
        "Computer Science & Engineering (AI & ML)",
        "Artificial Intelligence",
        "Artificial Intelligence & Data Science",
        "Quantum Computing",
        "Computer Science & Engineering (IoT)",
        "Electronics and Communication Engineering",
        "Electrical and Electronics Engineering",
        "Information Technology",
        "Mechanical Engineering",
      ],
      ["Computer Applications", "Management Sciences-BBA & MBA"],
      ["Mathematics and Humanities", "Chemistry", "Physics"],
    ],
  },
  {
    label: "Campus Life",
    children: [
      "SICO(Student Integrated Committee)",
      "Student Activities",
      "NCC",
      "NSS",
      "Sports Activites and Recreations",
      "Student Organizations",
    ],
  },
  {
    label: "R & D Cell",
    children: [
      "About R & D Cell",
      "Policy & Facilities",
      "Research Centers",
      "Institute IRINS",
      "Patents",
      "Sponsored Projects",
      "Guides & Scholars",
      "Publications",
    ],
  },
  { label: "Results", href: "/" },
  { label: "Placements" },
  { label: "FeePayments" },
];
