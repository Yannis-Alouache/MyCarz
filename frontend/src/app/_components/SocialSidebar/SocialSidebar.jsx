import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed left-5 z-50" style={{top: "45vh"}}>
        <ul className="flex flex-col">
            <li className="mb-3">
                <a href="https://www.facebook.com/mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaFacebookF size={25} /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.instagram.com/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaInstagram size={25} /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.youtube.com/channel/UCHBrNQofk_t62s3-2hQe9fQ" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaYoutube size={25} /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.linkedin.com/company/mycarzfr/" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaLinkedin size={25} /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.tiktok.com/@mycarzfr" className="transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaTiktok size={25} /></a>
            </li>
            <li className="mb-3">
                <a href="https://www.snapchat.com/add/mycarzfr" className=" transition-all ease-in-out duration-300 hover:opacity-50" target="_blank"><FaSnapchatGhost size={25} /></a>
            </li>
        </ul>
    </div>
  )
}

export default SocialSidebar