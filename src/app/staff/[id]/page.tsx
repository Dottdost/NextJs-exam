"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useStaff } from "../../../../hooks/useStaff";

export default function EditStaffPage() {
  const { staffList, updateStaff } = useStaff();
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const staff = staffList.find((s) => s.id === id);

  const [form, setForm] = useState(
    staff || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      designation: "",
    }
  );

  useEffect(() => {
    if (staff) setForm(staff);
  }, [staff]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateStaff(id, form);
    router.push("/staff");
  }

  if (!staff) return <p className="p-6">Staff not found</p>;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4 text-black">Edit Staff</h1>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            value={(form as any)[key]}
            onChange={handleChange}
            placeholder={key}
            className="w-full border rounded p-2 text-black"
          />
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Update
        </button>
      </form>
    </main>
  );
}
