import TikTok from "@/app/_assets/tiktok-logo.webp";
import Instagram from "@/app/_assets/instagram-logo.webp"
import Linkedin from "@/app/_assets/linkedin-logo.webp"
import Facebook from "@/app/_assets/facebook-logo.webp"
import Youtube from "@/app/_assets/youtube-logo.webp"
import Whatsapp from "@/app/_assets/whatsapp-logo.webp"
import Snapchat from "@/app/_assets/snapchat-logo.webp"
import Image from "next/image";

const SocialSidebar = () => {
  return (
    <>
        <div className="hidden lg:block fixed left-5 z-50" style={{top: "45vh"}}>
            <ul className="flex flex-col">
                <li className="mb-3">
                    <a href="https://www.facebook.com/mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Facebook" src={Facebook} className="w-[25px] h-[25px]"/></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.instagram.com/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Instagram" src={Instagram} className="w-[25px] h-[25px]" /></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.youtube.com/channel/UCHBrNQofk_t62s3-2hQe9fQ" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Youtube" src={Youtube} className="w-[25px] h-full" /></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.linkedin.com/company/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Linkedin" src={Linkedin} className="w-[25px] h-[25px]" /></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.tiktok.com/@mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Tiktok" src={TikTok} className="w-[25px] h-[25px]" /></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.snapchat.com/add/mycarzfr" className=" transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Snapchat" src={Snapchat} className="w-[25px] h-[25px]" /></a>
                </li>
            </ul>
        </div>


        <div className="block lg:hidden mx-auto fixed inset-x-0 bottom-2 z-50 px-5">
            <div className="bg-[#EEEEEE] border-2 shadow-md border-gray rounded-full py-2 px-4">
                <ul className="flex justify-between items-center">
                    <li>
                        <a href="https://www.facebook.com/mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Facebook" src={Facebook} className="w-[25px] h-[25px]"/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Instagram" src={Instagram} className="w-[25px] h-[25px]" /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCHBrNQofk_t62s3-2hQe9fQ" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Youtube" src={Youtube} className="w-[25px] h-full" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Linkedin" src={Linkedin} className="w-[25px] h-[25px]" /></a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Tiktok" src={TikTok} className="w-[25px] h-[25px]" /></a>
                    </li>
                    <li>
                        <a href="https://www.snapchat.com/add/mycarzfr" className=" transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Snapchat" src={Snapchat} className="w-[25px] h-[25px]" /></a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=+33620081250" className=" transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image alt="Logo Whatsapp" src={Whatsapp} className="w-[25px] h-[25px]" /></a>
                    </li>
                </ul>

            </div>
        </div>
    </>
  )
}

export default SocialSidebar