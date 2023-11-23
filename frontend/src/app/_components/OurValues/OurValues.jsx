import OurValuesImage from "@/app/_assets/ourValues.png"

import OurValuesDeco1 from "@/app/_assets/ourValuesDeco.png"
import OurValuesDeco2 from "@/app/_assets/ourValuesDeco2.png"

import Image from "next/image"

const OurValues = () => {
  return (
    <>
        <div className="bg-[#1a2541] flex relative mb-32">
            <div className="absolute right-0 bottom-0">
                <Image src={OurValuesDeco2} />
            </div>
            <div className="w-2/4">
                <Image src={OurValuesImage} className="w-full" />
            </div>
            <div className="w-2/4 pl-10 pr-32 text-white flex flex-col justify-center">
                <div className="flex gap-x-2 items-center">
                    <Image src={OurValuesDeco1} className="h-4" />
                    <span className="uppercase mb-1">nos valeurs</span>
                </div>
                <h2 className='text-3xl mb-10 font-bold'>Une qualité de service de garantie</h2>
                <p className="mb-6">Notre équipe d’experts vous garantit des services rapides et abordables. Avec nous, qualité rime avec efficacité et économies.</p>
                <p className="mb-6">Nous misons sur des pièces et produits de qualité, sélectionnés pour leur durabilité, sans faire grimper la facture. Rapidité, efficacité et économies sont notre engagement.</p>
                <p className="mb-6">Votre satisfaction est notre priorité numéro un. Nous nous engageons à dépasser vos attentes à chaque étape du processus, du premier contact à la livraison du véhicule.</p>
            </div>
        </div>
    </>
  )
}

export default OurValues