import "./style.css";
import LogoHome from "@/app/_assets/LogoHome.png";
import LogoBuy from "@/app/_assets/LogoBuy.png";
import LogoCovering from "@/app/_assets/LogoCovering.png";
import LogoMechanic from "@/app/_assets/LogoMechanic.png";
import LogoService from "@/app/_assets/LogoService.png";
import LogoWash from "@/app/_assets/LogoWash.png";
import Image from "next/image";

const ServiceCarouselNew = () => {
  return (
    <>
        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                    <Image src={LogoHome} height={100} width={250} alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoBuy} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoMechanic} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoCovering} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoWash} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoService} height="100" width="250" alt="" />
                </div>


                <div class="slide">
                    <Image src={LogoHome} height={100} width={250} alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoBuy} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoMechanic} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoCovering} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoWash} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <Image src={LogoService} height="100" width="250" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceCarouselNew