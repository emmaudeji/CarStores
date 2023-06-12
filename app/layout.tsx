import './globals.css'

import { Footer, NavBar } from '@/components'

export const metadata = {
  title: 'Car Stores',
  description: 'Find, sell and rent cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body suppressHydrationWarning={true} className='relative'>
      <NavBar />
      {children}
      <Footer />
    </body>
  </html>
  )
}
