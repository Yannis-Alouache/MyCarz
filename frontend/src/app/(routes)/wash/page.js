import Image from "next/image"
import WashBannerBgCircle from "@/app/_assets/WashBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoWash from "@/app/_assets/LogoWash.png"
import WashHeroBanner from "@/app/_components/WashHeroBanner/WashHeroBanner"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/Contact/Contact"
import Service from "@/app/_components/Service/Service"
import RoseWave from "@/app/_assets/RoseWave.svg"
import RoseWaveReverse from "@/app/_assets/RoseWaveReverse.svg"
import Express from "@/app/_assets/express.jpg"
import Ecologique from "@/app/_assets/ecologique.jpg"
import WashPremium from "@/app/_assets/washPremium.jpg"
import Pricing from "@/app/_components/Pricing/Pricing"


const Wash = () => {
  return (
    <>
      <div className="relative">
        <Image src={WashBannerBgCircle} alt="" className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#FF69B4]" logo={LogoWash} />
      </div>
      <WashHeroBanner />
      <ServicesCarousel tiretColor="linear-gradient(90deg, #FF69B4 0%, #BC4E85 100%)"/>
      
      <Service
        title="express"
        text="Vous êtes pressé mais votre voiture mérite tout de même le meilleur ? Optez pour notre service de lavage basique express. En quelques minutes, notre équipe utilise des produits de qualité et des techniques éprouvées pour redonner à votre véhicule tout son éclat. Et le meilleur dans tout ça ?"
        svg={RoseWave}
        svgClassName="right-0 top-0"
        mainImage={Express}
        mainColor="#FF69B4"
        secondaryColor="#B5477F"
        showBtn={false}
        reverse={false}
      />

      <Service
        title="écologique"
        text="Soucieux de l’environnement ?Notre lavage écologique utilise des produits biodégradables et des méthodes respectueuses de la planète, sans sacrifier la qualité du résultat.Rapide, efficace et respectueux de l’environnement, ce service a tout pour plaire aux conducteurs éco-responsables."
        svg={RoseWaveReverse}
        svgClassName="left-0 top-0"
        mainImage={Ecologique}
        mainColor="#FF69B4"
        secondaryColor="#B5477F"
        showBtn={false}
        reverse={true}
      />

      <Service
        title="premium"
        text="Pour ceux qui veulent le summum de la propreté, notre service de lavage à la main est la solution idéale. Chaque recoin de votre voiture reçoit l’attention personnalisée de nos experts, pour un résultat sans égale. Et contrairement à ce que l’on pourrait penser, le luxe n’a pas à être hors de prix."
        svg={RoseWave}
        svgClassName="right-0 top-0"
        mainImage={WashPremium}
        mainColor="#FF69B4"
        secondaryColor="#B5477F"
        showBtn={false}
        reverse={false}
      />

      <Pricing />

      <Contact mainColor="#D65796" />
      <Footer bgColor="linear-gradient(180deg, #FF69B4 0%, #783E5B 100%)" logo={LogoWash} />
    </>
  )
}

export default Wash