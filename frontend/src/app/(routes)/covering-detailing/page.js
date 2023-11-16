import Image from "next/image"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoCovering from "@/app/_assets/LogoCovering.png"
import CoveringBannerBgCircle from "@/app/_assets/CoveringBannerBgCircle.svg"
import CoveringHeroBanner from "@/app/_components/CoveringHeroBanner/CoveringHeroBanner"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"

const Covering = () => {
  return (
    <>
        <div className="relative">
            <Image src={CoveringBannerBgCircle} alt="" className="absolute right-0 z-0" />
            <Navbar contactBtnClass="border-[#5392D5]" logo={LogoCovering} />
            <CoveringHeroBanner />
            <ServicesCarousel tiretColor="linear-gradient(90deg, #5392D5 0%, #9E2442 100%)"/>
        </div>
    </>
  )
}

export default Covering