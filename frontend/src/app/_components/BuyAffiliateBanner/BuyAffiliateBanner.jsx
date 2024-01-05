import { RiBankFill } from "react-icons/ri";
import { IoHeartCircle } from "react-icons/io5";
import Link from "next/link"
import Handshake from "@/app/_assets/handshake.png" 
import Image from "next/image"
import Reveal from "../Reveal/Reveal";

const BuyAffiliateBanner = () => {
  return (
    <Reveal>
        <div className="lg:max-w-screen-xl px-5 mx-auto mb-28">
            <div className="bg-white lg:rounded-2xl lg:shadow-md">
                <div className="grid grid-cols-12 lg:gap-y-0 gap-y-5">
                    <div className="col-span-12 lg:col-span-8 lg:py-10 lg:px-12 flex flex-col justify-center">
                    <div>
                        <h3 className="my-8 lg:text-5xl text-3xl lg:text-start text-center font-bold">Estimez et vendez votre véhicule <span className="text-[#F00]">en ligne</span></h3>
                        <div className="lg:hidden flex col-span-12 lg:col-span-4 rounded-2xl p-16 items-center mb-4" style={{backgroundImage: "linear-gradient(209deg,#F00 2%,#FF69B4 100%);"}}>
                            <Image src={Handshake} />
                        </div>
                        <div id="under-text" className="text-[#525a6e] lg:text-start text-center">
                            <p className="mb-3.5">Vendez votre voiture en toute simplicité avec MyCarz. Remplissez notre formulaire en ligne dès maintenant et transformez votre expérience de vente automobile.</p>
                        </div>
                        <div className="mt-10 lg:mt-5 flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-5">
                            <Link href="https://www.awin1.com/cread.php?awinmid=7360&awinaffid=1525269" className="bg-[#f74444] text-white rounded-full py-3 px-6 font-bold">J'accède au formulaire !</Link>
                        </div>
                    </div>
                    </div>
                    <div className="lg:flex hidden col-span-12 lg:col-span-4 rounded-r-2xl p-16 items-center" style={{backgroundColor: "#ff4747"}}>
                    <Image src={Handshake} />
                    </div>
                </div>
            </div>
        </div>
    </Reveal>
  )
}

export default BuyAffiliateBanner