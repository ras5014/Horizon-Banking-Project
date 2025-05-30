import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Ram', lastName: 'Kumar' };
  return (
    <main className="flex min-h-screen">
      <Sidebar
        user={loggedIn}
      />
      <div className="flex-grow">
        {children}
      </div>
    </main>
  );
}
