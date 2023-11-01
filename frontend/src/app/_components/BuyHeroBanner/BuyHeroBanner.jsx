import Badge from "../Badge/Badge"
import Image from "next/image"
import BuyBannerCar from "@/app/_assets/BuyBannerCar.png"

const BuyHeroBanner = () => {
  return (
    <section className="pt-64 z-10 relative">
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <Badge className="mb-3 bg-[#F00]" />
                    <span className="font-extrabold">Votre garage tout-en-un</span>
                    <h1 className="text-[80px] leading-none font-extrabold mb-3">
                        Achat Dépôt Revente
                    </h1>
                    <div className="font-bold mb-5">
                        <p>Votre référence en achat et dépôt-vente automobile.</p>
                        <p>Spécialisés dans l’achat et le dépôt-vente, nous vous offrons des solutions avantageuses pour renouveler ou vendre votre véhicule sans contrainte financière.</p>
                    </div>
                    <button className="font-extrabold text-2xl text-white rounded-lg px-16 py-5" style={{background: "linear-gradient(90deg, #7B0000 0%, #F00 100%);"}}>
                        Nos Services
                    </button>
                </div>
                <div className="col-span-6 pl-7">
                    <Image src={BuyBannerCar} className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BuyHeroBanner