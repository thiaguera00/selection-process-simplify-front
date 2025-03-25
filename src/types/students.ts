export type StudentStatus = "Active" | "Graduated" | "Inactive" | "On Leave";

export interface Student {
  id: string;
  name: string;
  age: number;
  registration: string;
  gpa: number;
  course: string;
  status: StudentStatus;
  creditProgress: number;
  photoUrl: string;
}
