import Banner from './_components/Banner/Banner'
import SocialSidebar from './_components/SocialSidebar/SocialSidebar'
import WhatsappBadge from './_components/WhatsappBadge/WhatsappBadge'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyCarz',
  description: 'Votre garage sur Roubaix',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>

        <Banner />
        <SocialSidebar />
        <WhatsappBadge />
        {children}
      </body>
    </html>
  )
}
