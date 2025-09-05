"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6 text-black">ERP System</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/dashboard" className="hover:text-indigo-600 text-black">
            Dashboard
          </Link>
          <Link href="/staff" className="hover:text-indigo-600 text-black">
            Staff
          </Link>
          <Link
            href="/payment-voucher"
            className="hover:text-indigo-600 text-black"
          >
            Payment Voucher
          </Link>
          <Link href="/payroll" className="hover:text-indigo-600 text-black">
            Payroll
          </Link>
          <Link href="/memo" className="hover:text-indigo-600 text-black">
            Memo
          </Link>
          <Link
            href="/notifications"
            className="hover:text-indigo-600 text-black"
          >
            Notifications
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Welcome!</h1>
          <UserButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-black">Total number of staff</p>
            <h2 className="text-2xl font-bold text-black">250</h2>
            <p className="text-green-600 text-sm">
              ↑ 12 more than last quarter
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-black">Total applications</p>
            <h2 className="text-2xl font-bold text-black">100</h2>
            <p className="text-red-600 text-sm">
              ↓ 0.2% lower than last quarter
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-black">Total projects</p>
            <h2 className="text-2xl font-bold text-black">10</h2>
            <p className="text-green-600 text-sm">
              ↑ 2% more than last quarter
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-black">Total departments</p>
            <h2 className="text-2xl font-bold text-black">10</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4 text-black">Memo</h2>
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-50">
                <tr className="text-black">
                  <th className="p-2 border">S/N</th>
                  <th className="p-2 border">Memo Title</th>
                  <th className="p-2 border">Sent From</th>
                  <th className="p-2 border">Sent To</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-black">
                  <td className="p-2 border">01</td>
                  <td className="p-2 border">Operations memo</td>
                  <td className="p-2 border">Otor John</td>
                  <td className="p-2 border">Ibrahim Sadiq</td>
                  <td className="p-2 border text-yellow-600 border-black">
                    Pending
                  </td>
                </tr>
                <tr className="text-black">
                  <td className="p-2 border">02</td>
                  <td className="p-2 border">Operations project memo</td>
                  <td className="p-2 border">Fatima Faruk</td>
                  <td className="p-2 border">Shola Abiola</td>
                  <td className="p-2 border text-green-600 border-black">
                    Approved
                  </td>
                </tr>
                <tr className="text-black">
                  <td className="p-2 border">03</td>
                  <td className="p-2 border">Project onboard notice</td>
                  <td className="p-2 border">Otor John</td>
                  <td className="p-2 border">James Emeka</td>
                  <td className="p-2 border text-green-600 border-black">
                    Approved
                  </td>
                </tr>
                <tr className="text-black">
                  <td className="p-2 border">04</td>
                  <td className="p-2 border">Operations memo</td>
                  <td className="p-2 border">Ibrahim Musa</td>
                  <td className="p-2 border">Otor John</td>
                  <td className="p-2 border text-green-600 border-black">
                    Approved
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4 text-black">Staff List</h2>
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-50">
                <tr className="text-black">
                  <th className="p-2 border">S/N</th>
                  <th className="p-2 border">Staff Name</th>
                  <th className="p-2 border">Staff Role</th>
                  <th className="p-2 border">Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-black">
                  <td className="p-2 border">01</td>
                  <td className="p-2 border">Abubakar Ismaila Goje</td>
                  <td className="p-2 border">Admin</td>
                  <td className="p-2 border">Human Resource Dept.</td>
                </tr>
                <tr className="text-black">
                  <td className="p-2 border">02</td>
                  <td className="p-2 border">Ifeanyi Obinna</td>
                  <td className="p-2 border">Admin</td>
                  <td className="p-2 border">Management</td>
                </tr>
                <tr className="text-black">
                  <td className="p-2 border">03</td>
                  <td className="p-2 border">Bankole Olanrewaju</td>
                  <td className="p-2 border">HOD I.T</td>
                  <td className="p-2 border">Peoples and Operation</td>
                </tr>
                <tr className="text-black">
                  <td className="p-2 border">04</td>
                  <td className="p-2 border">Chidinma Ebere</td>
                  <td className="p-2 border">HOD Account</td>
                  <td className="p-2 border">Accounts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom two tables side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment Vouchers */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4 text-black">
              Payment Vouchers
            </h2>
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Subject</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">1</td>
                  <td className="p-2 border">Request for October 2022</td>
                  <td className="p-2 border">25/01/2023</td>
                  <td className="p-2 border text-yellow-600">Pending</td>
                </tr>
                <tr>
                  <td className="p-2 border">2</td>
                  <td className="p-2 border">Project proposal fee</td>
                  <td className="p-2 border">19/01/2023</td>
                  <td className="p-2 border text-green-600">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Applications Card (as table placeholder) */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4 text-black">
              Applications Card
            </h2>
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border text-yellow-600">Pending</td>
                  <td className="p-2 border">80</td>
                </tr>
                <tr>
                  <td className="p-2 border text-green-600">Approved</td>
                  <td className="p-2 border">370</td>
                </tr>
                <tr>
                  <td className="p-2 border text-red-600">Rejected</td>
                  <td className="p-2 border">50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
