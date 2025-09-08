"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useStaff } from "../../../hooks/useStaff";

export default function StaffPage() {
  const [roleFilter, setRoleFilter] = useState("All");
  const { staffList } = useStaff();
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
        <h1 className="text-xl font-bold">All Staff</h1>
        <div className="flex items-center gap-2">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="All">All</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="PM">PM</option>
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
              <p className="font-medium">
                {s.firstName} {s.lastName}
              </p>
              <p className="text-sm text-gray-500">{s.designation}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href={`/staff/${s.id}`}
                className="text-blue-600 hover:underline"
              >
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
