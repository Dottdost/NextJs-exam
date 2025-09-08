export type Staff = {
  id: number;
  firstName: string;
  lastName: string;
  gender: "Male" | "Female";
  phone: string;
  email: string;
  role: string;
  designation: string;
  staffId: string;
  officialEmail: string;
};

export const staffData: Staff[] = [
  {
    id: 1,
    firstName: "Sandra",
    lastName: "Williams",
    gender: "Female",
    phone: "0510 111 000",
    email: "sandra@example.com",
    role: "HR",
    designation: "Human Resources",
    staffId: "HR001",
    officialEmail: "sandra@company.com",
  },
  {
    id: 2,
    firstName: "Ibrahim",
    lastName: "Aziz",
    gender: "Male",
    phone: "0510 111 001",
    email: "ibrahim@example.com",
    role: "IT",
    designation: "Developer",
    staffId: "IT002",
    officialEmail: "ibrahim@company.com",
  },
  {
    id: 3,
    firstName: "Joshua",
    lastName: "Ademola",
    gender: "Male",
    phone: "0510 111 002",
    email: "joshua@example.com",
    role: "PM",
    designation: "Project Manager",
    staffId: "PM003",
    officialEmail: "joshua@company.com",
  },
];
