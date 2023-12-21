import TikTok from "@/app/_assets/tiktok-logo.png";
import Instagram from "@/app/_assets/instagram-logo.png"
import Linkedin from "@/app/_assets/linkedin-logo.png"
import Facebook from "@/app/_assets/facebook-logo.png"
import Youtube from "@/app/_assets/youtube-logo.png"
import Snapchat from "@/app/_assets/snapchat-logo.png"
import Image from "next/image";

const SocialSidebar = () => {
  return (
    <>
        <div className="hidden lg:block fixed left-5 z-50" style={{top: "45vh"}}>
            <ul className="flex flex-col">
                <li className="mb-3">
                    <a href="https://www.facebook.com/mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Facebook} className="w-[25px] h-[25px]"/></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.instagram.com/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Instagram} className="w-[25px] h-[25px]" /></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.youtube.com/channel/UCHBrNQofk_t62s3-2hQe9fQ" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Youtube} className="w-[25px] h-full" /></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.linkedin.com/company/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Linkedin} className="w-[25px] h-[25px]" /></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.tiktok.com/@mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={TikTok} className="w-[25px] h-[25px]" /></a>
                </li>
                <li className="mb-3">
                    <a href="https://www.snapchat.com/add/mycarzfr" className=" transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Snapchat} className="w-[25px] h-[25px]" /></a>
                </li>
            </ul>
        </div>


        <div className="block lg:hidden fixed bottom-0 z-50">
            <ul className="flex">
                <li>
                    <a href="https://www.facebook.com/mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Facebook} className="w-[25px] h-[25px]"/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Instagram} className="w-[25px] h-[25px]" /></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCHBrNQofk_t62s3-2hQe9fQ" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Youtube} className="w-[25px] h-full" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Linkedin} className="w-[25px] h-[25px]" /></a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={TikTok} className="w-[25px] h-[25px]" /></a>
                </li>
                <li>
                    <a href="https://www.snapchat.com/add/mycarzfr" className=" transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Snapchat} className="w-[25px] h-[25px]" /></a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=15551234567" className=" transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Snapchat} className="w-[25px] h-[25px]" /></a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default SocialSidebar