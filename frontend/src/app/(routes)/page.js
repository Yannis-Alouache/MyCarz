import Image from "next/image"

import HomeBannerBgCircle from "@/app/_assets/HomeBannerBgCircle.svg"

import Navbar from "../_components/Navbar/Navbar"
import LogoHome from "@/app/_assets/LogoHome.webp"
import BuyService from '@/app/_assets/BuyService.webp';
import MechanicService from '@/app/_assets/MechanicService.webp';
import CoveringService from '@/app/_assets/CoveringService.webp';
import WashService from '@/app/_assets/WashService.webp';
import AdministratifService from '@/app/_assets/AdministratifService.webp';

import HomeHeroBanner from "../_components/HomeHeroBanner/HomeHeroBanner"
import Footer from "../_components/Footer/Footer"
import Service from "../_components/Service/Service"
import Contact from "../_components/ContactFormWithMap/ContactFormWithMap"
import OurValues from "../_components/OurValues/OurValues"
import ServiceCarouselNew from "../_components/ServiceCarouselNew/ServiceCarouselNew"

export const metadata = {
  metadataBase: new URL('https://mycarz.fr/'),
  title: 'Accueil - MyCarz',
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
    title: 'Accueil - MyCarz',
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

export default function Home() {
  
  return (
    <>
      <div className="relative lg:pb-32 pb-10">
        <Image src={HomeBannerBgCircle} alt="Cercle décoratif accueil" className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#0072FF]" alt="Logo MyCarz Principal" logo={LogoHome}/>
        <HomeHeroBanner />
        <ServiceCarouselNew />
      </div>
      
      <div id="services">
        <Service
          title="achat / dépôt / vente"
          link="achat-depot-revente"
          text="Spécialisés dans l’achat et le dépôt-vente, nous vous offrons des solutions simples et rapides pour acheter ou vendre votre véhicule en étant accompagnés."
          svgClassName="right-0 top-0"
          mainImage={BuyService}
          alt="une personne qui remet une clé de voiture"
          mainColor="#FF0000"
          secondaryColor="#7B0000"
          showBtn={true}
          reverse={false}
        />

        <Service
          title="mécanique"
          link="mechanique"
          text="De la vidange au kit de distribution, nous vous proposons notre expertise pour assurer le bon fonctionnement de votre véhicule sans alourdir votre budget."
          svgClassName="left-0 top-0"
          mainImage={MechanicService}
          alt="une personne sous une voiture"
          mainColor="#00B2FF"
          secondaryColor="#005B83"
          showBtn={true}
          reverse={true}
        />

        <Service
          title="covering / detailling"
          link="covering-detailing"
          text="De la personnalisation par covering à la pose de vitre teintée nous mettons en valeur votre véhicule pour un résultat unique."
          svgClassName="right-0 top-0"
          mainImage={CoveringService}
          alt="une personne portant des gants et travaillant sur une voiture"
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={true}
          reverse={false}
        />

        <Service
          title="lavage auto"
          link="wash"
          text="Un nettoyage express complet avant une sortie ou un grand nettoyage de printemps, nous sommes là pour vous satisfaire."
          svgClassName="left-0 top-0"
          mainImage={WashService}
          alt="une personne passant l'aspirateur sur le siège d'une voiture"
          mainColor="#FF69B4"
          secondaryColor="#B5477F"
          showBtn={true}
          reverse={true}
        />

        <Service
          title="administratif"
          link="service"
          text="De l’obtention de la carte grise à l’assurance auto, en passant par les plaques d’immatriculation, nous sommes présents pour faciliter toutes vos démarches."
          svgClassName="right-0 top-0"
          mainImage={AdministratifService}
          alt="une personne signant un formulaire de prêt automobile"
          mainColor="#757575"
          secondaryColor="#393939"
          showBtn={true}
          reverse={false}
        />
      </div>

      <OurValues />

      <Contact mainColor="#00054B" tagColor="#2563EB" />

      <div className="lg:pt-32 pt-10">
        <Footer bgColor="linear-gradient(180deg, #0075FF 0%, #00428F 100%)" logo={LogoHome} />
      </div>
    </>
  )
}
