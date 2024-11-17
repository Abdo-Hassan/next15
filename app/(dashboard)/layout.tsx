export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Navbar Dashboard</h1>
      {children}
    </>
  );
}
