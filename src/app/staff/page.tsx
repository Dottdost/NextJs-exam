"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useStaff } from "../../../hooks/useStaff";

export default function StaffPage() {
  const [roleFilter, setRoleFilter] = useState("All");
  const { staffList, deleteStaff } = useStaff();
  const [filtered, setFiltered] = useState(staffList);

  useEffect(() => {
    if (roleFilter === "All") {
      setFiltered(staffList);
    } else {
      setFiltered(staffList.filter((s) => s.role === roleFilter));
    }
  }, [roleFilter, staffList]);

  return (
    <main className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">All Staff</h1>
        <div className="flex items-center gap-2 text-black">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="border rounded p-2 text-black"
          >
            <option value="All" className="text-black">
              All
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
          <Link
            href="/staff/create"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add New Staff
          </Link>
        </div>
      </div>

      <ul className="border rounded divide-y">
        {filtered.map((s) => (
          <li key={s.id} className="p-3 flex justify-between">
            <div>
              <p className="font-medium text-black">
                {s.firstName} {s.lastName}
              </p>
              <p className="text-sm text-gray-500">{s.designation}</p>
              <p className="text-sm text-gray-400">{s.phone}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href={`/staff/${s.id}`}
                className="text-blue-600 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteStaff(s.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
