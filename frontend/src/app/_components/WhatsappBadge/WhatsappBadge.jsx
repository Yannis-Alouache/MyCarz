import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";


const WhatsappBadge = () => {
  return (
    <a 
        data-action="open" data-phone="33620081250"
        data-message="Bonjour&nbsp;! J'ai une question concernant vos prestations avec MyCarz :"
        role="button" tabindex="0" target="_blank" href='tel:33620081250'
        className='flex items-center gap-x-2 bg-[#25d366] text-white py-2 px-5 font-bold rounded-full fixed right-3 bottom-3 z-10'>
            <FaWhatsapp size={25}/>
            <span>Besoin d'informations ?</span>
    </a>
  )
}

export default WhatsappBadge