import Banner from './_components/Banner/Banner'
import SocialSidebar from './_components/SocialSidebar/SocialSidebar'
import WhatsappBadge from './_components/WhatsappBadge/WhatsappBadge'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" lang="fr-FR" style={{scrollBehavior:'smooth'}}>
      <head>
        <link rel="profile" href="https://gmpg.org/xfn/11"/>
        <meta name="robots" content="max-image-preview:large"></meta>
      </head>
      <body className={inter.className}>
        <Banner />
        <SocialSidebar />
        <WhatsappBadge />
        {children}
      </body>
    </html>
  )
}
