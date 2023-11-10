import Image from "next/image";
import Arrow from "@/app/_assets/Arrow.webp"
import Button from "../Button/Button";

const Service = (props) => {

  let { title, mainColor, secondaryColor, text, mainImage, svg, svgClassName, reverse } = props;



  return (
    <div className="relative py-28">
      <Image src={ svg } className={"absolute z-0 w-auto h-full " + svgClassName } /> 
      <div className="max-w-screen-xl w-full mx-auto z-10 relative">
        <div className="grid grid-cols-12">
          
          <div className={"col-span-6 " + (reverse === true ? 'order-last' : '')}>
            <div className="relative">
              <div className={ "absolute w-[240px] h-[240px] -left-8 -bottom-8 z-0 bg-gradient-to-b from-[" + mainColor + "] to-[" + secondaryColor + "]" }></div>
              <Image className={"relative z-10 " + (reverse === true ? 'float-right' : '')} src={mainImage} />
            </div>
          </div>
          
          <div className="col-span-6 flex flex-col justify-center">
            <h2 className="text-5xl uppercase font-black mb-3">{ title }</h2>
            <div className="flex gap-x-10 mb-3">
              <Image src={ Arrow } className={"lg:h-16 w-auto " + (reverse === true ? 'rotate-90': '') } />
              <p className="color-gray-800">{ text }</p>
            </div>
            <div className="flex justify-end">
              <Button href="/" className={ 'uppercase float-right font-bold w-fit' } style={{ borderColor: mainColor}}>En savoir plus</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Service