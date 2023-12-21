import Image from "next/image"
import Badge from "../Badge/Badge"

import WashBannerCar from "@/app/_assets/WashBannerCar.png"


const WashHeroBanner = () => {
  return (
    <section className="lg:pt-64 pt-10 z-10 relative lg:mb-20 mb-5">
        <div className="lg:px-0 px-6 container mx-auto">
            <div className="grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12 lg:pr-7 pr-0">
                    <Badge className="mb-3 bg-[#FF69B4]" />
                    <span className="font-extrabold">Votre garage tout-en-un</span>
                    <h1 className="lg:text-[80px] text-5xl leading-none font-extrabold mb-3">
                        Lavage Auto
                    </h1>
                    <div className="font-bold mb-5">
                        <p>Un nettoyage express complet avant une sortie ou un grand nettoyage de printemps, nous sommes la pour vous satisfaire.</p>
                    </div>
                    <button className="lg:w-fit w-full font-extrabold text-2xl text-white rounded-lg px-16 py-5"
                        style={{background: "linear-gradient(90deg, #FF69B4 0%, #FF69B4 0.01%, #C14E88 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="pt-6 lg:col-span-6 col-span-12 lg:pl-7 pl-0">
                    <Image src={WashBannerCar} alt="" className="w-full bounce" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WashHeroBanner