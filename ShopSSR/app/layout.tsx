import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { StoreProvider } from '@/src/1--app/providers/ReduxProvider/ui/StoreProvider';

export const metadata: Metadata = {
  title: 'SSR SHOP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <nav className="p-4 bg-gray-800 text-white flex justify-center gap-4">
          <Link href='/'>Home</Link> |<Link href='/catalog'>Catalog</Link> |
          <Link href='/cart'>Cart</Link>
        </nav>
        <StoreProvider>
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
