import './globals.css'

import Provider from '../components/Provider'

import { Footer, NavBar } from '@/components'

export const metadata = {
  title: 'Car Stores',
  description: 'Find, sell and rent cars',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
    <body suppressHydrationWarning={true} className='relative'>
      <Provider>
        <NavBar />
          {children}
        <Footer />
      </Provider>
    </body>
  </html>
  )
}
