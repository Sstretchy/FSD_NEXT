export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='grid grid-cols-[300px_1fr] gap-10 p-16'>
      {children}
    </section>
  );
}
