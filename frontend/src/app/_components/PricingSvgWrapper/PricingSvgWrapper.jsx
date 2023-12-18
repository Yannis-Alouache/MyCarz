import PricingWithSvg from '../PricingWithSvg/PricingWithSvg'

const PricingSvgWrapper = (props) => {
  let { pricingInfos, mainColor } = props; 

  return (
    <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-0">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Les Prix</h2>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-7 lg:space-y-0">
              {pricingInfos.map(pricingInfo => {
                return (
                  <PricingWithSvg
                    title={pricingInfo.title}
                    price={pricingInfo.price}
                    catchPhrase={pricingInfo.catchPhrase}
                    services={pricingInfo.services}
                    mainColor={mainColor}
                    noEuroSign={pricingInfo.noEuroSign}
                    key={pricingInfo.title}
                  />
                )
              })}
            </div>
            <div className={'mt-10 w-fit bg-white rounded-xl p-10'} style={{borderColor: mainColor, borderWidth: "1px"}}>
              <ul>
                <li className="flex items-center space-x-3 pt-2">
                    <span className="font-bold">Options :</span>
                </li>                
                <li className="flex items-center space-x-3">
                    <span>Brillant pneus et lavage passage de roue : <strong>5€</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                    <span>Shampouineuse siège avant OU arrière : <strong>15€</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                    <span>Traitement cuir siège avant OU arrière  : <strong>15€</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                    <span>Traitement cuir siège avant OU arrière  : <strong>15€</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                    <span>Aspiration coffre : <strong>5€</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                    <span>Décontamination ferreuse  : <strong>15€</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                    <span>Teinture moquette et tapis : <strong>20€</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                    <span>Lustrage des chrome : <strong>40€</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                    <span>Nettoyage ciel de toit : <strong>40€</strong></span>
                </li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default PricingSvgWrapper