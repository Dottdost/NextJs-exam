"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { staffData as initialData } from "../../../../data/staff";

export default function CreateStaffPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    designation: "",
  });

  const getStaff = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("staff");
      return saved ? JSON.parse(saved) : initialData;
    }
    return initialData;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const staffList = getStaff();
    const newStaff = {
      id: Date.now(),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      role: form.role,
      designation: form.designation,
      officialEmail: form.email,
      gender: "Male",
    };

    const updatedList = [...staffList, newStaff];
    localStorage.setItem("staff", JSON.stringify(updatedList));

    router.push("/staff");
  };

  return (
    <main className="p-6 max-w-2xl">
      <h1 className="text-xl font-bold mb-4 text-black">Add New Staff</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
        >
          <option value="" className="text-black">
            Select Role
          </option>
          <option value="HR" className="text-black">
            HR
          </option>
          <option value="IT" className="text-black">
            IT
          </option>
          <option value="PM" className="text-black">
            PM
          </option>
        </select>
        <input
          name="designation"
          placeholder="Designation"
          value={form.designation}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Staff
        </button>
      </form>
    </main>
  );
}
