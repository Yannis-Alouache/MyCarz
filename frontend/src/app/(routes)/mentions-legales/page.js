import Navbar from '@/app/_components/Navbar/Navbar'
import LogoHome from "@/app/_assets/LogoHome.webp"
import Footer from '@/app/_components/Footer/Footer'
import LegalImageBanner from '@/app/_components/LegalImageBanner/LegalImageBanner'

const MentionsLegales = () => {
  return (
    <>
      <Navbar contactBtnClass="border-[#6E260E]" alt="Logo MyCarz Principal" logo={LogoHome} />
      <LegalImageBanner title="Mentions légales" />
      <div className='max-w-screen-lg mx-auto mb-20'>
        <h4 className='font-bold mb-2'>1. Editeur du site</h4>
        <p className='mb-6'>CENTRE AUTO 4M, société par actions simplifiée au capital social de 1000 €, dont le siège social est situé au 121 BD GAMBETTA 59100 ROUBAIX, immatriculée au Registre du Commerce et des Sociétés de Lille Métropole sous le numéro 977 684 190.</p>

        <h4 className='font-bold mb-2'>2. Directeur de la publication</h4>
        <p className='mb-6'>Yannis Alouache, développeur web</p>

        <h4 className='font-bold mb-2'>3. Hébergement</h4>
        <p>Le site mycarz.fr est hébergé par :</p>
        <p>Hostinger</p>
        <p>Kaunas, Lituanie</p>
        <p>Hostinger, UAB</p>
        <p className='mb-6'>Jonavos g. 60C, 44192</p>

        <h4 className='font-bold mb-2'>4. Propriété intellectuelle</h4>
        <p>L’ensemble des éléments composant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégées diverses, bases de données, etc.) ainsi que le site lui-même, relèvent des législations françaises et internationales sur le droit d’auteur et la propriété intellectuelle.</p>
      </div>
      <Footer bgColor="#6E260E" logo={LogoHome} />
    </>
  )
}

export default MentionsLegales