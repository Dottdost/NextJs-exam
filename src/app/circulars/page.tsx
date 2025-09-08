"use client";
import Link from "next/link";
import { useCirculars } from "../../../hooks/useCirculars";

export default function CircularsPage() {
  const { circulars } = useCirculars();

  return (
    <main className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">All Circulars</h1>
        <Link
          href="/circulars/create"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Create Circular
        </Link>
      </div>

      <ul className="border rounded divide-y bg-white">
        {circulars.map((c) => (
          <li key={c.id} className="p-4 flex justify-between items-start">
            <div>
              <p className="font-medium text-black">{c.title}</p>
              <p className="text-sm text-gray-500">
                From {c.from} → {c.to} · {c.date}
              </p>
              <p className="mt-1 text-sm text-gray-700">{c.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
