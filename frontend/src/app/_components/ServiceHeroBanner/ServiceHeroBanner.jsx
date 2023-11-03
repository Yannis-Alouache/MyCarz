import Image from "next/image"
import Badge from "../Badge/Badge"

import ServiceBannerCar from "@/app/_assets/ServiceBannerCar.png"

const ServiceHeroBanner = () => {
  return (
    <section className="pt-64 z-10 relative">
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <Badge className="mb-3 bg-[#757575]" />
                    <span className="font-extrabold">Votre garage tout-en-un</span>
                    <h1 className="text-[80px] leading-none font-extrabold mb-3">
                        Administratif
                    </h1>
                    <div className="font-bold mb-5">
                        <p>De la gestion de paperasse à l’assurance, en passant par les plaques d’immatriculation, nous
                            facilitons vos démarches tout en préservant votre sérénité financière.</p>
                    </div>
                    <button className="font-extrabold text-2xl text-white rounded-lg px-16 py-5"
                        style={{background: "linear-gradient(90deg, #757575 0%, #757575 0.01%, #464646 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="col-span-6 pl-7">
                    <Image src={ServiceBannerCar} className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceHeroBanner