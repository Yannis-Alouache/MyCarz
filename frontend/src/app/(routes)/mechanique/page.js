import Image from "next/image"

import MechanicBannerBgCircle from "@/app/_assets/MechanicBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoMechanic from "@/app/_assets/LogoMechanic.png"
import MechanicHeroBanner from "@/app/_components/MechanicHeroBanner/MechanicHeroBanner"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/Contact/Contact"
import Service from "@/app/_components/Service/Service"
import LightBlueWave from "@/app/_assets/LightBlueWave.svg"
import Filter from "@/app/_assets/filtres.jpg"

const Mechanique = () => {
  return (
    <>
      <div className="relative">
        <Image src={MechanicBannerBgCircle} alt="" className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#00B2FF]" logo={LogoMechanic} />
      </div>
      <MechanicHeroBanner />
      <ServicesCarousel tiretColor="linear-gradient(90deg, #00B2FF 0%, #005B83 100%)"/>

      <Service
        title="filtres"
        text="Ne sous-estimez jamais l’importance de filtres propres pour la performance et la longévité. Des filtres en bon état garantissent une meilleure qualité de l’air dans l’habitacle, protègent votre moteur des impuretés et optimisent la consommation de carburant. Nos interventions sont rapides et abordables."
        svg={LightBlueWave}
        svgClassName="right-0 top-0"
        mainImage={Filter}
        mainColor="#FF0000"
        secondaryColor="#7B0000"
        showBtn={false}
        reverse={false}
      />

      <Contact mainColor="#0088C3" />
      <Footer bgColor="linear-gradient(180deg, #00B2FF 0%, #003248 100%)" logo={LogoMechanic} />
    </>
  )
}

export default Mechanique