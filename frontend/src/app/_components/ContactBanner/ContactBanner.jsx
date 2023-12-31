import ContactImage from "@/app/_assets/contactImage.webp"
import Deco from "@/app/_assets/ourValuesDeco2.webp"
import Image from "next/image"

const ContactBanner = () => {
  return (
    <div className='h-[720px] relative flex items-center justify-center'>
        <div style={{backgroundImage: "url(" + ContactImage.src + ")"}}
            className="w-full bg-top bg-cover brightness-50 text-white h-full absolute top-0 right-0 z-0">
        </div>
        <div className="bg-[#1a2541] absolute top-0 left-0 w-full h-full opacity-70"></div>
        <Image alt="une ligne rouge, blanche et noire" src={Deco} className="absolute top-0 left-0 rotate-180" />
        <Image alt="une ligne rouge, blanche et noire" src={Deco} className="absolute bottom-0 right-0 lg:w-[300px]" />
        <div className='z-10 text-white relative'>
            <h1 className='text-5xl font-bold'>Restons en contact</h1>
        </div>
    </div>
  )
}

export default ContactBanner