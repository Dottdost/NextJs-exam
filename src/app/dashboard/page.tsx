"use client";

import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Welcome!</h1>
        <UserButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-black">Total number of staff</p>
          <h2 className="text-2xl font-bold text-black">250</h2>
          <p className="text-green-600 text-sm">↑ 12 more than last quarter</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-black">Total applications</p>
          <h2 className="text-2xl font-bold text-black">100</h2>
          <p className="text-red-600 text-sm">↓ 0.2% lower than last quarter</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-black">Total projects</p>
          <h2 className="text-2xl font-bold text-black">10</h2>
          <p className="text-green-600 text-sm">↑ 2% more than last quarter</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-black">Total departments</p>
          <h2 className="text-2xl font-bold text-black">10</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-black">Memo</h2>
          <ul className="text-sm">
            <li className="flex border-b py-2 text-black">
              <span className="w-12">01</span>
              <span className="flex-1">Operations memo</span>
              <span className="w-32">Otor John → Ibrahim Sadiq</span>
              <span className="text-yellow-600">Pending</span>
            </li>
            <li className="flex border-b py-2 text-black">
              <span className="w-12">02</span>
              <span className="flex-1">Operations project memo</span>
              <span className="w-32">Fatima Faruk → Shola Abiola</span>
              <span className="text-green-600">Approved</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-black">Staff List</h2>
          <ul className="text-sm">
            <li className="flex border-b py-2 text-black">
              <span className="w-12">01</span>
              <span className="flex-1">Abubakar Ismaila Goje</span>
              <span className="w-32">Admin</span>
              <span>Human Resource Dept.</span>
            </li>
            <li className="flex border-b py-2 text-black">
              <span className="w-12">02</span>
              <span className="flex-1">Ifeanyi Obinna</span>
              <span className="w-32">Admin</span>
              <span>Management</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-black">
            Payment Vouchers
          </h2>
          <ul className="text-sm">
            <li className="flex border-b py-2 text-black">
              <span className="w-12">1</span>
              <span className="flex-1">Request for October 2022</span>
              <span className="w-32">25/01/2023</span>
              <span className="text-yellow-600">Pending</span>
            </li>
            <li className="flex border-b py-2 text-black">
              <span className="w-12">2</span>
              <span className="flex-1">Project proposal fee</span>
              <span className="w-32">19/01/2023</span>
              <span className="text-green-600">Approved</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-black">Applications</h2>
          <ul className="text-sm">
            <li className="flex justify-between border-b py-2 text-black">
              <span className="text-yellow-600">Pending</span>
              <span>80</span>
            </li>
            <li className="flex justify-between border-b py-2 text-black">
              <span className="text-green-600">Approved</span>
              <span>370</span>
            </li>
            <li className="flex justify-between border-b py-2 text-black">
              <span className="text-red-600">Rejected</span>
              <span>50</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
