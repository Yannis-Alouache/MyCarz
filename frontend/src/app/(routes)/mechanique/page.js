import Image from "next/image"

import MechanicBannerBgCircle from "@/app/_assets/MechanicBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoMechanic from "@/app/_assets/LogoMechanic.webp"
import MechanicHeroBanner from "@/app/_components/MechanicHeroBanner/MechanicHeroBanner"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import Service from "@/app/_components/Service/Service"
import LightBlueWave from "@/app/_assets/LightBlueWave.svg"
import LightBlueWaveReverse from "@/app/_assets/LightBlueWaveReverse.svg"

import Filter from "@/app/_assets/filtres.webp"
import Disquettes from "@/app/_assets/disquettes.webp"
import EntretienMoteur from "@/app/_assets/entretienMoteur.webp"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"
import OurValues from "@/app/_components/OurValues/OurValues"
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"

export const metadata = {
  metadataBase: new URL('https://mycarz.fr/'),
  title: 'Méchanique - MyCarz',
  applicationName: 'My Carz',
  description: "🔧 Besoin d'une mécanique légère? Confiez votre véhicule à MyCarz à Roubaix pour des interventions rapides et de qualité. Roulez sereinement! 🚗",
  creator: 'Yannis Alouache',
  publisher: 'Yannis Alouache',
  authors: [{name: "Yannis Alouache", url: "https://yannis-alouache.netlify.app/"}],
  keywords: ["Garage Roubaix", "Lavage Auto Roubaix"],
  alternates: {
    canonical: '/mechanique',
  },
  openGraph: {
    title: 'Méchanique - MyCarz',
    description: "🔧 Besoin d'une mécanique légère? Confiez votre véhicule à MyCarz à Roubaix pour des interventions rapides et de qualité. Roulez sereinement! 🚗",
    url: "/mechanique",
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

const Mechanique = () => {
  const pricingInfos = [
    {
      title: "Vidange huile & changement filtre à huile",
      catchPhrase: "HORS PIÈCES",
      price: "50",
      services : [
        "Express",
        "Garantie",
      ]
    },
    {
      title: "Changement plaquette avant OU arrière",
      catchPhrase: "HORS PIÈCES",
      price: "50",
      services : [
        "Express",
        "Garantie"
      ]
    },
    {
      title: "Changement disque avant OU arrière",
      catchPhrase: "HORS PIÈCES",
      price: "60",
      services : [
        "Express",
        "Garantie"
      ]
    },
    {
      title: "Contrôle et mise à niveau des fluides",
      catchPhrase: "HORS PIÈCES",
      price: "30",
      services : [
        "Express",
        "Garantie"
      ]
    },
    {
      title: "Diagnostique éléctronique",
      catchPhrase: "HORS PIÈCES",
      price: "30",
      services : [
        "Express",
        "Garantie"
      ]
    },
    {
      title: "Autre Prestation",
      catchPhrase: "",
      price: "Sur devis",
      services : [
        "Express",
        "Garantie"
      ],
      noEuroSign: true
    },
  ]

  return (
    <>
      <div className="relative lg:pb-32 pb-10">
        <Image src={MechanicBannerBgCircle} alt="" className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#00B2FF]" logo={LogoMechanic} />
        <MechanicHeroBanner />
        <ServiceCarouselNew />
      </div>

      <div id="services">
        <Service
          title="Entretien"
          text="Ne sous-estimez jamais l’importance des entretiens périodiques. Des filtres en bon état et une huile propre garantissent une meilleure qualité de l’air dans l’habitacle, protègent votre moteur des impuretés et optimisent la consommation de carburant. Confiez votre véhicule à MyCarz pour un entretien rapide  et abordable."
          svg={LightBlueWave}
          svgClassName="right-0 top-0"
          mainImage={Filter}
          mainColor="#00B2FF"
          secondaryColor="#005B83"
          showBtn={false}
          reverse={false}
        />

        <Service
          title="Réparation"
          text="Vous souhaitez remplacer un kit de distribution, un embrayage ou un moteur complet ? Chez MyCarz, nos experts peuvent s’occuper de tout les problèmes de votre véhicule, dans le respect des préconisations constructeurs."
          svg={LightBlueWaveReverse}
          svgClassName="left-0 top-0"
          mainImage={Disquettes}
          mainColor="#00B2FF"
          secondaryColor="#005B83"
          showBtn={false}
          reverse={true}
        />

        <Service
          title="Diagnostic"
          text="Vous avez besoin d'un diagnostic, que ce soit électronique ou visuel ? Notre équipement dernier cri nous permet de réaliser tous les types de diagnostics sur votre véhicule, de supprimer les voyants gênants et de vous fournir des informations fiables pour valider les réparations nécessaires."
          svg={LightBlueWave}
          svgClassName="right-0 top-0"
          mainImage={EntretienMoteur}
          mainColor="#00B2FF"
          secondaryColor="#005B83"
          showBtn={false}
          reverse={false}
        />
      </div>
      
      <PricingWrapper pricingInfos={pricingInfos} mainColor="#00B2FF" />

      <OurValues mainColor="text-[#0088C3]" />

      <Contact mainColor="#0088C3" tagColor="#2563EB" />
      <Footer bgColor="linear-gradient(180deg, #00B2FF 0%, #003248 100%)" logo={LogoMechanic} />
    </>
  )
}

export default Mechanique