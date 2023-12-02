import Image from "next/image"

import MechanicBannerBgCircle from "@/app/_assets/MechanicBannerBgCircle.svg"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoMechanic from "@/app/_assets/LogoMechanic.png"
import MechanicHeroBanner from "@/app/_components/MechanicHeroBanner/MechanicHeroBanner"
import Footer from "@/app/_components/Footer/Footer"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import Service from "@/app/_components/Service/Service"
import LightBlueWave from "@/app/_assets/LightBlueWave.svg"
import LightBlueWaveReverse from "@/app/_assets/LightBlueWaveReverse.svg"

import Filter from "@/app/_assets/filtres.jpg"
import Disquettes from "@/app/_assets/disquettes.jpg"
import EntretienMoteur from "@/app/_assets/entretienMoteur.jpg"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"
import OurMission from "@/app/_components/OurMission/OurMission"
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"

const Mechanique = () => {
  const pricingInfos = [
    {
      title: "Vidange huile & changement filtre à huile",
      catchPhrase: "Enter your description",
      price: "50",
      services : [
        "Express en 30 min",
        "Rapport qualité prix imbattable",
        "Finitions manuelles de qualité"
      ]
    },
    {
      title: "Changement plaquette avant OU arrière",
      catchPhrase: "Enter your description",
      price: "50",
      services : [
        "Express en 30 min",
        "Rapport qualité prix imbattable",
        "Finitions manuelles de qualité"
      ]
    },
    {
      title: "Changement disque avant OU arrière",
      catchPhrase: "Enter your description",
      price: "60",
      services : [
        "Express en 30 min",
        "Rapport qualité prix imbattable",
        "Finitions manuelles de qualité"
      ]
    },
    {
      title: "Contrôle et mise à niveau des fluides",
      catchPhrase: "Enter your description",
      price: "30",
      services : [
        "Express en 30 min",
        "Rapport qualité prix imbattable",
        "Finitions manuelles de qualité"
      ]
    },
    {
      title: "Autre Prestation",
      catchPhrase: "Enter your description",
      price: "Sur devis",
      services : [
        "Express en 30 min",
        "Rapport qualité prix imbattable",
        "Finitions manuelles de qualité"
      ],
      noEuroSign: true
    },
  ]

  return (
    <>
      <div className="relative pb-32">
        <Image src={MechanicBannerBgCircle} alt="" className="absolute right-0 z-0" />
        <Navbar contactBtnClass="border-[#00B2FF]" logo={LogoMechanic} />
        <MechanicHeroBanner />
        <ServiceCarouselNew />
      </div>

      <Service
        title="filtres"
        text="Ne sous-estimez jamais l’importance de filtres propres pour la performance et la longévité. Des filtres en bon état garantissent une meilleure qualité de l’air dans l’habitacle, protègent votre moteur des impuretés et optimisent la consommation de carburant. Nos interventions sont rapides et abordables."
        svg={LightBlueWave}
        svgClassName="right-0 top-0"
        mainImage={Filter}
        mainColor="#00B2FF"
        secondaryColor="#005B83"
        showBtn={false}
        reverse={false}
      />

      <Service
        title="disquettes"
        text="L’état de vos disques de frein a un impact direct sur la distance d’arrêt de votre véhicule et donc sur votre sécurité. Chez nous, remplacez vos disques de frein avec rapidité et efficacité, sans compromettre la qualité. Une manière simple et économique de renforcer votre sécurité routière et celle de vos passagers."
        svg={LightBlueWaveReverse}
        svgClassName="left-0 top-0"
        mainImage={Disquettes}
        mainColor="#00B2FF"
        secondaryColor="#005B83"
        showBtn={false}
        reverse={true}
      />

      <Service
        title="entretien moteur"
        text="Un entretien régulier du moteur est crucial pour la longévité de votre véhicule. Avec nos services express et à petits prix, assurez-vous que votre moteur tourne comme une horloge, tout en évitant les problèmes coûteux à long terme. Ne négligez pas cette étape fondamentale pour une conduite sûre et économique."
        svg={LightBlueWave}
        svgClassName="right-0 top-0"
        mainImage={EntretienMoteur}
        mainColor="#00B2FF"
        secondaryColor="#005B83"
        showBtn={false}
        reverse={false}
      />
      
      <PricingWrapper pricingInfos={pricingInfos} mainColor="#00B2FF" />

      <OurMission mainColor="text-[#0088C3]" />

      <Contact mainColor="#0088C3" />
      <Footer bgColor="linear-gradient(180deg, #00B2FF 0%, #003248 100%)" logo={LogoMechanic} />
    </>
  )
}

export default Mechanique