import Image from "next/image"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoCovering from "@/app/_assets/LogoCovering.png"
import CoveringBannerBgCircle from "@/app/_assets/CoveringBannerBgCircle.svg"
import CoveringHeroBanner from "@/app/_components/CoveringHeroBanner/CoveringHeroBanner"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"
import Service from "@/app/_components/Service/Service"

import BlueRedWave from "@/app/_assets/BlueRedWave.svg"
import BlueRedWaveReverse from "@/app/_assets/BlueRedWaveReverse.svg"
import Basique from "@/app/_assets/basique.jpg"
import Complet from "@/app/_assets/complet.jpg"
import Premium from "@/app/_assets/premium.jpg"
import Contact from "@/app/_components/Contact/Contact"
import Footer from "@/app/_components/Footer/Footer"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"


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
          <ServicesCarousel tiretColor="linear-gradient(90deg, #5392D5 0%, #9E2442 100%)"/>
        </div>

        <Service
          title="basique"
          text="Vous souhaitez donner un coup de jeune à votre véhicule sans vider votre portefeuille ? Notre service de detailing basique est fait pour vous. En un temps record, nous prenons soin des surfaces intérieures et extérieures de votre voiture. Faites confiance à notre expertise pour un résultat qui étonnera sans coûter une fortune."
          svg={BlueRedWave}
          svgClassName="right-0 top-0"
          mainImage={Basique}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={false}
        />

        <Service
          title="complet"
          text="Envie d’une remise à neuf complète de votre véhicule ? Notre service de detailing complet est la solution. Du nettoyage des sièges en cuir au traitement des jantes, chaque détail compte pour nous. En plus, nos tarifs compétitifs font de ce service une option accessible pour tous ceux qui veulent combiner qualité et abordabilité."
          svg={BlueRedWaveReverse}
          svgClassName="left-0 top-0"
          mainImage={Complet}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={true}
        />

        <Service
          title="covering premium"
          text="Pour ceux qui cherchent à personnaliser leur véhicule à l’extrême, notre service de covering premium offre une transformation totale. Choisissez parmi une large gamme de finitions et de matériaux pour donner à votre voiture un look unique. Et ne vous inquiétez pas pour le prix, nous avons des options pour tous les budgets."
          svg={BlueRedWave}
          svgClassName="right-0 top-0"
          mainImage={Premium}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={false}
        />

        <PricingWrapper pricingInfos={pricingInfos} mainColor="#5392D5" />

        <Contact mainColor="#192C41" />

        <Footer bgColor="linear-gradient(180deg, #5392D5 10%, #4E1120 100%)" logo={LogoCovering} />


    </>
  )
}

export default Covering