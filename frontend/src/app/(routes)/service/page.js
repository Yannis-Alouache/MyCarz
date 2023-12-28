import Image from "next/image"
import ServiceBannerBgCircle from "@/app/_assets/ServiceBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoService from "@/app/_assets/LogoService.webp"
import ServiceHeroBanner from "@/app/_components/ServiceHeroBanner/ServiceHeroBanner"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import GrayWave from "@/app/_assets/GrayWave.svg"
import GrayWaveReverse from "@/app/_assets/GrayWaveReverse.svg"
import Plaques from "@/app/_assets/plaques.webp"
import AssuranceAuto from "@/app/_assets/assuranceAuto.webp"
import CarteGrise from "@/app/_assets/carteGrise.webp"
import Service from "@/app/_components/Service/Service"
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"
import OurValues from "@/app/_components/OurValues/OurValues"
import AffiliateBanner from "@/app/_components/AffiliateBanner/AffiliateBanner"
import React from "react";

export const metadata = {
  metadataBase: new URL('https://mycarz.fr/'),
  title: 'Service - MyCarz',
  applicationName: 'My Carz',
  description: "📑 MyCarz Service : facilitez vos démarches avec nos services de carte grise, plaques auto et assurance à Roubaix. Gagnez du temps et roulez l'esprit tranquille! 🚗",
  creator: 'Yannis Alouache',
  publisher: 'Yannis Alouache',
  authors: [{name: "Yannis Alouache", url: "https://yannis-alouache.netlify.app/"}],
  keywords: ["Garage Roubaix", "Lavage Auto Roubaix"],
  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title: 'Service - MyCarz',
    description: "📑 MyCarz Service : facilitez vos démarches avec nos services de carte grise, plaques auto et assurance à Roubaix. Gagnez du temps et roulez l'esprit tranquille! 🚗",
    url: "/service",
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

const ServicePage = () => {

  const pricingInfos = [
    {
      title: "Express Complet",
      catchPhrase: "Enter your description",
      price: "25",
      services : [
        "Express en 30 min",
        "Rapport qualité prix imbattable",
        "Finitions manuelles de qualité"
      ]
    },
    {
      title: "Ecologique",
      catchPhrase: "Enter your description",
      price: "35",
      services : [
        "Express en 30 min",
        "Rapport qualité prix imbattable",
        "Finitions manuelles de qualité"
      ]
    },
    {
      title: "Premium",
      catchPhrase: "Enter your description",
      price: "50",
      services : [
        "Express en 30 min",
        "Rapport qualité prix imbattable",
        "Finitions manuelles de qualité"
      ]
    },
  ]


  return (
    <>
        <div className='relative lg:pb-32 pb-0'>
          <Image src={ServiceBannerBgCircle} alt="" className="absolute right-0 z-0" />
          <Navbar contactBtnClass="border-[#757575]" logo={LogoService} />
          <ServiceHeroBanner />
          <ServiceCarouselNew />
        </div>

        <div id="services">
          <Service
            title="Cartes grises"
            text="Facilitez votre vie administrative ! Profitez de notre service rapide et efficace pour l'obtention de votre carte grise, évitant les tracas bureaucratiques et assurant une immatriculation sans souci."
            svg={GrayWave}
            svgClassName="right-0 top-0"
            mainImage={CarteGrise}
            mainColor="#757575"
            secondaryColor="#393939"
            showBtn={false}
            reverse={false}
          />

          <Service
            title="Plaques immatriculation"
            text="Simplifiez l'immatriculation de votre véhicule avec nos plaques d’immatriculation/ Obtenez vos plaques d’immatriculations sans tracas  en un temps record."
            svg={GrayWaveReverse}
            svgClassName="left-0 top-0"
            mainImage={AssuranceAuto}
            mainColor="#757575"
            secondaryColor="#393939"
            showBtn={false}
            reverse={true}
          />

          <Service
            title="Assurance auto"
            text="Protégez votre véhicule en toute tranquillité avec notre service d'assurance auto, collaborant avec des partenaires de confiance pour vous offrir les meilleures options. Bénéficiez de tarifs compétitifs et d'une couverture fiable en quelques étapes simples."
            svg={GrayWave}
            svgClassName="right-0 top-0"
            mainImage={Plaques}
            mainColor="#757575"
            secondaryColor="#393939"
            showBtn={false}
            reverse={false}
          />
        </div>

        <AffiliateBanner />


        <OurValues mainColor="text-gray-700" />

        {/* <PricingWrapper pricingInfos={pricingInfos} mainColor="#757575" /> */}


        <Contact mainColor="#575757" tagColor="#575757" />
        <Footer bgColor="linear-gradient(180deg, #757575 0%, #3E3E3E 100%)" logo={LogoService} />
    </>
  )
}

export default ServicePage