import OurValuesImage from "@/app/_assets/ourValues.webp"
import Check from "@/app/_assets/check.svg"

import OurValuesDeco1 from "@/app/_assets/ourValuesDeco.webp"
import OurValuesDeco2 from "@/app/_assets/ourValuesDeco2.webp"

import Image from "next/image"
import Reveal from "../Reveal/Reveal"

const OurValues = () => {
  return (
    <>
        <Reveal>
            <div className="bg-[#f0f0f091] py-16 mb-20 mt-12">
                <div className="container mx-auto">
                    <div className="flex relative rounded-2xl bg-white shadow-md">
                        <div className="absolute right-0 bottom-0">
                            <Image alt="une ligne rouge, blanche et noire" src={OurValuesDeco2} />
                        </div>
                        <div className="lg:w-2/4 hidden lg:block">
                            <Image alt="une personne en salopette qui regarde une voiture" src={OurValuesImage} className="w-full rounded-l-2xl" />
                        </div>
                        <div className="lg:w-2/4 w-full pl-10 lg:pr-32 pr-10 py-10 text-gray-800 flex flex-col justify-center">
                            <div className="flex gap-x-2 items-center lg:justify-start justify-center">
                                <Image alt="une ligne rouge, blanche et noire" src={OurValuesDeco1} className="h-4" />
                                <span className="uppercase mb-1">nos valeurs</span>
                            </div>
                            <h2 className='lg:text-3xl text-2xl mb-10 font-bold lg:text-start text-center'>Le meilleurs rapport qualité prix</h2>
                            <div className="text-center lg:text-start">
                                <p className="mb-6">Notre équipe d’experts vous garantit des services de qualité à des prix abordables. Chez Mycarz, vous trouverez le meilleur rapport qualité-prix pour vos prestations.</p>
                                <p className="mb-6">Nous misons sur des pièces et produits reconnus, sélectionnés pour leur durabilité, sans faire grimper la facture. Rapidité, efficacité et économies sont notre engagement.</p>
                                <p className="mb-6">Votre satisfaction est notre priorité numéro un. Nous nous engageons à dépasser vos attentes à chaque étape du processus, du premier contact à la restitution du véhicule.</p>
                            </div>

                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-3 mt-5 lg:gap-x-0 gap-x-2 font-medium">
                                <div className="flex lg:gap-x-6 gap-x-3 items-center justify-center lg:justify-start">
                                    <Image alt="coche verte" src={Check} />
                                    <span>Rapidité</span>
                                </div>
                                <div className="flex lg:gap-x-6 gap-x-3 items-center justify-center lg:justify-start">
                                    <Image alt="coche verte" src={Check} />
                                    <span>Abordable</span>
                                </div>
                                <div className="flex lg:gap-x-6 gap-x-3 items-center justify-center lg:justify-start">
                                    <Image alt="coche verte" src={Check} />
                                    <span>Transparence</span>
                                </div>
                                <div className="flex lg:gap-x-6 gap-x-3 items-center justify-center lg:justify-start">
                                    <Image alt="coche verte" src={Check} />
                                    <span>Qualité</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    </>
  )
}

export default OurValues