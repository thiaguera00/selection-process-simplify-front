import { Disciplines } from "./disciplines";

export type StudentStatus = "Active" | "Graduated" | "Inactive" | "On Leave";

export interface Student {
  id: number;
  name: string;
  age: number;
  registration: string;
  gpa: number;
  course: string;
  status: StudentStatus;
  progress: number;
  photoUrl: string;
  disciplines: Disciplines[];
}
