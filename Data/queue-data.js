/*
 * LWTC Student Services Queue — shared reference data
 * ------------------------------------------------------------------
 * Edit THIS file to change what shows up in the app:
 *   - SERVICE_DEFS       the service buttons students pick from
 *   - PROGRAM_DEFS       the Career Programs list (Program Inquiry /
 *                        Program Enrolled dropdowns)
 *   - ADVISOR_DEFS       Workforce Advisors students can pick by name
 *                        (there's always an "Other — type name" option
 *                        too, so this list never has to be complete)
 *   - NOTIFY_FALLBACK_EMAIL   who gets notified when a checked-in
 *                        student didn't pick a specific advisor
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
//   queue – which queue board it belongs to ("student-services",
//           "financial-aid", or "health-services" — see QUEUES in index.html)
const SERVICE_DEFS = [
  { code: "R", label: "Registration & Records", icon: "FileText", queue: "student-services" },
  { code: "F", label: "Financial Aid", icon: "Wallet", queue: "financial-aid" },
  { code: "A", label: "Academic Advising", icon: "GradCap", queue: "student-services" },
  { code: "I", label: "ID Cards & Parking", icon: "IdCard", queue: "student-services" },
  { code: "G", label: "General Questions", icon: "Help", queue: "student-services" },
  { code: "H", label: "Health Science Documents", icon: "FileText", queue: "health-services" },
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
// roster — each entry needs a name AND an email, since the email is
// what lets the flow notify the right person by Teams/email when a
// student checks in. Students who don't see their advisor listed can
// still pick "Other — type name," they just won't trigger a
// personal notification (see NOTIFY_FALLBACK_EMAIL below).
const ADVISOR_DEFS = [
  // { name: "Jane Smith", email: "jane.smith@collierschools.com" },
  // { name: "John Doe", email: "john.doe@collierschools.com" },
  { name: "Mark Kupper", email: "kuppem1@collierschools.com" },
  { name: "Lynne Bruce", email: "BruceLy@collierschools.com" },
  { name: "Danays Izquierdo", email: "izquid@collierschools.com" },
  { name: "Daniel Perez", email: "perezd13@collierschools.com" },
  { name: "Cynthia Murin", email: "MurinCy@collierschools.com" },
  { name: "Maria Ramirez", email: "RamireM3@collierschools.com" },
  { name: "Heidi Duff", email: "DuffHe@collierschools.com" },
  { name: "Angie Imbriale", email: "ImbriaAn@collierschools.com" },
  { name: "Abby Lambley", email: "LambleAb@collierschools.com" },
  { name: "Evelyn Quiros", email: "quiroe@collierschools.com" },
  { name: "Susana Nuenz", email: "nunezs2@collierschools.com" },
  { name: "Renee Gales", email: "galesr@collierschools.com" },
  { name: "Tiffany Randolph", email: "randot@collierschools.com"}
];

// Sentinel value used by the advisor dropdown to mean "let me type a
// name instead" — kept here so both the student check-in form and the
// staff walk-in form use the exact same value.
const ADVISOR_OTHER_VALUE = "__other__";

// Where staff notifications go when a check-in doesn't resolve to a
// specific advisor's email (no advisor picked, or "Other — type name"
// was used). Point this at a shared Student Services inbox/Teams
// channel address so nothing goes unnoticed.
const NOTIFY_FALLBACK_EMAIL = "lwtc@collierschools.com"; // TODO: replace with your real shared inbox
