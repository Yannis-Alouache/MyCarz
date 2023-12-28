import "./style.css";
import LogoHome from "./_assets/LogoHome.webp";
import LogoBuy from "./_assets/LogoBuy.webp";
import LogoCovering from "./_assets/LogoCovering.webp";
import LogoMechanic from "./_assets/LogoMechanic.webp";
import LogoService from "./_assets/LogoService.webp";
import LogoWash from "./_assets/LogoWash.webp";
import Image from "next/image";

const ServiceCarouselNew = () => {
  return (
    <>
        <div className="slider lg:block hidden">
            <div className="slide-track">
                <div className="slide p-5">
                    <Image src={LogoHome} height={100} width={250} alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoBuy} height="100" width="250" alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoMechanic} height="100" width="250" alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoCovering} height="100" width="250" alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoWash} height="100" width="250" alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoService} height="100" width="250" alt="" />
                </div>


                <div className="slide p-5">
                    <Image src={LogoHome} height={100} width={250} alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoBuy} height="100" width="250" alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoMechanic} height="100" width="250" alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoCovering} height="100" width="250" alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoWash} height="100" width="250" alt="" />
                </div>
                <div className="slide p-5">
                    <Image src={LogoService} height="100" width="250" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceCarouselNew