import BuyHeroBanner from "@/app/_components/BuyHeroBanner/BuyHeroBanner"
import Navbar from "@/app/_components/Navbar/Navbar"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"

import Image from "next/image"
import LogoBuy from "@/app/_assets/LogoBuy.png"
import BuyBannerBgCircle from "@/app/_assets/BuyBannerBgCircle.svg"

const AchatDepotRevente = () => {
  return (
    <div className="relative">
        <Image src={BuyBannerBgCircle} className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#F00]" logo={LogoBuy} />
        <BuyHeroBanner />
        <ServicesCarousel tiretColor="linear-gradient(90deg, #F00 0%, #7B0000 100%)" />
    </div>
  )
}

export default AchatDepotRevente