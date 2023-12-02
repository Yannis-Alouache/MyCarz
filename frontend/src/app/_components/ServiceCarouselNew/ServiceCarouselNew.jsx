import "./style.css";
import LogoHome from "./_assets/LogoHome.png";
import LogoBuy from "./_assets/LogoBuy.png";
import LogoCovering from "./_assets/LogoCovering.png";
import LogoMechanic from "./_assets/LogoMechanic.png";
import LogoService from "./_assets/LogoService.png";
import LogoWash from "./_assets/LogoWash.png";
import Image from "next/image";

const ServiceCarouselNew = () => {
  return (
    <>
        <div class="slider">
            <div class="slide-track">
                <div class="slide p-5">
                    <Image src={LogoHome} height={100} width={250} alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoBuy} height="100" width="250" alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoMechanic} height="100" width="250" alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoCovering} height="100" width="250" alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoWash} height="100" width="250" alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoService} height="100" width="250" alt="" />
                </div>


                <div class="slide p-5">
                    <Image src={LogoHome} height={100} width={250} alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoBuy} height="100" width="250" alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoMechanic} height="100" width="250" alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoCovering} height="100" width="250" alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoWash} height="100" width="250" alt="" />
                </div>
                <div class="slide p-5">
                    <Image src={LogoService} height="100" width="250" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceCarouselNew