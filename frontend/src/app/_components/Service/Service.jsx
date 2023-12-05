import Image from "next/image";
import Arrow from "@/app/_assets/Arrow.webp"
import Button from "../Button/Button";
import "./style.css";

const Service = (props) => {

  let { title, link, mainColor, secondaryColor, text, mainImage, svg, svgClassName, showBtn, reverse } = props;



  return (
    <div className="relative py-28">
      {/* <Image src={ svg } alt="" className={"absolute z-0 w-auto h-full " + svgClassName } />  */}
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="-25 -25 250 250" class="float absolute z-0 w-auto h-full right-0 -top-52"> 
        <defs>
        <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >
          <stop offset="0%" style={{stopColor: "#ff8a8a", stopOpacity: 1.00}} />
          <stop offset="100%" style={{stopColor: "#ff1a1a", stopOpacity: 1.00}} />
        </linearGradient>
        </defs>
        <path d="M187.50558796574947 51.59780919453664 C166.76161486369529 22.516459023860797 84.03284192893152 3.364720083342215 49.785580054467395 13.521609464943808 C34.69348420609257 17.99755118052863 12.105017805164696 45.46392417366449 8.056325976180617 60.67620558743549 C0.7068188249463203 88.29074770613077 8.270551778363718 155.59902765387662 31.23545137858079 172.6046613716535 C61.42478559004198 194.96002841966816 154.70223674291088 185.7874373711179 180.86429651018727 158.82997152738145 C199.57027674115128 139.55527268350218 203.10314772023 73.46430963765432 187.50558796574947 51.59780919453664Z" stroke="none" fill="url(#lgrad)"  />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="-25 -25 250 250" class="float absolute z-0 w-auto h-full right-[500px] top-0"> 
        <defs>
        <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >
          <stop offset="0%" style={{stopColor: "#ff8a8a", stopOpacity: 1.00}} />
          <stop offset="100%" style={{stopColor: "#ff1a1a", stopOpacity: 1.00}} />
        </linearGradient>
        </defs>
        <path d="M187.50558796574947 51.59780919453664 C166.76161486369529 22.516459023860797 84.03284192893152 3.364720083342215 49.785580054467395 13.521609464943808 C34.69348420609257 17.99755118052863 12.105017805164696 45.46392417366449 8.056325976180617 60.67620558743549 C0.7068188249463203 88.29074770613077 8.270551778363718 155.59902765387662 31.23545137858079 172.6046613716535 C61.42478559004198 194.96002841966816 154.70223674291088 185.7874373711179 180.86429651018727 158.82997152738145 C199.57027674115128 139.55527268350218 203.10314772023 73.46430963765432 187.50558796574947 51.59780919453664Z" stroke="none" fill="url(#lgrad)"  />
      </svg>

      <div className="max-w-screen-xl w-full mx-auto z-10 relative">
        <div className="grid grid-cols-12 gap-x-10">
          <div className={"col-span-6 " + (reverse === true ? 'order-last' : '')}>
            <div className="relative">
              <div className={ "absolute w-[240px] h-[240px] z-0 " + (reverse === true ? "-right-8 -top-8" : "-left-8 -bottom-8" )} style={{ backgroundImage: "linear-gradient(" + mainColor + "," + secondaryColor + ")" }}></div>
              <Image className={"relative z-10 " + (reverse === true ? 'float-right' : '')} alt="" src={mainImage} />
            </div>
          </div>
          
          <div className="col-span-6 flex flex-col justify-center">
            <h2 className="text-5xl uppercase font-black mb-3">{ title }</h2>
            <div className="flex gap-x-10 mb-3">
              <Image src={ Arrow } alt="" className={"lg:h-16 w-auto " + (reverse === true ? 'rotate-90': '') } />
              <p className="color-gray-800">{ text }</p>
            </div>
            <div className={"flex justify-end " + (showBtn === true ? "": "hidden") }>
              <Button href={link} className={ 'uppercase float-right font-bold w-fit' } style={{ borderColor: mainColor}}>En savoir plus</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Service