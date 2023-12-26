import Navbar from '@/app/_components/Navbar/Navbar'
import Logo from "@/app/_assets/LogoHome.png"
import happyClient from "@/app/_assets/happyClient.jpg"
import Check from "@/app/_assets/check.svg"
import Car3D from "@/app/_assets/Car3D.png"
import Image from 'next/image'
import mechanicsFlyer from "@/app/_assets/mechanicsFlyer.png"
import Footer from '@/app/_components/Footer/Footer'
import Reveal from '@/app/_components/Reveal/Reveal'


const Promo = () => {
  return (
    <div className='bg-[#F5F5F7]'>
      <Navbar logo={Logo} contactBtnClass="border-[#0072FF] bg-transparent" />


      <div className='container mx-auto px-5 lg:px-0'>
        <Reveal>
          <div className='text-center'>
            <h1 className='lg:text-6xl text-3xl font-black text-gray-900 lg:pt-24 pt-10'>Promo d’ouverture !</h1>
          </div>
        </Reveal>
        <div className='grid grid-cols-1 gap-y-7 lg:pt-24 pt-10'>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-3 lg:gap-y-0'>
              <Reveal>
                <div className='bg-[#FF69B4] lg:h-[400px] h-full rounded-3xl p-10 text-white lg:text-5xl text-4xl font-black'>
                  <h3 className='mb-8'>Offre exclusive de lavage auto !</h3>
                  <p className='lg:text-4xl text-3xl'>Sans RDV en 30 minutes !</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="lg:h-[400px] h-[300px] bg-center bg-cover rounded-3xl" style={{backgroundImage: "url(" + happyClient.src + ")"}}></div>
              </Reveal>
              <Reveal>
                <div className='bg-[#0072FF] rounded-3xl p-10 text-white lg:text-6xl text-4xl font-black'>
                  <span>Lavage intérieur / extérieur complet pour 25€ au lieu de 30€</span>  
                </div>
              </Reveal>
          </div>


          <div className='grid lg:grid-cols-4 grid-cols-1 gap-x-5 gap-y-3 text-lg'>
            <Reveal>
              <div className='bg-white flex items-center font-bold rounded-full gap-x-3 px-5 py-2 shadow'>
                <Image src={Check} className='h-7 w-auto'/>
                <span>Service Carte Grise</span>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white flex items-center font-bold rounded-full gap-x-3 px-5 py-2 shadow'>
                <Image src={Check} className='h-7 w-auto'/>
                <span>Lavage express</span>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white flex items-center font-bold rounded-full gap-x-3 px-5 py-2 shadow'>
                <Image src={Check} className='h-7 w-auto'/>
                <span>Mécanique</span>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white flex items-center font-bold rounded-full gap-x-3 px-5 py-2 shadow'>
                <Image src={Check} className='h-7 w-auto'/>
                <span>Covering</span>
              </div>
            </Reveal>
            <Reveal>
              <div className='bg-white flex items-center font-bold rounded-full gap-x-3 px-5 py-2 shadow'>
                <Image src={Check} className='h-7 w-auto'/>
                <span>Achat-Vente et Depot vente</span>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-2 lg:gap-y-0 gap-x-5'>
              <div className='lg:col-span-2 bg-[#0072FF] lg:h-[400px] h-[300px] rounded-3xl'>
                <iframe className='w-full h-full rounded-3xl' src="https://www.youtube.com/embed/pEipUCculuo" title="🚗💨 MyCarz - 121 Boulevard Gambetta 59100 Roubaix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className='bg-[#FF0000] lg:h-[400px] h-full rounded-3xl p-10 text-white lg:text-5xl text-4xl font-black'>
                <p className='mb-8'>Ne manquez pas cette occasion !</p>
                <p>Offre Valable du 09/10 au 31/10.</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-y-0 gap-y-2 lg:gap-x-5 gap-x-0'>
              <div className='bg-[#00B2FF] lg:h-[400px] h-full rounded-3xl p-10 text-white font-black'>
                <p className='lg:text-3xl text-2xl mb-3'>Sans rendez-vous</p>
                <p className='lg:text-5xl text-4xl mb-10'>121 Boulevard Gambetta, 59150 Roubaix</p>
                <div className='lg:text-2xl text-base'>
                  <p>Du lundi au jeudi : 10h – 18h</p>
                  <p>Vendredi : 10h à 12h – 14h à 18h</p>
                  <p>Samedi : 10h – 19h</p>
                </div>
              </div>
              <div className='col-span-2 h-[400px] rounded-3xl shadow'>
                <iframe className='rounded-3xl' width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=mycarz%20roubaix+(My%20Carz%20Roubaix)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-y-0 lg:gap-x-5 gap-y-2 gap-x-0'>
              <div className='col-span-2 bg-white lg:h-[400px] h-full rounded-3xl lg:shadow-none shadow-md p-10'>
                <h3 className='lg:text-4xl text-2xl font-black mb-5'>Qui Somme Nous ?</h3>
                <p className='lg:text-2xl text-xl font-medium'>Chez MyCarz, nous sommes plus qu’un simple garage. Nous sommes votre partenaire automobile de confiance, niché en plein cœur du centre-ville de Roubaix au 121 Boulevard Gambetta. Notre passion est de prendre soin de votre véhicule et de vous offrir une expérience exceptionnelle avec une gamme complète de services automobiles</p>
              </div>
              <div className='bg-[#FF8A00] lg:h-[400px] h-[300px] rounded-3xl p-10'>
                <div className='w-full h-full bg-no-repeat bg-contain bg-center' style={{ backgroundImage: "url(" + Car3D.src + ")" }}>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-x-5 gap-x-0 gap-y-2 lg:gap-y-0 '>
              <div className='bg-no-repeat bg-contain bg-center ounded-3xl lg:h-[1000px] h-[400px]' style={{ backgroundImage: "url(" + mechanicsFlyer.src + ")" }}>

              </div>
              <div className='bg-white rounded-3xl p-10 h-fit shadow-md lg:shadow-none'>
                <h3 className='lg:text-4xl text-3xl font-black mb-5'>Offre Exclusive !</h3>
                <p className='lg:text-2xl text-xl font-medium mb-3'>Pour une durée limitée, plongez dans notre promotion spéciale sur l’entretien automobile !</p>
                <p className='lg:text-2xl text-xl font-medium mb-3'>Nous vous proposons un changement de disques, plaquettes de freins et une vidange à des tarifs exceptionnels.</p>
                <p className='lg:text-2xl text-xl font-medium'>Nos experts qualifiés veilleront à prendre soin de votre véhicule, garantissant sécurité et un service de haut niveau.</p>
              </div>
            </div>
          </Reveal>
        </div>
        <br></br>
      </div>

      <Footer bgColor="linear-gradient(180deg, #0075FF 0%, #00428F 100%)" logo={Logo} />
    </div>
  )
}

export default Promo