import BuyHeroBanner from "@/app/_components/BuyHeroBanner/BuyHeroBanner"
import Navbar from "@/app/_components/Navbar/Navbar"
import RedWave from "@/app/_assets/RedWave.svg"
import RedWaveReverse from "@/app/_assets/RedWaveReverse.svg"
import FastBuy from "@/app/_assets/FastBuy.png"
import BuyService from '@/app/_assets/BuyService.png';
import Image from "next/image"
import LogoBuy from "@/app/_assets/LogoBuy.png"
import BuyBannerBgCircle from "@/app/_assets/BuyBannerBgCircle.svg"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import Service from "@/app/_components/Service/Service"
import OurValues from "@/app/_components/OurValues/OurValues"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"

const AchatDepotRevente = () => {
  const pricingInfos = [
    {
      title: "Dépôt-Vente",
      catchPhrase: "A partir de",
      price: "10% de la valeur du véhicule",
      services : [
        "Lavage",
        "Entretien",
        "Photo",
        "Mise en ligne",
        "Démarche administratif"
      ],
      noEuroSign: true
    },
    {
      title: "Achat ou Vente",
      price: "Sur devis",
      services : [],
      noEuroSign: true
    }
  ]

  return (
    <>
      <div className="relative lg:pb-32 pb-10">
        <Image src={BuyBannerBgCircle} alt="" className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#F00]" logo={LogoBuy} />
        <BuyHeroBanner />
        {/* <ServiceCarouselNew /> */}
      </div>

      <Service
        title="achat"
        text="Vous souhaitez acheter un véhicule en toute sérénité ? Notre équipe vous propose à la vente des arrivage réguliers de véhicule, entretenus et sous garantie."
        svg={RedWave}
        svgClassName="right-0 top-0"
        mainImage={FastBuy}
        mainColor="#FF0000"
        secondaryColor="#7B0000"
        showBtn={false}
        reverse={false}
      />

      <Service
        title="dépôt"
        link="achat-depot-revente"
        text="Vous souhaitez vendre votre voiture sans les complications habituelles ? Notre service dédié est la solution. Recevez rapidement une évaluation et une offre compétitive en quelques minutes. Un service rapide, efficace et fiable pour ceux qui cherchent à vendre sans tracas."
        svg={RedWaveReverse}
        svgClassName="left-0 bottom-0"
        mainImage={BuyService}
        mainColor="#FF0000"
        secondaryColor="#7B0000"
        showBtn={false}
        reverse={true}
      />

      <Service
        title="dépôt-vente"
        link="achat-depot-revente"
        text="Vous avez un véhicule à vendre et vous souhaitez déléguer cette mission ? Lavage, entretien, photo, mise en ligne sur les sites d’annonces et carte grise, MyCarz s’occupe de tout."
        svg={RedWave}
        svgClassName="right-0 bottom-0"
        mainImage={BuyService}
        mainColor="#FF0000"
        secondaryColor="#7B0000"
        showBtn={false}
        reverse={false}
      />

      <OurValues mainColor="text-red-800" />

      <PricingWrapper pricingInfos={pricingInfos} mainColor={"#FF0000"} />

      <Contact mainColor="#620000" />
      <Footer bgColor="linear-gradient(180deg, #F00 0%, #7D0000 100%)" logo={LogoBuy} />
    </>
  )
}

export default AchatDepotRevente