import BuyHeroBanner from "@/app/_components/BuyHeroBanner/BuyHeroBanner"
import Navbar from "@/app/_components/Navbar/Navbar"
import ServicesCarousel from "@/app/_components/ServicesCarousel/ServicesCarousel"
import RedWave from "@/app/_assets/RedWave.svg"
import RedWaveReverse from "@/app/_assets/RedWaveReverse.svg"
import FastBuy from "@/app/_assets/FastBuy.png"
import BuyService from '@/app/_assets/BuyService.png';
import Image from "next/image"
import LogoBuy from "@/app/_assets/LogoBuy.png"
import BuyBannerBgCircle from "@/app/_assets/BuyBannerBgCircle.svg"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/Contact/Contact"
import OurMission from "@/app/_components/OurMission/OurMission"
import Service from "@/app/_components/Service/Service"

const AchatDepotRevente = () => {
  return (
    <>
      <div className="relative">
        <Image src={BuyBannerBgCircle} className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#F00]" logo={LogoBuy} />
        <BuyHeroBanner />
        <ServicesCarousel tiretColor="linear-gradient(90deg, #F00 0%, #7B0000 100%)" />
      </div>

        <Service
          title="achat rapide"
          link="achat-depot-revente"
          text="Vous souhaitez vendre votre voiture sans les complications habituelles ?  Notre service dédié d’Achat Rapide est la solution. Recevez rapidement une évaluation en temps réel et une offre compétitive en quelques minutes. Un service rapide, efficace et fiable pour ceux qui cherchent à vendre sans tracas."
          svg={RedWave}
          svgClassName="right-0 top-0"
          mainImage={FastBuy}
          mainColor="#FF0000"
          secondaryColor="#7B0000"
          reverse={false}
        />

        <Service
          title="dépôt sécurisé"
          link="achat-depot-revente"
          text="Vous souhaitez vendre votre voiture sans les complications habituelles ?  Notre service dédié d’Achat Rapide est la solution. Recevez rapidement une évaluation en temps réel et une offre compétitive en quelques minutes. Un service rapide, efficace et fiable pour ceux qui cherchent à vendre sans tracas."
          svg={RedWaveReverse}
          svgClassName="left-0 bottom-0"
          mainImage={BuyService}
          mainColor="#FF0000"
          secondaryColor="#7B0000"
          reverse={true}
        />

        <Service
          title="vente assistée"
          link="achat-depot-revente"
          text="Vous souhaitez vendre votre voiture sans les complications habituelles ?  Notre service dédié d’Achat Rapide est la solution. Recevez rapidement une évaluation en temps réel et une offre compétitive en quelques minutes. Un service rapide, efficace et fiable pour ceux qui cherchent à vendre sans tracas."
          svg={RedWave}
          svgClassName="right-0 bottom-0"
          mainImage={BuyService}
          mainColor="#FF0000"
          secondaryColor="#7B0000"
          reverse={false}
        />

        <OurMission />
        <Contact mainColor="#620000" />
        <Footer bgColor="linear-gradient(180deg, #F00 0%, #7D0000 100%)" logo={LogoBuy} />
    </>
  )
}

export default AchatDepotRevente