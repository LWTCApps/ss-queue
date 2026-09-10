/*
 * LWTC Student Services Queue — shared reference data
 * ------------------------------------------------------------------
 * Edit THIS file to change what shows up in the app:
 *   - SERVICE_DEFS     the service buttons students pick from
 *   - PROGRAM_DEFS      the Career Programs list (Program Inquiry /
 *                        Program Enrolled dropdowns)
 *   - ADVISOR_DEFS       Workforce Advisors students can pick by name
 *                        (there's always an "Other — type name" option
 *                        too, so this list never has to be complete)
 *
 * This is loaded with a plain <script src="data/queue-data.js"> tag
 * BEFORE the main app script in index.html, so it must stay ordinary,
 * browser-runnable JavaScript — no imports/exports, no JSX, no build
 * step. The main app script reads these as plain globals.
 * ------------------------------------------------------------------
 */

// Each service needs:
//   code  – single letter used to build ticket numbers (e.g. "R-004")
//   label – shown to students and staff
//   icon  – name of an icon registered in the ICONS map in index.html
//   queue – which queue board it belongs to ("student-services" or
//           "financial-aid" — see QUEUES in index.html)
const SERVICE_DEFS = [
  { code: "R", label: "Registration & Records", icon: "FileText", queue: "student-services" },
  { code: "F", label: "Financial Aid", icon: "Wallet", queue: "financial-aid" },
  { code: "A", label: "Academic Advising", icon: "GradCap", queue: "student-services" },
  { code: "I", label: "ID Cards & Parking", icon: "IdCard", queue: "student-services" },
  { code: "G", label: "General Questions", icon: "Help", queue: "student-services" },
];

// Career Programs at LWTC. Career Dual Enrollment draws from this same
// list, so there is only one program list to keep up to date.
// Source (copy over any changes LWTC makes to their program lineup):
//   https://lwtc.collierschools.com/programs/career-programs-at-lwtc
//   https://lwtc.collierschools.com/programs/career-dual-enrollment
// Captured September 2026.
const PROGRAM_DEFS = [
  "Accounting Operations",
  "Automotive Collision Technology Technician",
  "Aviation Airframe Mechanics",
  "Aviation Powerplant Mechanics",
  "Avionics Systems Technician",
  "Building Construction Technologies",
  "Cosmetology",
  "Database Application Development & Programming",
  "Dental Assisting",
  "Digital Media/Multimedia Design",
  "Drafting",
  "Electronic Systems Integration and Automation",
  "Enterprise Desktop and Mobile Support Technology",
  "Facials Specialty",
  "Heating, Ventilation, Air-Conditioning/Refrigeration (HVAC/R)",
  "Marine Service Technologies",
  "Master Automotive Service Technology 1",
  "Medical Assisting",
  "Nursing Assistant (Articulated)",
  "Patient Care Technician",
  "Pharmacy Technician",
  "Phlebotomy",
  "Practical Nursing",
  "Professional Culinary Arts & Hospitality",
  "Professional Nursing (LPN to RN)",
  "Surgical Technology",
  "Veterinary Assisting",
  "Welding Technology",
];

// TODO (Student Services): replace with your real Workforce Advisor
// roster, one name per line. Students who don't see their advisor
// listed can pick "Other — type name" and type it in instead, so this
// list is a convenience, not a hard requirement.
const ADVISOR_DEFS = [
  // "Jane Smith",
  // "John Doe",
  "Mark Kupper",
  "Lynne Bruce",
  "Danays Izquierdo",
  "Daniel Perez",
  "Cynthia Murin",
  "Maria Ramirez",
  "Heidi Duff",
  "Angie Imbriale",
  "Abby Lambley",
  "Evelyn Quiros",
  "Susana Nuenz"
];

// Sentinel value used by the advisor dropdown to mean "let me type a
// name instead" — kept here so both the student check-in form and the
// staff walk-in form use the exact same value.
const ADVISOR_OTHER_VALUE = "__other__";
