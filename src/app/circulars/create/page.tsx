"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { circularData as initialData } from "../../../../data/circulars";
export default function CreateCircularPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    from: "",
    to: "",
    date: new Date().toISOString().slice(0, 10),
    message: "",
  });

  const getCirculars = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("circulars");
      return saved ? JSON.parse(saved) : initialData;
    }
    return initialData;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const circulars = getCirculars();
    const newCircular = {
      id: Date.now(),
      ...form,
    };

    const updatedList = [...circulars, newCircular];
    localStorage.setItem("circulars", JSON.stringify(updatedList));

    router.push("/circulars");
  };

  return (
    <main className="p-6 max-w-2xl">
      <h1 className="text-xl font-bold mb-4">Create Circular</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="from"
          placeholder="From"
          value={form.from}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="to"
          placeholder="To"
          value={form.to}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={4}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Create
        </button>
      </form>
    </main>
  );
}
