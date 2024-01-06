import OurMissionIllustration from "@/app/_assets/OurMission.webp"
import Check from "@/app/_assets/check.svg"
import Image from "next/image"

const OurMission = (props) => {

  let { mainColor } = props;

  return (
    <>
        <div className='container mx-auto pt-32 pb-32'>
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <Image alt="une personne conduisant une voiture décapotable" src={OurMissionIllustration} />
                </div>
                <div className="col-span-6 flex flex-col justify-center">
                    <span className={ "uppercase mb-2 font-extrabold tracking-widest " + mainColor }>Notre mission</span>
                    <h2 className="text-5xl font-black mb-2 text-gray-900">Plus qu'une simple prestation</h2>
                    <p className="text-gray-800">Nous visons l’excellence à chaque étape, pour que votre expérience soit aussi efficace et agréable que possible.</p>
                    
                    <div className="grid grid-cols-2 gap-y-2 mt-5 font-medium">
                        <div className="flex gap-x-6 items-center">
                            <Image alt="coche verte" src={Check} />
                            <span>Rapidité</span>
                        </div>
                        <div className="flex gap-x-6 items-center">
                            <Image alt="coche verte" src={Check} />
                            <span>Abordable</span>
                        </div>
                        <div className="flex gap-x-6 items-center">
                            <Image alt="coche verte" src={Check} />
                            <span>Transparence</span>
                        </div>
                        <div className="flex gap-x-6 items-center">
                            <Image alt="coche verte" src={Check} />
                            <span>Qualité</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default OurMission