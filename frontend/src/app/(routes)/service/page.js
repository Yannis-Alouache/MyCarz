"use client";

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
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"
import OurValues from "@/app/_components/OurValues/OurValues"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"
import AffiliateBanner from "@/app/_components/AffiliateBanner/AffiliateBanner"
import React, { useState } from "react";


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

        <PricingWrapper pricingInfos={pricingInfos} mainColor="#757575" />


        <Contact mainColor="#575757" />
        <Footer bgColor="linear-gradient(180deg, #757575 0%, #3E3E3E 100%)" logo={LogoService} />
    </>
  )
}

export default ServicePage