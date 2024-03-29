import Image from "next/image";

import { BsTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { BsGeoAltFill } from 'react-icons/bs'

import Link from "next/link";

const Footer = (props) => {

  let { bgColor, logo } = props;

  return (
      <footer style={{background: bgColor}} className="w-full lg:clip no-clip">
        <div className="mx-auto container px-10 xl:px-0">
          <div className="md:flex md:justify-between xl:pt-32 xl:pb-20 pt-12 pb-10">
            <div className="mb-6 md:mb-0 xl:block w-96 hidden">
              <a href="https://mycarz.fr/">
                <Image src={logo} className="h-12 w-auto mb-3" alt="MyCarz Logo Principal" />
              </a>
              <span className="text-white">Votre solution rapide et abordable pour tous vos besoins automobiles.</span>
            </div>
            <div className="grid xl:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3 grid-cols-1">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Horaires</h2>
                <ul className="text-white font-medium">
                  <li className="mb-4 flex flex-col">
                    <span className="mb-2">Lundi - Jeudi</span>
                    <span className="text-gray-300">10h - 18h</span>
                  </li>
                  <li className="mb-4 flex flex-col">
                    <span className="mb-2">Vendredi</span>
                    <span className="text-gray-300">10h - 12h</span>
                    <span className="text-gray-300">14h - 18h</span>
                  </li>
                  <li className="mb-4 flex flex-col">
                    <span className="mb-2">Samedi</span>
                    <span className="text-gray-300">10h - 19h</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Liens
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <Link href="/achat-depot-revente" className="hover:underline">Achat Dépôt Revente</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/mechanique" className="hover:underline">Mécanique</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/covering-detailing" className="hover:underline">Covering</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/wash" className="hover:underline">Wash</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/service" className="hover:underline">Service</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/promo" className="hover:underline">Promo</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/politique-de-confidentialite" className="hover:underline">Politique Confidentialité</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Contact</h2>
                <ul className="text-white font-medium">
                  <li className="flex mb-4 items-center gap-x-3">
                    <BsTelephoneFill className="text-red-600" />
                    <span>03 76 11 59 59</span>
                  </li>
                  <li className="flex mb-4 items-center gap-x-3">
                    <MdMail className="text-red-600" />
                    <span>contact@mycarz.fr</span>
                  </li>
                  <li className='flex mb-4 items-center gap-x-3'>
                    <BsGeoAltFill className="text-red-600" />
                    <span>121 Boulevard Gambetta 59100 Roubaix</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer