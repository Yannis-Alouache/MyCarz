import "./style.css"

import Image from "next/image"
import Badge from "../Badge/Badge"

import HomeBannerCar from "@/app/_assets/HomeBannerCar.png"

const HomeHeroBanner = () => {
  return (
    <section className="pt-64 z-10 relative">
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <Badge className="mb-3 bg-[#0072FF]" />
                    <span className="font-extrabold">Votre garage tout-en-un</span>
                    <h1 className="text-[80px] leading-none font-extrabold mb-3">
                        Votre partenaire auto {" "}
                        <span
                            className="clip-text"
                        >
                            tout-en-un
                        </span>
                    </h1>
                    <div className="font-bold mb-5">
                        <p>Votre solution rapide et abordable pour tous vos besoins automobiles.</p>
                        <p>De l’entretien de routine au detailing, nous proposons une gamme de services express pour prendre soin de votre véhicule sans vider votre portefeuille.</p>
                    </div>
                    <button className="font-extrabold text-2xl text-white rounded-lg px-16 py-5" style={{background: "linear-gradient(90deg, #00397B 0%, #0075FF 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="col-span-6 pl-7">
                    <Image src={HomeBannerCar} alt="" className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHeroBanner