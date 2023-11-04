import Image from "next/image";

import { BsTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { BsGeoAltFill } from 'react-icons/bs'

import Link from "next/link";

const Footer = (props) => {

  let { bgColor, logo } = props;

  return (
      <footer style={{background: bgColor, clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%);"}} className="w-full">
        <div className="mx-auto container px-10 xl:px-0">
          <div className="md:flex md:justify-between xl:pt-32 xl:pb-20 pt-12">
            <div className="mb-6 md:mb-0 xl:block w-96 hidden">
              <a href="https://falconmarketing.fr/">
                <Image src={logo} className="h-12 w-auto mb-3" alt="FlowBite Logo" />
              </a>
              <span className="text-white">Votre solution rapide et abordable pour tous vos besoins automobiles.</span>
            </div>
            <div className="grid xl:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3 grid-cols-1">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-helvetica">
                  Horaires</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline font-gilroy">Falcon Marketing</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://falconacademy.fr/" className="hover:underline font-gilroy">Falcon Academy</Link>
                  </li>
                  <li className='mb-4'>
                    <Link href="https://falconenergy.fr/" className="hover:underline font-gilroy">Falcon Energy</Link>
                  </li>
                  <li className='mb-4'>
                    <Link href="https://voscontrats.fr/" className="hover:underline font-gilroy">Vos Contrats</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-helvetica">Liens
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/nos-valeurs" className="hover:underline font-gilroy">Achat Dépôt Revente</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/nos-valeurs" className="hover:underline font-gilroy">Mécanique</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/nos-valeurs" className="hover:underline font-gilroy">Covering</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/nos-valeurs" className="hover:underline font-gilroy">Wash</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/nos-valeurs" className="hover:underline font-gilroy">Service</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/nos-valeurs" className="hover:underline font-gilroy">Promo</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/nos-valeurs" className="hover:underline font-gilroy">Mentions légales</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/nos-valeurs" className="hover:underline font-gilroy">Politique Confidentialité</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-helvetica">
                  Contact</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium font-gilroy">
                  <li className="flex mb-4 items-center gap-x-3">
                    <BsTelephoneFill className="text-red-600" />
                    <span>+33 6 20 08 12 50</span>
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