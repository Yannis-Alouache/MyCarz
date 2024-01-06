import BuyHeroBanner from "@/app/_components/BuyHeroBanner/BuyHeroBanner"
import Navbar from "@/app/_components/Navbar/Navbar"
import RedWave from "@/app/_assets/RedWave.svg"
import RedWaveReverse from "@/app/_assets/RedWaveReverse.svg"
import FastBuy from "@/app/_assets/FastBuy.webp"
import BuyService from '@/app/_assets/BuyService.webp';
import Image from "next/image"
import LogoBuy from "@/app/_assets/LogoBuy.webp"
import BuyBannerBgCircle from "@/app/_assets/BuyBannerBgCircle.svg"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import Service from "@/app/_components/Service/Service"
import OurValues from "@/app/_components/OurValues/OurValues"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"
import BuyAffiliateBanner from "@/app/_components/BuyAffiliateBanner/BuyAffiliateBanner"

export const metadata = {
  metadataBase: new URL('https://mycarz.fr/'),
  title: 'Accueil - MyCarz',
  applicationName: 'My Carz',
  description: "🚗 Explorez l'achat, dépôt et revente chez MyCarz à Roubaix. Simplifiez vos transactions auto avec notre service fiable et transparent. 🔁",
  creator: 'Yannis Alouache',
  publisher: 'Yannis Alouache',
  authors: [{name: "Yannis Alouache", url: "https://yannis-alouache.netlify.app/"}],
  keywords: ["Garage Roubaix", "Lavage Auto Roubaix"],
  alternates: {
    canonical: '/achat-depot-revente',
  },
  openGraph: {
    title: 'Accueil - MyCarz',
    description: "🚗 Explorez l'achat, dépôt et revente chez MyCarz à Roubaix. Simplifiez vos transactions auto avec notre service fiable et transparent. 🔁",
    url: "/achat-depot-revente",
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

const AchatDepotRevente = () => {
  const pricingInfos = [
    {
      title: "Dépôt-Vente",
      catchPhrase: "A partir de",
      price: "10% de la valeur du véhicule",
      services : [
        "Lavage",
        "Entretien",
        "Photo",
        "Mise en ligne",
        "Démarche administratif"
      ],
      noEuroSign: true
    },
    {
      title: "Achat ou Vente",
      price: "Sur devis",
      services : [],
      noEuroSign: true
    }
  ]

  return (
    <>
      <div className="relative lg:pb-32 pb-10">
        <Image src={BuyBannerBgCircle} alt="Cercle décoratif achat depot vente" className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#F00]" alt="Logo MyCarz Achat Dépôt Vente" logo={LogoBuy} />
        <BuyHeroBanner />
        <ServiceCarouselNew />
      </div>

      <div id="services">
        <Service
          title="achat"
          text="Vous souhaitez acheter un véhicule en toute sérénité ? Notre équipe vous propose à la vente des arrivages régulier de véhicules entretenus et sous garantie."
          svg={RedWave}
          svgClassName="right-0 top-0"
          mainImage={FastBuy}
          alt="une personne tenant une clé de voiture"
          mainColor="#FF0000"
          secondaryColor="#7B0000"
          showBtn={false}
          reverse={false}
        />

        <Service
          title="dépôt"
          link="achat-depot-revente"
          text="Vous souhaitez vendre votre voiture sans les complications habituelles ? Notre service dédié est la solution. Recevez rapidement une évaluation et une offre compétitive en quelques minutes. Un service rapide, efficace et fiable pour ceux qui cherchent à vendre sans tracas."
          svg={RedWaveReverse}
          svgClassName="left-0 bottom-0"
          mainImage={BuyService}
          alt="une personne qui remet une clé de voiture"
          mainColor="#FF0000"
          secondaryColor="#7B0000"
          showBtn={false}
          reverse={true}
        />

        <Service
          title="dépôt-vente"
          link="achat-depot-revente"
          text="Vous avez un véhicule à vendre et vous souhaitez déléguer cette mission ? Lavage, entretien, photo, mise en ligne sur les sites d’annonces et carte grise, MyCarz s’occupe de tout."
          svg={RedWave}
          svgClassName="right-0 bottom-0"
          mainImage={BuyService}
          alt="une personne qui remet une clé de voiture"
          mainColor="#FF0000"
          secondaryColor="#7B0000"
          showBtn={false}
          reverse={false}
        />
      </div>

      <OurValues mainColor="text-red-800" />

      <PricingWrapper pricingInfos={pricingInfos} mainColor={"#FF0000"} />
      <BuyAffiliateBanner />

      <Contact mainColor="#620000" tagColor="#FF0000" />
      <Footer bgColor="linear-gradient(180deg, #F00 0%, #7D0000 100%)" logo={LogoBuy} />
    </>
  )
}

export default AchatDepotRevente