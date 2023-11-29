import Navbar from '@/app/_components/Navbar/Navbar'
import Footer from '@/app/_components/Footer/Footer'
import LogoHome from "@/app/_assets/LogoHome.png"
import LegalImageBanner from '@/app/_components/LegalImageBanner/LegalImageBanner'


const PolitiqueConfidentialite = () => {
  return (
    <>
      <Navbar contactBtnClass="border-[#6E260E]" logo={LogoHome} />
      <LegalImageBanner title="Politique de confidentialité" />
      <div className='max-w-screen-lg mx-auto mb-20'>
        <h4 className='font-bold mb-2'>1. Préambule</h4>
        <p className='mb-6'>Cette politique de confidentialité définit et vous informe de la manière dont CENTRE AUTO 4M utilise et protège les informations que vous nous transmettez.</p>

        <h4 className='font-bold mb-2'>2. Données personnelles collectées</h4>
        <p className='mb-1'>Lors de votre visite sur notre site mycarz.fr, nous pouvons recueillir les types de données suivants :</p>
        <ul className='list-disc ml-10 mb-6'>
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Adresse postale</li>
          <li>Numéro de téléphone</li>
          <li>Données de navigation</li>
        </ul>

        <h4 className='font-bold mb-2'>3. Finalité des données</h4>
        <p className='mb-1'>Vos données personnelles sont collectées pour une ou plusieurs des finalités suivantes :</p>
        <ul className='list-disc ml-10 mb-6'>
          <li>Gérer vos accès à certains services disponibles sur le site mycarz.fr.</li>
          <li>Constituer un fichier de membres inscrits, d’utilisateurs, de clients et de prospects.</li>
          <li>Adresser des newsletters, sollicitations et messages promotionnels.</li>
        </ul>

        <h4 className='font-bold mb-2'>4. Durée de conservation</h4>
        <p className='mb-6'>Vos données personnelles sont conservées par CENTRE AUTO 4M uniquement pour le temps correspondant à la finalité de la collecte tel qu’indiqué en 3 ci-dessus, qui ne saurait en tout état de cause excéder 24 mois.</p>

        <h4 className='font-bold mb-2'>5. Droits d’accès, de rectification et d’opposition</h4>
        <p className='mb-1'>Conformément à la réglementation européenne en vigueur, vous disposez des droits suivants :</p>
        <ul className='list-disc ml-10 mb-6'>
          <li>Droit d’accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude de vos données.</li>
          <li>Droit de verrouillage ou d’effacement de vos données personnelles (article 17 du RGPD).</li>
          <li>Droit d’opposition au traitement de vos données (article 21 RGPD).</li>
          <li>Droit à la portabilité des données que vous nous avez fournies (article 20 RGPD).</li>
          <li>Droit de retirer votre consentement.</li>
        </ul>

        <h4 className='font-bold mb-2'>6. Utilisation des cookies</h4>
        <p className='mb-6'>Notre site mycarz.fr peut utiliser des cookies. Vous avez le droit de refuser les cookies en modifiant les paramètres de votre navigateur.</p>

        <h4 className='font-bold mb-2'>7. Procédure en cas de violation de données</h4>
        <p className='mb-6'>En cas de violation de données personnelles, CENTRE AUTO 4M s’engage à notifier l’autorité de contrôle compétente conformément à l’article 33 du RGPD.</p>

        <h4 className='font-bold mb-2'>8. Contact</h4>
        <p>Pour toute demande relative à vos données personnelles, vous pouvez nous contacter à contact@mycarz.fr.</p>

      </div>
      <Footer bgColor="#6E260E" logo={LogoHome} />
    </>
  )
}

export default PolitiqueConfidentialite