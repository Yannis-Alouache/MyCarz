import Badge from "../Badge/Badge"
import Image from "next/image"

import MechanicBannerCar from "@/app/_assets/MechanicBannerCar.webp"
import Reveal from "../Reveal/Reveal"
import Link from "next/link"

const MechanicHeroBanner = () => {
  return (
    <Reveal>
        <section className="lg:pt-64 pt-10 z-10 relative lg:mb-32 mb-5">
            <div className="lg:px-0 px-6 container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 col-span-12 lg:pr-7 pr-0">
                        <Badge className="mb-3 bg-[#00B2FF]" />
                        <span className="font-extrabold">Votre garage tout-en-un</span>
                        <h1 className="lg:text-[80px] text-5xl leading-none font-extrabold mb-3">
                            Mécanique
                        </h1>
                        <div className="font-bold mb-5">
                            <p>Votre expert en mécanique automobile.</p>
                            <p>De la vidange au kit de distribution, nous vous proposons notre expertise pour assurer le bon fonctionnement de votre véhicule sans alourdir votre budget.</p>
                        </div>
                        <Link href="#services" className="flex justify-center lg:block font-extrabold lg:w-fit w-full text-2xl text-white rounded-lg px-16 py-5"
                            style={{background: "linear-gradient(90deg, #005B83 0%, #00618B 0.01%, #00B2FF 100%)"}}>
                            Nos Services
                        </Link>
                    </div>
                    <div className="lg:col-span-6 col-span-12 lg:pl-7 pl-0 pt-10 lg:pt-0">
                        <Image src={MechanicBannerCar} alt="une voiture bleue avec une ombre en dessous" className="w-full bounce" />
                    </div>
                </div>
            </div>
        </section>
    </Reveal>
  )
}

export default MechanicHeroBanner