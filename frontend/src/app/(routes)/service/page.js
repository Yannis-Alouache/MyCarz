import Image from "next/image"

import ServiceBannerBgCircle from "@/app/_assets/ServiceBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoService from "@/app/_assets/LogoService.png"
import ServiceHeroBanner from "@/app/_components/ServiceHeroBanner/ServiceHeroBanner"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import GrayWave from "@/app/_assets/GrayWave.svg"
import GrayWaveReverse from "@/app/_assets/GrayWaveReverse.svg"
import Plaques from "@/app/_assets/plaques.jpg"
import AssuranceAuto from "@/app/_assets/assuranceAuto.jpg"
import CarteGrise from "@/app/_assets/carteGrise.jpg"
import Service from "@/app/_components/Service/Service"
import PlaquesCta from "@/app/_assets/plaques.webp" 
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"
import OurValues from "@/app/_components/OurValues/OurValues"
import { RiBankFill } from "react-icons/ri";
import { IoHeartCircle } from "react-icons/io5";
import Link from "next/link"


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
          <ServiceCarouselNew />
        </div>

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

        {/* <div className="max-w-screen-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md">
            <div className="grid grid-cols-12">
              <div className="col-span-8 py-10 px-12">
                <div>
                  <div className="flex gap-x-5 text-[#646d8c]">
                    <p className="flex gap-x-1.5 items-center">
                      <RiBankFill size={22} />
                      <span>Habilitation Ministère de l'Intérieur</span>
                    </p>
                    <p className="flex gap-x-1.5 items-center">
                      <IoHeartCircle size={22} color="#ff5f7e" />
                      <span>97% de satisfaction client</span>
                    </p>
                  </div>

                  <h3 className="my-8 text-5xl font-bold">Faites votre carte grise et vos plaques <span className="text-[#1069ef]">en 2 min</span></h3>
                  <div id="under-text" className="text-[#525a6e]">
                    <p className="mb-3.5">1ère plateforme d'immatriculation depuis 2009</p>
                    <p>Nous avons reçu une double habilitation de l'Etat 🇫🇷 pour vous proposer un service d'immatriculation simplifié en ligne.</p>
                  </div>
                  <div className="mt-10 flex gap-x-4">
                    <Link href="https://www.eplaque.fr/?referer=fTIkE6kVuG49" className="bg-white text-[#1069ef] border border-[#1069ef] rounded-full py-3 px-6 font-bold">Commander plaques</Link>
                    <Link href="https://www.eplaque.fr/?referer=fTIkE6kVuG49" className="bg-[#1069ef] text-white rounded-full py-3 px-6 font-bold">Commander carte grise</Link>
                  </div>
                </div>
              </div>
              <div className="col-span-4 rounded-r-2xl p-16 flex items-center" style={{backgroundImage: "linear-gradient(209deg,#eefbfb 2%,#cfe1fc 100%);"}}>
                <Image src={PlaquesCta} />
              </div>
            </div>
          </div>
        </div> */}

        <OurValues mainColor="text-gray-700" />

        {/* <PricingWrapper pricingInfos={pricingInfos} mainColor="#757575" /> */}


        {/* <Contact mainColor="#575757" /> */}
        <Footer bgColor="linear-gradient(180deg, #757575 0%, #3E3E3E 100%)" logo={LogoService} />
    </>
  )
}

export default ServicePage