export default function DashboardLayout({
  children,
  aside,
}: {
  children: React.ReactNode;
  aside: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">{aside}</aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
