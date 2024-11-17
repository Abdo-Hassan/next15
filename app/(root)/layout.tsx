export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Navbar Root</h1>
      {children}
    </>
  );
}
