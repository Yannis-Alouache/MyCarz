import { FaCheck } from "react-icons/fa"

const Pricing = (props) => {
let { title, price, services, catchPhrase, mainColor, noEuroSign } = props

  return (
    <div className={"flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg w-full border shadow-xl xl:p-8"} style={{borderColor: mainColor}}>
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-gray-500 sm:text-lg">{catchPhrase}</p>
        <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">{price}{noEuroSign ? "" : "€"}</span>
        </div>
        <ul role="list" className="mb-8 space-y-2 text-left">
            {services.map(service => {
                return (
                    <li className="flex items-center space-x-3" key={service}>
                        <FaCheck className="text-green-500" />
                        <span>{service}</span>
                    </li>
                )
            })}
        </ul>
        <a href="#" className={"text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "} style={{background: mainColor}}>Nous Contacter</a>
    </div>
  )
}

export default Pricing