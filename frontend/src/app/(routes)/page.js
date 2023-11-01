import Image from "next/image"

import HomeBannerBgCircle from "@/app/_assets/HomeBannerBgCircle.svg"

import Navbar from "../_components/Navbar/Navbar"
import ServicesCarousel from "../_components/ServicesCarousel/ServicesCarousel"
import HomeHeroBanner from "../_components/HomeHeroBanner/HomeHeroBanner"

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image src={HomeBannerBgCircle} className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#0072FF]" />
        <HomeHeroBanner />
        <ServicesCarousel tiretColor="linear-gradient(90deg, #0075FF 0%, #00397B 100%)"/>
      </div>
    </>
  )
}
