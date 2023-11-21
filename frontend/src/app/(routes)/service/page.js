import Image from "next/image"

import ServiceBannerBgCircle from "@/app/_assets/ServiceBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoService from "@/app/_assets/LogoService.png"
import ServiceHeroBanner from "@/app/_components/ServiceHeroBanner/ServiceHeroBanner"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/Contact/Contact"
import GrayWave from "@/app/_assets/GrayWave.svg"
import GrayWaveReverse from "@/app/_assets/GrayWaveReverse.svg"
import Plaques from "@/app/_assets/plaques.jpg"
import AssuranceAuto from "@/app/_assets/assuranceAuto.jpg"
import CarteGrise from "@/app/_assets/carteGrise.jpg"
import Service from "@/app/_components/Service/Service"
import OurMission from "@/app/_components/OurMission/OurMission"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"

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
        <div className='relative pb-32'>
            <Image src={ServiceBannerBgCircle} alt="" className="absolute right-0 z-0" />
            <Navbar contactBtnClass="border-[#757575]" logo={LogoService} />
            <ServiceHeroBanner />
            <ServicesCarousel tiretColor="linear-gradient(90deg, #757575 0%, #393939 100%)"/>
        </div>

        <Service
          title="carte grise"
          text="Fini les longues heures d’attente en préfecture ou les sites compliqués. nous nous occupons de toutes les démarches pour vous fournir votre carte grise rapidement et sans encombre."
          svg={GrayWave}
          svgClassName="right-0 top-0"
          mainImage={CarteGrise}
          mainColor="#757575"
          secondaryColor="#393939"
          showBtn={false}
          reverse={false}
        />

        <Service
          title="assurance auto"
          text="Protégez votre véhicule avec notre service d’assurance auto. Nous collaborons avec les meilleures compagnies d’assurance pour vous offrir des offres compétitives adaptées à vos besoins."
          svg={GrayWaveReverse}
          svgClassName="left-0 top-0"
          mainImage={AssuranceAuto}
          mainColor="#757575"
          secondaryColor="#393939"
          showBtn={false}
          reverse={true}
        />

        <Service
          title="plaques d'immatriculation"
          text="Besoin de nouvelles plaques d’immatriculation ? Que ce soit pour un changement de domicile, suite à des dommages ou pour une personnalisation, nous vous proposons un service rapide et de qualité."
          svg={GrayWave}
          svgClassName="right-0 top-0"
          mainImage={Plaques}
          mainColor="#757575"
          secondaryColor="#393939"
          showBtn={false}
          reverse={false}
        />

        <OurMission mainColor="text-gray-700" />

        <PricingWrapper pricingInfos={pricingInfos} mainColor="#757575" />


        <Contact mainColor="#575757" />
        <Footer bgColor="linear-gradient(180deg, #757575 0%, #3E3E3E 100%)" logo={LogoService} />
    </>
  )
}

export default ServicePage