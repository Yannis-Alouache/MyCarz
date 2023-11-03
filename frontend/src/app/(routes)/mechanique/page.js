import Image from "next/image"

import MechanicBannerBgCircle from "@/app/_assets/MechanicBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoMechanic from "@/app/_assets/LogoMechanic.png"
import MechanicHeroBanner from "@/app/_components/MechanicHeroBanner/MechanicHeroBanner"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"

const Mechanique = () => {
  return (
    <div className="relative">
        <Image src={MechanicBannerBgCircle} className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#00B2FF]" logo={LogoMechanic} />
        <MechanicHeroBanner />
        <ServicesCarousel tiretColor="linear-gradient(90deg, #00B2FF 0%, #005B83 100%)"/>
    </div>
  )
}

export default Mechanique