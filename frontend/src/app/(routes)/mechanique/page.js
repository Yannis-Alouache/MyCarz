import Image from "next/image"

import MechanicBannerBgCircle from "@/app/_assets/MechanicBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoMechanic from "@/app/_assets/LogoMechanic.png"
import MechanicHeroBanner from "@/app/_components/MechanicHeroBanner/MechanicHeroBanner"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import Service from "@/app/_components/Service/Service"
import LightBlueWave from "@/app/_assets/LightBlueWave.svg"
import LightBlueWaveReverse from "@/app/_assets/LightBlueWaveReverse.svg"

import Filter from "@/app/_assets/filtres.jpg"
import Disquettes from "@/app/_assets/disquettes.jpg"
import EntretienMoteur from "@/app/_assets/entretienMoteur.jpg"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"
import OurValues from "@/app/_components/OurValues/OurValues"

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
      
      <PricingWrapper pricingInfos={pricingInfos} mainColor="#00B2FF" />

      <OurValues mainColor="text-[#0088C3]" />

      <Contact mainColor="#0088C3" />
      <Footer bgColor="linear-gradient(180deg, #00B2FF 0%, #003248 100%)" logo={LogoMechanic} />
    </>
  )
}

export default Mechanique