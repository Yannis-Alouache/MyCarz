import Image from "next/image"

import HomeBannerBgCircle from "@/app/_assets/HomeBannerBgCircle.svg"
import RedWave from "@/app/_assets/RedWave.svg"
import LightBlueWaveReverse from "@/app/_assets/LightBlueWaveReverse.svg"
import BlueRedWave from "@/app/_assets/BlueRedWave.svg"
import RoseWaveReverse from "@/app/_assets/RoseWaveReverse.svg"
import GrayWave from "@/app/_assets/GrayWave.svg"

import Navbar from "../_components/Navbar/Navbar"
import LogoHome from "@/app/_assets/LogoHome.png"
import BuyService from '@/app/_assets/BuyService.png';
import MechanicService from '@/app/_assets/MechanicService.png';
import CoveringService from '@/app/_assets/CoveringService.png';
import WashService from '@/app/_assets/WashService.png';
import AdministratifService from '@/app/_assets/AdministratifService.png';

import ServiceCarouselWithLogo from "../_components/ServiceCarouselWithLogo/ServiceCarouselWithLogo"
import HomeHeroBanner from "../_components/HomeHeroBanner/HomeHeroBanner"
import Footer from "../_components/Footer/Footer"
import Service from "../_components/Service/Service"
import Contact from "../_components/Contact/Contact"
import OurValues from "../_components/OurValues/OurValues"
import ServiceCarouselNew from "../_components/ServiceCarouselNew/ServiceCarouselNew"

export default function Home() {
  return (
    <>
      <div className="relative pb-32">
        <Image src={HomeBannerBgCircle} alt="" className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#0072FF]" logo={LogoHome}/>
        <HomeHeroBanner />
        <ServiceCarouselWithLogo tiretColor="linear-gradient(90deg, #0075FF 0%, #00397B 100%)"/>
        <ServiceCarouselNew />
      </div>
      
      <Service
        title="achat / dépôt / vente"
        link="achat-depot-revente"
        text="Spécialisés dans l’achat et le dépôt-vente, nous vous offrons des solutions avantageuses pour renouveler ou vendre votre véhicule sans contrainte financière."
        svg={RedWave}
        svgClassName="right-0 top-0"
        mainImage={BuyService}
        mainColor="#FF0000"
        secondaryColor="#7B0000"
        showBtn={true}
        reverse={false}
      />

      <Service
        title="mécanique"
        link="mechanique"
        text="De la vidange à la réparation mineure, nous vous offrons un service spécialisé pour assurer le bon fonctionnement de votre véhicule sans alourdir votre budget."
        svg={LightBlueWaveReverse}
        svgClassName="left-0 top-0"
        mainImage={MechanicService}
        mainColor="#00B2FF"
        secondaryColor="#005B83"
        showBtn={true}
        reverse={true}
      />

      <Service
        title="covering / detailling"
        link="covering-detailing"
        text="De la personnalisation par covering à la finition détaillée, nous mettons en valeur votre véhicule tout en respectant votre budget."
        svg={BlueRedWave}
        svgClassName="right-0 top-0"
        mainImage={CoveringService}
        mainColor="#5392D5"
        secondaryColor="#9E2442"
        showBtn={true}
        reverse={false}
      />

      <Service
        title="lavage auto"
        link="wash"
        text="De la simple rinçage au nettoyage en profondeur, nous redonnons éclat et propreté à votre véhicule sans compromettre votre budget."
        svg={RoseWaveReverse}
        svgClassName="left-0 top-0"
        mainImage={WashService}
        mainColor="#FF69B4"
        secondaryColor="#B5477F"
        showBtn={true}
        reverse={true}
      />

      <Service
        title="administratif"
        link="service"
        text="De la gestion de paperasse à l’assurance, en passant par les plaques d’immatriculation, nous facilitons vos démarches tout en préservant votre sérénité financière."
        svg={GrayWave}
        svgClassName="right-0 top-0"
        mainImage={AdministratifService}
        mainColor="#757575"
        secondaryColor="#393939"
        showBtn={true}
        reverse={false}
      />

      <OurValues />

      <Contact mainColor="#00054B" />

      <div className="pt-32">
        <Footer bgColor="linear-gradient(180deg, #0075FF 0%, #00428F 100%)" logo={LogoHome} />
      </div>
    </>
  )
}
