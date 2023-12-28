import Banner from './_components/Banner/Banner'
import SocialSidebar from './_components/SocialSidebar/SocialSidebar'
import WhatsappBadge from './_components/WhatsappBadge/WhatsappBadge'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://mycarz.fr/'),
  title: 'MyCarz',
  applicationName: 'My Carz',
  description: 'My Carz : Garage mécanique / Lavage auto / Carte grise / Achat-Revente / Covering et bien plus encore chez MyCarz !',
  creator: 'Yannis Alouache',
  publisher: 'Yannis Alouache',
  authors: [{name: "Yannis Alouache", url: "https://yannis-alouache.netlify.app/"}],
  keywords: ["Garage Roubaix", "Lavage Auto Roubaix"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MyCarz',
    description: 'My Carz : Garage mécanique / Lavage auto / Carte grise / Achat-Revente / Covering et bien plus encore chez MyCarz !',
    url: "/",
    siteName: "My Carz",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    },
  },
}

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
