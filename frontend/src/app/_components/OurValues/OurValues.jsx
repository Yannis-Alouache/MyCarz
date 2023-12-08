import OurValuesImage from "@/app/_assets/ourValues.png"

import OurValuesDeco1 from "@/app/_assets/ourValuesDeco.png"
import OurValuesDeco2 from "@/app/_assets/ourValuesDeco2.png"

import Image from "next/image"

const OurValues = () => {
  return (
    <>
        <div className="bg-[#f0f0f091] py-16 mb-20 mt-12">
            <div className="container mx-auto">
                <div className=" flex relative rounded-2xl bg-white shadow-md">
                    <div className="absolute right-0 bottom-0">
                        <Image src={OurValuesDeco2} />
                    </div>
                    <div className="w-2/4">
                        <Image src={OurValuesImage} className="w-full rounded-l-2xl" />
                    </div>
                    <div className="w-2/4 pl-10 pr-32 text-gray-800 flex flex-col justify-center">
                        <div className="flex gap-x-2 items-center">
                            <Image src={OurValuesDeco1} className="h-4" />
                            <span className="uppercase mb-1">nos valeurs</span>
                        </div>
                        <h2 className='text-3xl mb-10 font-bold'>Le meilleurs rapport qualité prix</h2>
                        <p className="mb-6">Notre équipe d’experts vous garantit des services de qualité à des prix abordables. Chez Mycarz, vous trouverez le meilleur rapport qualité prix pur vos prestations.</p>
                        <p className="mb-6">Nous misons sur des pièces et produits reconnus, sélectionnés pour leur durabilité, sans faire grimper la facture. Rapidité, efficacité et économies sont notre engagement.</p>
                        <p className="mb-6">Votre satisfaction est notre priorité numéro un. Nous nous engageons à dépasser vos attentes à chaque étape du processus, du premier contact à la restitution du véhicule.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurValues