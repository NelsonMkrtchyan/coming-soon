import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

import Head from 'next/head'

const inter = Inter({
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: "CardioLab",
  description: 'The Art of Heart Care.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
    </Head>
    <body className={`${inter.className} bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
    >
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <main className='main'>{children}</main>
    </ThemeProvider>
    </body>
    </html>
  )
}
