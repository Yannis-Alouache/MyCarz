import Image from "next/image"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoCovering from "@/app/_assets/LogoCovering.png"
import CoveringBannerBgCircle from "@/app/_assets/CoveringBannerBgCircle.svg"
import CoveringHeroBanner from "@/app/_components/CoveringHeroBanner/CoveringHeroBanner"
import Service from "@/app/_components/Service/Service"

import BlueRedWave from "@/app/_assets/BlueRedWave.svg"
import BlueRedWaveReverse from "@/app/_assets/BlueRedWaveReverse.svg"
import Basique from "@/app/_assets/basique.jpg"
import Complet from "@/app/_assets/complet.jpg"
import Premium from "@/app/_assets/premium.jpg"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import Footer from "@/app/_components/Footer/Footer"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"
import OurValues from "@/app/_components/OurValues/OurValues"


const Covering = () => {
  const pricingInfos = [
    {
      title: "Gamme utilitaire-Publicitaire",
      catchPhrase: "À partir de",
      price: "500",
      services : []
    },
    {
      title: "Polissage",
      catchPhrase: "À partir de",
      price: "100",
      services : []
    },
    {
      title: "Lustrage",
      catchPhrase: "À partir de",
      price: "100",
      services : []
    },
    {
      title: "Vitre teinté 3/4",
      catchPhrase: "À partir de",
      price: "150",
      services : []
    },
    {
      title: "Vitre teinté voiture complète",
      catchPhrase: "À partir de",
      price: "190",
      services : []
    },
  ]

  return (
    <>
        <div className="relative pb-32">
          <Image src={CoveringBannerBgCircle} alt="" className="absolute right-0 z-0" />
          <Navbar contactBtnClass="border-[#5392D5]" logo={LogoCovering} />
          <CoveringHeroBanner />
          <ServiceCarouselNew />
        </div>

        <Service
          title="Covering"
          text="Transformez l'apparence de votre voiture selon vos envies avec notre service de covering, offrant une personnalisation créative et une protection contre les griffes. Chez MyCarz, vous pouvez embellir une partie ou la totalité de votre véhicule ou poser un Covering publicitaire."
          svg={BlueRedWave}
          svgClassName="right-0 top-0"
          mainImage={Basique}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={false}
        />

        <Service
          title="Polissage/Lustrage"
          text="Restaurez l'éclat d'origine de votre voiture en éliminant les imperfections avec notre service de polissage, suivi d'un lustrage pour une brillance éclatante. Redonnez vie à la carrosserie de votre véhicule."
          svg={BlueRedWaveReverse}
          svgClassName="left-0 top-0"
          mainImage={Complet}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={true}
        />

        <Service
          title="Vitre teinté"
          text="De l’obtention de la carte grise à l’assurance auto, en passant par les plaques d’immatriculation, nous sommes présent pour faciliter toute vos démarches."
          svg={BlueRedWave}
          svgClassName="right-0 top-0"
          mainImage={Premium}
          mainColor="#5392D5"
          secondaryColor="#9E2442"
          showBtn={false}
          reverse={false}
        />

        <div className="container mx-auto mb-8 lg:mb-10">
          <h2 className="mb-10 text-5xl tracking-tight font-bold text-gray-700 underline">Prix Covering</h2>
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-700">Noir</h2>
        </div>
        <div class="container mx-auto relative overflow-x-auto shadow-lg sm:rounded-lg mb-32">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                          Modèle
                        </th>
                        <th scope="col" class="px-6 py-3">
                          type smart
                        </th>
                        <th scope="col" class="px-6 py-3">
                          mini
                        </th>
                        <th scope="col" class="px-6 py-3">
                          citadine / compact
                        </th>
                        <th scope="col" class="px-6 py-3">
                          berline / suv
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Changement couleur complet
                        </th>
                        <td class="px-6 py-4">
                          1 800€
                        </td>
                        <td class="px-6 py-4">
                          2 400€
                        </td>
                        <td class="px-6 py-4">
                          3 600€
                        </td>
                        <td class="px-6 py-4">
                          3 990€
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Toit
                        </th>
                        <td class="px-6 py-4">
                          220€
                        </td>
                        <td class="px-6 py-4">
                          400€
                        </td>
                        <td class="px-6 py-4">
                          420€
                        </td>
                        <td class="px-6 py-4">
                          450€
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Rétroviseurs
                        </th>
                        <td class="px-6 py-4">
                          110€
                        </td>
                        <td class="px-6 py-4">
                          110€
                        </td>
                        <td class="px-6 py-4">
                          110€
                        </td>
                        <td class="px-6 py-4">
                          110€
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Toit et Rétroviseurs
                        </th>
                        <td class="px-6 py-4">
                          290€
                        </td>
                        <td class="px-6 py-4">
                          430€
                        </td>
                        <td class="px-6 py-4">
                          450€
                        </td>
                        <td class="px-6 py-4">
                          470€
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div className="container mx-auto mb-8 lg:mb-10">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-700">Couleur standard</h2>
        </div>
        <div class="container mx-auto relative overflow-x-auto shadow-lg sm:rounded-lg mb-32">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                          Modèle
                        </th>
                        <th scope="col" class="px-6 py-3">
                          type smart
                        </th>
                        <th scope="col" class="px-6 py-3">
                          mini
                        </th>
                        <th scope="col" class="px-6 py-3">
                          citadine / compact
                        </th>
                        <th scope="col" class="px-6 py-3">
                          berline / suv
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Changement couleur complet
                        </th>
                        <td class="px-6 py-4">
                          2 300€
                        </td>
                        <td class="px-6 py-4">
                          3 100€
                        </td>
                        <td class="px-6 py-4">
                          4 300€
                        </td>
                        <td class="px-6 py-4">
                          4 590€
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Toit
                        </th>
                        <td class="px-6 py-4">
                          280€
                        </td>
                        <td class="px-6 py-4">
                          500€
                        </td>
                        <td class="px-6 py-4">
                          530€
                        </td>
                        <td class="px-6 py-4">
                          570€
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Rétroviseurs
                        </th>
                        <td class="px-6 py-4">
                          130€
                        </td>
                        <td class="px-6 py-4">
                          130€
                        </td>
                        <td class="px-6 py-4">
                          130€
                        </td>
                        <td class="px-6 py-4">
                          130€
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Toit et Rétroviseurs
                        </th>
                        <td class="px-6 py-4">
                          350€
                        </td>
                        <td class="px-6 py-4">
                          540€
                        </td>
                        <td class="px-6 py-4">
                          560€
                        </td>
                        <td class="px-6 py-4">
                          590€
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        <div className="container mx-auto mb-8 lg:mb-10">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-700">Carbone</h2>
        </div>
        <div class="container mx-auto relative overflow-x-auto shadow-lg sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                          Modèle
                        </th>
                        <th scope="col" class="px-6 py-3">
                          type smart
                        </th>
                        <th scope="col" class="px-6 py-3">
                          mini
                        </th>
                        <th scope="col" class="px-6 py-3">
                          citadine / compact
                        </th>
                        <th scope="col" class="px-6 py-3">
                          berline / suv
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Toit
                        </th>
                        <td class="px-6 py-4">
                          780€
                        </td>
                        <td class="px-6 py-4">
                          1 400€
                        </td>
                        <td class="px-6 py-4">
                          1 500€
                        </td>
                        <td class="px-6 py-4">
                          1 600€
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Rétroviseurs
                        </th>
                        <td class="px-6 py-4">
                          380€
                        </td>
                        <td class="px-6 py-4">
                          380€
                        </td>
                        <td class="px-6 py-4">
                          380€
                        </td>
                        <td class="px-6 py-4">
                          380€
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Toit et Rétroviseurs
                        </th>
                        <td class="px-6 py-4">
                          990€
                        </td>
                        <td class="px-6 py-4">
                          1490€
                        </td>
                        <td class="px-6 py-4">
                          1590€
                        </td>
                        <td class="px-6 py-4">
                          1690€
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="container mx-auto">
          <h2 className="mt-16 text-5xl tracking-tight font-bold text-gray-700 underline">Autre Prestation</h2>
        </div>
        <PricingWrapper pricingInfos={pricingInfos} mainColor="#5392D5" withoutHeaderText={true} />

        <OurValues mainColor="text-[#5392D5]" />

        <Contact mainColor="#192C41" />

        <Footer bgColor="linear-gradient(180deg, #5392D5 10%, #4E1120 100%)" logo={LogoCovering} />


    </>
  )
}

export default Covering