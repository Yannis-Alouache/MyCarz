import React from 'react'

const Pricing = (props) => {
    let { title, price, services, catchPhrase, mainColor } = props
  return (
    <>
        <div className={"flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border shadow-xl xl:p-8"} style={{borderColor: mainColor}}>
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg">{catchPhrase}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{price}€</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {services.map(service => {
                    return (
                        <li className="flex items-center space-x-3" key={service}>
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span>{service}</span>
                        </li>
                    )
                })}
            </ul>
            <a href="#" className={"text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "} style={{background: mainColor}}>Je prends RDV</a>
        </div>
    </>
  )
}

export default Pricing