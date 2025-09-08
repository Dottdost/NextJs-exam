export type Circular = {
  id: number;
  title: string;
  from: string;
  to: string;
  date: string;
  message: string;
};

export const circularData: Circular[] = [
  {
    id: 1,
    title: "HR Circular for Operations Department Staff",
    from: "Admin, HR",
    to: "Operations Staffs",
    date: "2022-11-16",
    message: "Please note the updated working hours.",
  },
  {
    id: 2,
    title: "Management Circular for HR Staff",
    from: "Admin, HR",
    to: "HR Staffs",
    date: "2022-11-16",
    message: "Annual appraisal schedule.",
  },
  {
    id: 3,
    title: "Circular for Time Maintenance in the Office",
    from: "Management",
    to: "All Staff",
    date: "2022-11-16",
    message: "Planned maintenance on 20th Nov.",
  },
];
