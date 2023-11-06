import Image from "next/image";
import Arrow from "@/app/_assets/Arrow.webp"
import BuyService from '@/app/_assets/BuyService.png';

const Service = (props) => {

  let { title } = props;

  return (
    <div className="relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <Image src={BuyService} />
          </div>
          <div className="col-span-6">
            <h2 className="text-4xl uppercase font-extrabold mb-3">{title}</h2>
            <div className="flex gap-x-10">
              <Image src={Arrow} className="lg:h-16 w-auto" />
              <p className="color-gray-800">Spécialisés dans l’achat et le dépôt-vente, nous vous offrons des solutions avantageuses pour renouveler ou vendre votre véhicule sans contrainte financière.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service