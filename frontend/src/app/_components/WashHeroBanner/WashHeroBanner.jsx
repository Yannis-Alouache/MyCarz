import Image from "next/image"
import Badge from "../Badge/Badge"

import WashBannerCar from "@/app/_assets/WashBannerCar.png"


const WashHeroBanner = () => {
  return (
    <section className="pt-64 z-10 relative mb-20">
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-6 pr-7">
                    <Badge className="mb-3 bg-[#FF69B4]" />
                    <span className="font-extrabold">Votre garage tout-en-un</span>
                    <h1 className="text-[80px] leading-none font-extrabold mb-3">
                        Lavage Auto
                    </h1>
                    <div className="font-bold mb-5">
                        <p>Un nettoyage express complet avant une sortie ou un grand nettoyage de printemps, nous sommes la pour vous satisfaire.</p>
                    </div>
                    <button className="font-extrabold text-2xl text-white rounded-lg px-16 py-5"
                        style={{background: "linear-gradient(90deg, #FF69B4 0%, #FF69B4 0.01%, #C14E88 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="col-span-6 pl-7">
                    <Image src={WashBannerCar} alt="" className="w-full bounce" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WashHeroBanner