import Image from "next/image"
import CoveringBannerCar from "@/app/_assets/CoveringBannerCar.png"
import Badge from "../Badge/Badge"
import Reveal from "../Reveal/Reveal"
import Link from "next/link"

const CoveringHeroBanner = () => {
  return (
    <Reveal>
        <section className="lg:pt-64 pt-10 z-10 relative mb-32">
            <div className="lg:px-0 px-6 container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 col-span-12">
                        <Badge className="mb-3 bg-gradient-to-b from-blue-400 to-pink-800" />
                        <span className="font-extrabold">Votre garage tout-en-un</span>
                        <h1 className="lg:text-[80px] text-5xl leading-none font-extrabold mb-3">
                            Covering/Detailing
                        </h1>
                        <div className="font-bold mb-5">
                            <p>Votre spécialiste en covering et detailing automobile.</p>
                            <p>De la personnalisation par covering à la pose de vitre teintée nous mettons en valeur votre véhicule pour un résultat unique.</p>
                        </div>
                        <Link href="#services" className="block lg:w-fit w-full font-extrabold text-2xl text-white rounded-lg px-16 py-5"
                            style={{background: "linear-gradient(90deg, #5392D5 0%, #00618B 0.01%, #9E2442 100%)"}}>
                            Nos Services
                        </Link>
                    </div>
                    <div className="lg:col-span-6 col-span-12 lg:pl-7 tl-0 pt-6 lg:pt-0">
                        <Image alt="" src={CoveringBannerCar} className="w-full bounce" />
                    </div>
                </div>
            </div>
        </section>
    </Reveal>
  )
}

export default CoveringHeroBanner