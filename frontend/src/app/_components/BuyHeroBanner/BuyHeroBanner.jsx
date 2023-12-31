import Badge from "../Badge/Badge"
import Image from "next/image"
import BuyBannerCar from "@/app/_assets/BuyBannerCar.webp"
import Reveal from "../Reveal/Reveal"
import Link from "next/link"

const BuyHeroBanner = () => {
  return (
    <Reveal>
        <section className="lg:pt-64 pt-10 z-10 relative lg:mb-24 mb-5">
            <div className="lg:px-0 px-6 container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 col-span-12">
                        <Badge className="mb-3 bg-[#F00]" />
                        <span className="font-extrabold">Votre garage tout-en-un</span>
                        <h1 className="lg:text-[80px] text-5xl leading-none font-extrabold mb-3">
                            Achat Dépôt Revente
                        </h1>
                        <div className="font-bold mb-5">
                            <p>Votre référence en achat et dépôt-vente automobile.</p>
                            <p>Spécialisés dans l’achat et le dépôt-vente, nous vous offrons des solutions simples et rapides pour acheter ou vendre votre véhicule en étant accompagnés.</p>
                        </div>
                        <Link href="#services" className="block lg:w-fit w-full font-extrabold text-2xl text-white rounded-lg px-16 py-5" style={{background: "linear-gradient(90deg, #7B0000 0%, #F00 100%)"}}>
                            Nos Services
                        </Link>
                    </div>
                    <div className="lg:col-span-6 col-span-12 pl-7 lg:pt-0 pt-6">
                        <Image src={BuyBannerCar} alt="une voiture rouge avec des garnitures noires" className="w-full bounce" />
                    </div>
                </div>
            </div>
        </section>
    </Reveal>
  )
}

export default BuyHeroBanner