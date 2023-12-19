import Image from "next/image"
import CoveringBannerCar from "@/app/_assets/CoveringBannerCar.png"
import Badge from "../Badge/Badge"

const CoveringHeroBanner = () => {
  return (
    <section className="pt-64 z-10 relative mb-32">
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <Badge className="mb-3 bg-gradient-to-b from-blue-400 to-pink-800" />
                    <span className="font-extrabold">Votre garage tout-en-un</span>
                    <h1 className="text-[80px] leading-none font-extrabold mb-3">
                        Covering/Detailing
                    </h1>
                    <div className="font-bold mb-5">
                        <p>Votre spécialiste en covering et detailing automobile.</p>
                        <p>De la personnalisation par covering à la pose de vitre teintée nous mettons en valeur votre véhicule pour un résultat unique.</p>
                    </div>
                    <button className="font-extrabold text-2xl text-white rounded-lg px-16 py-5"
                        style={{background: "linear-gradient(90deg, #5392D5 0%, #00618B 0.01%, #9E2442 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="col-span-6 pl-7">
                    <Image alt="" src={CoveringBannerCar} className="w-full bounce" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CoveringHeroBanner