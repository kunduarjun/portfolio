import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Who is Arjun Kundu?',
  description: 'Just an overview of some things you may (or may not) want to know about me!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
