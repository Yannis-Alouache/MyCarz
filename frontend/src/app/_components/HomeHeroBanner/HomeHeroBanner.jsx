import "./style.css"

import Image from "next/image"
import Badge from "../Badge/Badge"

import HomeBannerCar from "@/app/_assets/HomeBannerCar.png"

const HomeHeroBanner = () => {
  return (
    <section className="lg:pt-48 pt-10 z-10 relative lg:mb-24 mb-5">
        <div className="lg:px-0 px-6 container mx-auto">
            <div className="grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12">
                    <Badge className="mb-3 bg-[#0072FF]" />
                    <span className="font-extrabold">Votre garage automobile à Roubaix</span>
                    <h1 className="lg:text-[70px] text-5xl leading-none font-extrabold mb-3">
                        Le meilleurs rapport qualité-prix pour vos besoin {" "}
                        <span
                            className="lg:clip-text"
                        >
                            automobiles.
                        </span>
                    </h1>
                    <div className="font-bold mb-5">
                        <p>Vous souhaitez réaliser une réparation, faire nettoyer votre véhicule, effectuer les démarches pour une carte grise ou poser des vitres teintés, nous proposons une gamme de services complète pour prendre soin de votre véhicule sans vider votre portefeuille.</p>
                    </div>
                    <button className="w-full font-extrabold text-2xl text-white rounded-lg px-16 py-5 lg:w-fit" style={{background: "linear-gradient(90deg, #00397B 0%, #0075FF 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="pl-0 pt-6 lg:col-span-6 col-span-12 flex items-center lg:pl-7 lg:pt-0">
                    <Image src={HomeBannerCar} alt="" className="w-full bounce" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHeroBanner