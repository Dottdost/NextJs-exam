import Link from "next/link";

export default function DashboardAside() {
  return (
    <>
      <h2 className="text-xl font-bold mb-6 text-black">ERP System</h2>
      <nav className="flex flex-col space-y-4 text-black">
        <Link href="/dashboard" className="hover:text-indigo-600">
          Dashboard
        </Link>
        <Link href="/staff" className="hover:text-indigo-600">
          Staff
        </Link>
        <Link href="/payment-voucher" className="hover:text-indigo-600">
          Payment Voucher
        </Link>
        <Link href="/payroll" className="hover:text-indigo-600">
          Payroll
        </Link>
        <Link href="/memo" className="hover:text-indigo-600">
          Memo
        </Link>
        <Link href="/circulars" className="hover:text-indigo-600">
          Circulars
        </Link>
      </nav>
    </>
  );
}
