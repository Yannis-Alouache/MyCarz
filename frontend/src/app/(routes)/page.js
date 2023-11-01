import Image from "next/image"

import HomeBannerBgCircle from "@/app/_assets/HomeBannerBgCircle.svg"

import HeroBanner from "../_components/HeroBanner/HeroBanner"
import Navbar from "../_components/Navbar/Navbar"
import ServicesCarousel from "../_components/ServicesCarousel/ServicesCarousel"

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image src={HomeBannerBgCircle} className="absolute right-0 z-0" />
        <Navbar />
        <HeroBanner />
        <ServicesCarousel />
      </div>
    </>
  )
}
