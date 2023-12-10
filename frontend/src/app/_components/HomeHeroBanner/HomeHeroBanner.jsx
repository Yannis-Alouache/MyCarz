import "./style.css"

import Image from "next/image"
import Badge from "../Badge/Badge"

import HomeBannerCar from "@/app/_assets/HomeBannerCar.png"

const HomeHeroBanner = () => {
  return (
    <section className="pt-48 z-10 relative mb-24">
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <Badge className="mb-3 bg-[#0072FF]" />
                    <span className="font-extrabold">Votre garage automobile à Roubaix</span>
                    <h1 className="text-[70px] leading-none font-extrabold mb-3">
                        Le meilleurs rapport qualité-prix pour tout vos besoin {" "}
                        <span
                            className="clip-text"
                        >
                            automobiles.
                        </span>
                    </h1>
                    <div className="font-bold mb-5">
                        <p>Vous souhaitez réaliser une réparation,  faire nettoyer votre véhicule, effectuer les démarches pour une carte grise ou poser des vitres teintés, nous proposons une gamme de services complète pour prendre soin de votre véhicule sans vider votre portefeuille.</p>
                    </div>
                    <button className="font-extrabold text-2xl text-white rounded-lg px-16 py-5" style={{background: "linear-gradient(90deg, #00397B 0%, #0075FF 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="col-span-6 pl-7 flex items-center">
                    <Image src={HomeBannerCar} alt="" className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHeroBanner