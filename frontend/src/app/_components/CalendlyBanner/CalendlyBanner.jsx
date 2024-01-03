import { RiBankFill } from "react-icons/ri";
import { IoHeartCircle } from "react-icons/io5";
import Link from "next/link"
import PlaquesCta from "@/app/_assets/plaques.webp" 
import Image from "next/image"
import Reveal from "../Reveal/Reveal";


const CalendlyBanner = () => {
  return (
    <Reveal>
        <div className="lg:max-w-screen-xl px-5 mx-auto">
            <div className="bg-white lg:rounded-2xl lg:shadow-md">
                <div className="grid grid-cols-12 lg:gap-y-0 gap-y-5">
                    <div className="col-span-12 lg:col-span-8 lg:py-10 lg:px-12">
                    <div>
                        <div className="flex gap-x-5 text-[#646d8c]">
                        <p className="flex lg:flex-row lg:text-base text-sm flex-col lg:text-start text-center gap-x-1.5 items-center">
                            <RiBankFill size={22} />
                            <span>Habilitation Ministère de l'Intérieur</span>
                        </p>
                        <p className="flex lg:flex-row lg:text-base text-sm flex-col lg:text-start text-center gap-x-1.5 items-center">
                            <IoHeartCircle size={22} color="#ff5f7e" />
                            <span>97% de satisfaction client</span>
                        </p>
                        </div>

                        <h3 className="my-8 lg:text-5xl text-3xl lg:text-start text-center font-bold">Faites votre carte grise et vos plaques <span className="text-[#1069ef]">en 2 min</span></h3>
                        <div className="lg:hidden flex col-span-12 lg:col-span-4 rounded-2xl p-16 items-center mb-4" style={{backgroundImage: "linear-gradient(209deg,#eefbfb 2%,#cfe1fc 100%);"}}>
                        <Image src={PlaquesCta} />
                        </div>
                        <div id="under-text" className="text-[#525a6e] lg:text-start text-center">
                        <p className="mb-3.5">1ère plateforme d'immatriculation depuis 2009</p>
                        <p>Nous avons reçu une double habilitation de l'Etat 🇫🇷 pour vous proposer un service d'immatriculation simplifié en ligne.</p>
                        </div>
                        <div className="mt-10 flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-5">
                        <Link href="https://www.eplaque.fr/?referer=fTIkE6kVuG49" className="bg-white text-[#1069ef] border border-[#1069ef] rounded-full py-3 px-6 font-bold">Commander plaques</Link>
                        <Link href="https://www.eplaque.fr/?referer=fTIkE6kVuG49" className="bg-[#1069ef] text-white rounded-full py-3 px-6 font-bold">Commander carte grise</Link>
                        </div>
                    </div>
                    </div>
                    <div className="lg:flex hidden col-span-12 lg:col-span-4 rounded-r-2xl p-16 items-center" style={{backgroundImage: "linear-gradient(209deg,#eefbfb 2%,#cfe1fc 100%);"}}>
                    <Image src={PlaquesCta} />
                    </div>
                </div>
            </div>
        </div>
    </Reveal>
  )
}

export default CalendlyBanner