import Image from "next/image"
import Badge from "../Badge/Badge"

import ServiceBannerCar from "@/app/_assets/ServiceBannerCar.png"

const ServiceHeroBanner = () => {
  return (
    <section className="lg:pt-64 pt-10 z-10 relative mb-20">
        <div className="lg:px-0 px-6 container mx-auto">
            <div className="grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12">
                    <Badge className="mb-3 bg-[#757575]" />
                    <span className="font-extrabold">Votre garage tout-en-un</span>
                    <h1 className="lg:text-[80px] text-5xl leading-none font-extrabold mb-3">
                        Administratif
                    </h1>
                    <div className="font-bold mb-5">
                        <p>De la gestion de paperasse à l’assurance, en passant par les plaques d’immatriculation, nous
                            facilitons vos démarches tout en préservant votre sérénité financière.</p>
                    </div>
                    <button className="lg:w-fit w-full font-extrabold text-2xl text-white rounded-lg px-16 py-5"
                        style={{background: "linear-gradient(90deg, #757575 0%, #757575 0.01%, #464646 100%)"}}>
                        Nos Services
                    </button>
                </div>
                <div className="lg:col-span-6 col-span-12 pl-7 lg:pt-0 pt-6">
                    <Image src={ServiceBannerCar} alt="" className="w-full bounce" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceHeroBanner