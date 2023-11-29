import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import TikTok from "@/app/_assets/tiktok-logo.png";
import Instagram from "@/app/_assets/instagram-logo.png"
import Snapchat from "@/app/_assets/snapchat-logo.png"
import Image from "next/image";

const SocialSidebar = () => {
  return (
    <div className="fixed left-5 z-50" style={{top: "45vh"}}>
        <ul className="flex flex-col">
            <li className="mb-3">
                <a href="https://www.facebook.com/mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaFacebookSquare color="#4267B2" size={25} /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.instagram.com/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Instagram} className="w-[25px] h-[25px]" /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.youtube.com/channel/UCHBrNQofk_t62s3-2hQe9fQ" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaYoutube color="#FF0000" size={25} /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.linkedin.com/company/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaLinkedin color="#0e76a8" size={25} /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.tiktok.com/@mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={TikTok} className="w-[25px] h-[25px]" /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.snapchat.com/add/mycarzfr" className=" transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><Image src={Snapchat} className="w-[25px] h-[25px]" /></a>
            </li>
        </ul>
    </div>
  )
}

export default SocialSidebar