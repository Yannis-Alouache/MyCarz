import Image from "next/image"
import Navbar from "@/app/_components/Navbar/Navbar"
import LogoCovering from "@/app/_assets/LogoCovering.webp"
import CoveringBannerBgCircle from "@/app/_assets/CoveringBannerBgCircle.svg"
import CoveringHeroBanner from "@/app/_components/CoveringHeroBanner/CoveringHeroBanner"
import Service from "@/app/_components/Service/Service"
import { IoIosArrowRoundForward } from "react-icons/io";

import BlueRedWave from "@/app/_assets/BlueRedWave.svg"
import BlueRedWaveReverse from "@/app/_assets/BlueRedWaveReverse.svg"
import Basique from "@/app/_assets/basique.webp"
import Complet from "@/app/_assets/complet.webp"
import Premium from "@/app/_assets/premium.webp"
import Contact from "@/app/_components/ContactFormWithMap/ContactFormWithMap"
import Footer from "@/app/_components/Footer/Footer"
import PricingWrapper from "@/app/_components/PricingWrapper/PricingWrapper"
import ServiceCarouselNew from "@/app/_components/ServiceCarouselNew/ServiceCarouselNew"
import OurValues from "@/app/_components/OurValues/OurValues"
import Reveal from "@/app/_components/Reveal/Reveal"


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
        <div className="relative lg:pb-32 pb-10">
          <Image src={CoveringBannerBgCircle} alt="" className="absolute right-0 z-0" />
          <Navbar contactBtnClass="border-[#5392D5]" logo={LogoCovering} />
          <CoveringHeroBanner />
          <ServiceCarouselNew />
        </div>

        <div id="services">
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
        </div>

        <div className="container mx-auto mb-8 lg:px-0 px-5 lg:mb-10">
          <h2 className="mb-10 lg:text-5xl text-3xl tracking-tight font-bold text-gray-700 underline">Prix Covering</h2>
          <h2 className="mb-4 lg:text-4xl text-2xl tracking-tight font-bold text-gray-700">Noir</h2>
        </div>

        <Reveal>
          <div className="container mx-auto relative overflow-x-auto lg:px-0 px-5">
              <table className="shadow-lg rounded-lg w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            Modèle
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            type smart
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            mini
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            citadine / compact
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            berline / suv
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Changement couleur complet
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            1 800€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            2 400€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            3 600€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            3 990€
                          </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Toit
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            220€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            400€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            420€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            450€
                          </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Rétroviseurs
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            110€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            110€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            110€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            110€
                          </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Toit et Rétroviseurs
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            290€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            430€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            450€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            470€
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className="flex lg:px-0 px-5 mt-3 lg:hidden">
            <div className="flex text-gray-800 items-center gap-x-2">
              <span className="text-sm">Swipez vers la gauche pour voir la suite</span>
              <IoIosArrowRoundForward size={25} className="text-gray-800" />
            </div>
          </div>
          <div className="mb-32" />
        </Reveal>

        <Reveal>
          <div className="container mx-auto mb-8 lg:mb-10 lg:px-0 px-5">
            <h2 className="mb-4 lg:text-4xl text-2xl tracking-tight font-bold text-gray-700">Couleur standard</h2>
          </div>
          <div className="container lg:px-0 px-5 mx-auto relative overflow-x-auto">
              <table className="shadow-lg sm:rounded-lg w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            Modèle
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            type smart
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            mini
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            citadine / compact
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            berline / suv
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Changement couleur complet
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            2 300€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            3 100€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            4 300€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            4 590€
                          </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Toit
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            280€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            500€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            530€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            570€
                          </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Rétroviseurs
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            130€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            130€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            130€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            130€
                          </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Toit et Rétroviseurs
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            350€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            540€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            560€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            590€
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className="flex lg:px-0 px-5 mt-3 lg:hidden">
            <div className="flex text-gray-800 items-center gap-x-2">
              <span className="text-sm">Swipez vers la gauche pour voir la suite</span>
              <IoIosArrowRoundForward size={25} className="text-gray-800" />
            </div>
          </div>
          <div className="mb-32" />
        </Reveal>

        <Reveal>
          <div className="container mx-auto lg:px-0 px-5 mb-8 lg:mb-10">
            <h2 className="mb-4 lg:text-4xl text-2xl tracking-tight font-bold text-gray-700">Carbone</h2>
          </div>
          <div className="container lg:px-0 px-5 mx-auto relative overflow-x-auto">
              <table className="shadow-lg sm:rounded-lg w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            Modèle
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            type smart
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            mini
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            citadine / compact
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            berline / suv
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Toit
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            780€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            1 400€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            1 500€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            1 600€
                          </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Rétroviseurs
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            380€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            380€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            380€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            380€
                          </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-gray-50 border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Toit et Rétroviseurs
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            990€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            1490€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            1590€
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            1690€
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className="flex lg:px-0 px-5 mt-3 lg:hidden">
            <div className="flex text-gray-800 items-center gap-x-2">
              <span className="text-sm">Swipez vers la gauche pour voir la suite</span>
              <IoIosArrowRoundForward size={25} className="text-gray-800" />
            </div>
          </div>
          <div className="mb-10" />
        </Reveal>

        <div className="container mx-auto">
          <h2 className="mt-16 lg:text-start text-center lg:text-5xl text-3xl tracking-tight font-bold text-gray-700 underline">Autre Prestation</h2>
        </div>
        <PricingWrapper pricingInfos={pricingInfos} mainColor="#5392D5" withoutHeaderText={true} />

        <OurValues mainColor="text-[#5392D5]" />

        <Contact mainColor="#192C41" tagColor="#192C41" />

        <Footer bgColor="linear-gradient(180deg, #5392D5 10%, #4E1120 100%)" logo={LogoCovering} />


    </>
  )
}

export default Covering