"use client"

import Image from "next/image";
import Arrow from "@/app/_assets/Arrow.webp"
import Button from "../Button/Button";
import { useWindowSize } from "@uidotdev/usehooks";
import Reveal from "../Reveal/Reveal";



const Service = (props) => {

  let { title, link, mainColor, secondaryColor, text, mainImage, showBtn, reverse } = props;
  const size = useWindowSize();

    return (
      <Reveal>
        <div className="relative lg:py-28 py-16">
          <span className="hidden">{size.width}</span>
          {/* <Image src={ svg } alt="" className={"absolute z-0 w-auto h-full " + svgClassName } /> */}
          <div className="max-w-screen-xl lg:px-10 px-6 w-full mx-auto z-10 relative">
            <div className="grid grid-cols-12 lg:gap-x-10 gap-x-0">
              <div className={"lg:col-span-6 col-span-12 " + (reverse === true && size.width > 640 ? 'order-last' : '')}>
                <div className="relative">
                  <div className={ "absolute w-[240px] h-[240px] lg:block hidden z-0 " + (reverse === true ? "-right-8 -top-8" : "-left-8 -bottom-8" )} style={{ backgroundImage: "linear-gradient(" + mainColor + "," + secondaryColor + ")" }}></div>
                  <Image className={"relative z-10 " + (reverse === true && size.width > 640 ? 'float-right' : '')} alt="" src={mainImage} />
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12 flex flex-col justify-center">
                <h2 className="lg:text-4xl text-2xl uppercase font-black mb-3 mt-5">{ title }</h2>
                <div className="flex gap-x-10 mb-3">
                  <Image src={ Arrow } alt="" className={"lg:h-16 lg:block hidden w-auto " + (reverse === true ? 'rotate-90': '') } />
                  <p className="color-gray-800">{ text }</p>
                </div>
                <div className={"flex justify-end " + (showBtn === true ? "": "hidden") }>
                  <Button href={link} className={ 'uppercase float-right font-bold lg:text-base text-sm w-fit' } style={{ borderColor: mainColor }}>En savoir plus</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    )
}

export default Service