import Image from "next/image"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoCovering from "@/app/_assets/LogoCovering.png"
import CoveringBannerBgCircle from "@/app/_assets/CoveringBannerBgCircle.svg"
import CoveringHeroBanner from "@/app/_components/CoveringHeroBanner/CoveringHeroBanner"
import Service from "@/app/_components/Service/Service"

import BlueRedWave from "@/app/_assets/BlueRedWave.svg"
import BlueRedWaveReverse from "@/app/_assets/BlueRedWaveReverse.svg"
import Basique from "@/app/_assets/basique.jpg"
import Complet from "@/app/_assets/complet.jpg"
import Premium from "@/app/_assets/premium.jpg"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import Footer from "@/app/_components/Footer/Footer"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"
import OurMission from "@/app/_components/OurMission/OurMission"
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"


const Covering = () => {
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
        <div className="relative pb-32">
          <Image src={CoveringBannerBgCircle} alt="" className="absolute right-0 z-0" />
          <Navbar contactBtnClass="border-[#5392D5]" logo={LogoCovering} />
          <CoveringHeroBanner />
          <ServiceCarouselNew />
        </div>

        <Service
          title="Covering"
          text="Transformez l'apparence de votre voiture selon vos envies avec notre service de covering, offrant une personnalisation créative et une protection contre les griffes. Chez MyCarz, vous pouvez embellir une partie ou la totalité de votre véhicule ou poser un Covering publicitaire."
          svg={BlueRedWave}
          svgClassName="right-0 top-0"
          mainImage={Basique}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={false}
        />

        <Service
          title="Polissage/Lustrage"
          text="Restaurez l'éclat d'origine de votre voiture en éliminant les imperfections avec notre service de polissage, suivi d'un lustrage pour une brillance éclatante. Redonnez vie à la carrosserie de votre véhicule."
          svg={BlueRedWaveReverse}
          svgClassName="left-0 top-0"
          mainImage={Complet}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={true}
        />

        <Service
          title="Vitre teinté"
          text="De l’obtention de la carte grise à l’assurance auto, en passant par les plaques d’immatriculation, nous sommes présent pour faciliter toute vos démarches."
          svg={BlueRedWave}
          svgClassName="right-0 top-0"
          mainImage={Premium}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={false}
        />

        <PricingWrapper pricingInfos={pricingInfos} mainColor="#5392D5" />

        <OurMission mainColor="text-[#5392D5]" />

        <Contact mainColor="#192C41" />

        <Footer bgColor="linear-gradient(180deg, #5392D5 10%, #4E1120 100%)" logo={LogoCovering} />


    </>
  )
}

export default Covering