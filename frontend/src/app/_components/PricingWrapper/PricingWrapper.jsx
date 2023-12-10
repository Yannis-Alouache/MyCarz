import React from 'react'
import Pricing from '../Pricing/Pricing'

const PricingWrapper = (props) => {
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
                  <Pricing
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
        </div>
    </section>
  )
}

export default PricingWrapper