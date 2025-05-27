import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Ram', lastName: 'Kumar' };
  return (
    <main>
      <Sidebar
        user={loggedIn}
      />
      {children}
    </main>
  );
}
