import Image from 'next/image'
import LogoHome from "@/app/_assets/LogoHome.png";
import LogoBuy from "@/app/_assets/LogoBuy.png";
import LogoCovering from "@/app/_assets/LogoCovering.png";
import LogoMechanic from "@/app/_assets/LogoMechanic.png";
import LogoService from "@/app/_assets/LogoService.png";
import LogoWash from "@/app/_assets/LogoWash.png";


const ServiceCarouselWithLogo = (props) => {
  
  let { tiretColor } = props;

  return (
    <>
    <section className="pt-40">
        <div className="container mx-auto relative z-10">
            <div className='flex justify-evenly items-center'>
                <Image src={LogoHome} className='w-[200px]' alt='mycarz logo accueil' />
                <div className='w-14 h-2' style={{background: tiretColor}}></div>
                <Image src={LogoBuy} className='w-[200px]' alt='mycarz logo accueil' />
                <div className='w-14 h-2' style={{background: tiretColor}}></div>
                <Image src={LogoMechanic} className='w-[200px]' alt='mycarz logo accueil' />
            </div>
        </div>
    </section>
    </>
  )
}

export default ServiceCarouselWithLogo