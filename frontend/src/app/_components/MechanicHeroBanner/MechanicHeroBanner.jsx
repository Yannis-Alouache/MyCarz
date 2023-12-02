import Badge from "../Badge/Badge"
import Image from "next/image"

import MechanicBannerCar from "@/app/_assets/MechanicBannerCar.png"

const MechanicHeroBanner = () => {
  return (
    <section className="pt-64 z-10 relative mb-32">
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-6 pr-7">
                    <Badge className="mb-3 bg-[#00B2FF]" />
                    <span className="font-extrabold">Votre garage tout-en-un</span>
                    <h1 className="text-[80px] leading-none font-extrabold mb-3">
                        Mécanique
                    </h1>
                    <div className="font-bold mb-5">
                        <p>Votre expert en mécanique automobile.</p>
                        <p>De la vidange à la réparation mineure, nous vous offrons un service spécialisé pour assurer le bon fonctionnement de votre véhicule sans alourdir votre budget.</p>
                    </div>
                    <button className="font-extrabold text-2xl text-white rounded-lg px-16 py-5"
                        style={{background: "linear-gradient(90deg, #005B83 0%, #00618B 0.01%, #00B2FF 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="col-span-6 pl-7">
                    <Image src={MechanicBannerCar} alt="" className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MechanicHeroBanner