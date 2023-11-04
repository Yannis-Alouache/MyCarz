import Image from "next/image"

import ServiceBannerBgCircle from "@/app/_assets/ServiceBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoService from "@/app/_assets/LogoService.png"
import ServiceHeroBanner from "@/app/_components/ServiceHeroBanner/ServiceHeroBanner"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"
import Footer from "@/app/_components/Footer/Footer"

const Service = () => {
  return (
    <>
        <div className='relative'>
            <Image src={ServiceBannerBgCircle} className="absolute right-0 z-0" />
            <Navbar contactBtnClass="border-[#757575]" logo={LogoService} />
            <ServiceHeroBanner />
            <ServicesCarousel tiretColor="linear-gradient(90deg, #757575 0%, #393939 100%)"/>
            <Footer bgColor="linear-gradient(180deg, #757575 0%, #3E3E3E 100%)" logo={LogoService} />
        </div>
    </>
  )
}

export default Service