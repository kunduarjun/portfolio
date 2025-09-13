import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';

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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>

        <ThemeSwitch />
      </body>
    </html>
  )
}
