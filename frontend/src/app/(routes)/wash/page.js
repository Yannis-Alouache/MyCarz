import Image from "next/image"
import WashBannerBgCircle from "@/app/_assets/WashBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoWash from "@/app/_assets/LogoWash.png"
import WashHeroBanner from "@/app/_components/WashHeroBanner/WashHeroBanner"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"
import Footer from "@/app/_components/Footer/Footer"

const Wash = () => {
  return (
    <div className="relative">
        <Image src={WashBannerBgCircle} className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#FF69B4]" logo={LogoWash} />
        <WashHeroBanner />
        <ServicesCarousel tiretColor="linear-gradient(90deg, #FF69B4 0%, #BC4E85 100%)"/>
        <Footer bgColor="linear-gradient(180deg, #FF69B4 0%, #783E5B 100%)" logo={LogoWash} />
    </div>
  )
}

export default Wash