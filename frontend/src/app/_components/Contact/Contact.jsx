import Image from 'next/image'
import GoogleMap from "@/app/_assets/GoogleMap.webp"
import { BiLogoTiktok, BiLogoSnapchat, BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/bi'
import Link from 'next/link';

const Contact = () => {

  let mainColor = "#00054B";

  return (
    <>
        <div className='container mx-auto'>
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <Image src={GoogleMap} className='rounded-tr-lg rounded-bl-lg' />
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                    <h2 className={"text-5xl font-extrabold mb-10"} style={{color: mainColor}}>Contactez-nous !</h2>
                    <form>
                        <div className="mb-4">
                            <input className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor, color: mainColor}} type="text" name="name" placeholder='Nom Prénom' />
                        </div>
                        <div className="mb-4">
                            <input className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor}} type="email" name="email" placeholder='E-mail' />
                        </div>
                        <div className="mb-4">
                            <input className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor}} type="phone" name="phone" placeholder='Téléphone' />
                        </div>
                        <div className="mb-4">
                            <textarea className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" style={{borderColor: mainColor}} type="text" name="message" placeholder='Message' />
                        </div>
                        <div className="flex items-center justify-between">
                            <input type="submit" value="envoyer" className={'uppercase text-white font-bold px-10 py-2 rounded-full'} style={{backgroundColor: mainColor}} />
                            <div className="flex gap-x-10">
                                <Link href="https://www.tiktok.com/@mycarzfr">
                                    <BiLogoTiktok color={mainColor} className='h-8 w-auto' />
                                </Link>
                                <Link href="">
                                    <BiLogoSnapchat color={mainColor} className='h-8 w-auto' />
                                </Link>
                                <Link href="">
                                    <BiLogoFacebookCircle color={mainColor} className='h-8 w-auto' />
                                </Link>
                                <Link href="">
                                    <BiLogoInstagramAlt color={mainColor} className='h-8 w-auto' />
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col mt-5" style={{color: mainColor}}>
                        <span className='font-extrabold text-xl'>E-mail</span>
                        <span>contact@mycarz.fr</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact