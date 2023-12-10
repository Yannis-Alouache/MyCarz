import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

const Pricing = (props) => {
  let { title, price, services, catchPhrase, mainColor, noEuroSign } = props

  

  return (
    <>
        <div className={"flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg w-full border shadow-xl xl:p-8"} style={{borderColor: mainColor}}>
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg">{catchPhrase}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{price}{noEuroSign ? "" : "€"}</span>
            </div>
            <ul role="list" className="mb-8 space-y-2 text-left">
                {services.map(service => {
                    let svg = null;
                    if (service.included)
                        svg = <FaCheck className="text-green-500" />
                    else
                        svg = <AiOutlineClose className="text-red-500" />
                    return (
                        <li className="flex items-center space-x-3" key={service}>
                            {svg}
                            {/* <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> */}
                            <span>{service.text}</span>
                        </li>
                    )
                })}
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
            <a href="#" className={"text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "} style={{background: mainColor}}>Je prends RDV</a>
        </div>
    </>
  )
}

export default Pricing