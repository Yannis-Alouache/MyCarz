import { RiBankFill } from "react-icons/ri";
import { IoHeartCircle } from "react-icons/io5";
import Link from "next/link"
import Calendar from "@/app/_assets/calendar.png" 
import Image from "next/image"
import Reveal from "../Reveal/Reveal";


const CalendlyBanner = () => {
  return (
    <Reveal>
        <div className="lg:max-w-screen-xl px-5 mx-auto mb-20">
            <div className="bg-white lg:rounded-2xl lg:shadow-md">
                <div className="grid grid-cols-12 lg:gap-y-0 gap-y-5">
                    <div className="col-span-12 lg:col-span-8 lg:py-10 lg:px-12 flex flex-col justify-center">
                    <div>
                        <h3 className="my-8 lg:text-5xl text-3xl lg:text-start text-center font-bold">Réservez un créneau <span className="text-[#FF69B4]">en 2 min</span></h3>
                        <div className="lg:hidden flex col-span-12 lg:col-span-4 rounded-2xl p-16 items-center mb-4" style={{backgroundImage: "linear-gradient(209deg,#eefbfb 2%,#FF69B4 100%);"}}>
                            <Image src={Calendar} />
                        </div>
                        <div id="under-text" className="text-[#525a6e] lg:text-start text-center">
                            <p className="mb-3.5">Offrez à votre voiture le soin qu'elle mérite avec MyCarz. Réservez votre rendez-vous en ligne dès maintenant pour un lavage automobile simple, rapide et efficace. Faites briller votre véhicule en quelques clics avec MyCarz !</p>
                        </div>
                        <div className="mt-10 lg:mt-5 flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-5">
                            <Link href="https://calendly.com/mycarz/wash" className="bg-[#FF69B4] text-white rounded-full py-3 px-6 font-bold">Prendre un rendez-vous !</Link>
                        </div>
                    </div>
                    </div>
                    <div className="lg:flex hidden col-span-12 lg:col-span-4 rounded-r-2xl p-16 items-center" style={{backgroundColor: "#facde4"}}>
                    <Image src={Calendar} />
                    </div>
                </div>
            </div>
        </div>
    </Reveal>
  )
}

export default CalendlyBanner