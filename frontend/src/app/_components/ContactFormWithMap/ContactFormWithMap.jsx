"use client";

import { BiLogoTiktok, BiLogoSnapchat, BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi'
import Link from 'next/link';
import ContactVideo from "@/app/_assets/contactVideo.mp4"
import Reveal from '../Reveal/Reveal';

import { useForm } from "react-hook-form";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = (props) => {

  let { mainColor } = props
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const form = useRef(null);

  const sendEmail = (formData) => {
    handleSubmit((data) => setData(JSON.stringify(data)));

    emailjs.send('service_gwsd92o', 'template_fh28m67', formData, 'L0xQfyB3KRVNJjUyK')
      .then((result) => {
          form.current.reset();
          console.log(result.text);
          notify();
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const notify = () => toast.success("Message envoyé !");

  return (
    <> 
        <Reveal>
            <ToastContainer />
            <div className='container mx-auto lg:px-0 px-6'>
                <div className="grid grid-cols-12 lg:gap-x-10 gap-x-0">
                    <div className="lg:col-span-4 col-span-12 relative lg:h-full h-[300px]">
                        <video autoPlay loop muted playsInline webkit-playsinline="true" className='absolute top-0 left-0 object-cover w-full lg:h-full h-[300px] rounded-tr-3xl rounded-bl-3xl'>
                            <source src={ContactVideo} type="video/mp4" />
                            Votre navigateur ne prend pas en charge les vidéos
                        </video>     
                        {/* <Image src={GoogleMap} alt='' className='rounded-tr-lg rounded-bl-lg' /> */}
                    </div>
                    <div className="lg:col-span-8 col-span-12 flex flex-col justify-center py-12">
                        <h2 className={"lg:text-5xl text-3xl font-extrabold mb-10"} style={{color: mainColor}}>Contactez-nous !</h2>
                        
                        <form ref={form} className='lg:pb-10 pb-0' onSubmit={handleSubmit(sendEmail)}>
                            <div className="mb-4">
                                <input {...register("name")} className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor, color: mainColor}} type="text" placeholder='Nom Prénom' required />
                            </div>
                            <div className="mb-4">
                                <input {...register("mail")} className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor}} type="email" placeholder='E-mail' required />
                            </div>
                            <div className="mb-4">
                                <input {...register("phone")} className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor}} type="phone" placeholder='Téléphone' required />
                            </div>
                            <div className="mb-4">
                                <textarea {...register("message")} className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" style={{borderColor: mainColor}} type="text" placeholder='Message' required />
                            </div>
                            <div className="flex items-center lg:justify-between justify-center flex-wrap lg:gap-y-0 gap-y-3">
                                <input type="submit" value="envoyer" className={'cursor-pointer uppercase text-white font-bold lg:w-fit w-full px-10 py-2 rounded-full'} style={{backgroundColor: mainColor}} />
                                <div className="flex lg:gap-x-10 gap-x-5">
                                    <Link href="https://www.tiktok.com/@mycarzfr">
                                        <BiLogoTiktok color={mainColor} className='h-8 w-auto' />
                                    </Link>
                                    <Link href="https://www.snapchat.com/add/mycarzfr">
                                        <BiLogoSnapchat color={mainColor} className='h-8 w-auto' />
                                    </Link>
                                    <Link href="https://www.facebook.com/mycarzfr">
                                        <BiLogoFacebookCircle color={mainColor} className='h-8 w-auto' />
                                    </Link>
                                    <Link href="https://www.instagram.com/mycarzfr/">
                                        <BiLogoInstagramAlt color={mainColor} className='h-8 w-auto' />
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCHBrNQofk_t62s3-2hQe9fQ">
                                        <BiLogoYoutube color={mainColor} className='h-8 w-auto' />
                                    </Link>
                                </div>
                            </div>
                        </form>
                        <p>{data}</p>
                        <div className='grid lg:grid-cols-2 grid-cols-1 mt-10 lg:text-start text-center'>
                            <div className='lg:mb-0 mb-5'>
                                <span className='font-extrabold text-xl pb-5 underline decoration-blue-400 decoration-4'>Horaire</span>
                                <div className='flex flex-col mt-5'>
                                    <span className='font-bold'>Lundi - Jeudi</span>
                                    <span>10h - 18h</span>
                                </div>
                                <div className='flex flex-col mt-5'>
                                    <span className='font-bold'>Vendredi</span>
                                    <span>10h - 12h</span>
                                    <span>14h - 18h</span>
                                </div>
                                <div className='flex flex-col mt-5'>
                                    <span className='font-bold'>Samedi</span>
                                    <span>10h - 19h</span>
                                </div>
                            </div>
                            <div>
                            <div className="flex flex-col mt-5 lg:items-start items-center" style={{color: mainColor}}>
                                <span className='font-extrabold text-xl'>E-mail</span>
                                <Link className='bg-[#0072FF] w-fit px-5 py-1 rounded-full text-white font-bold' href="mailto:contact@mycarz.fr">contact@mycarz.fr</Link>
                            </div>
                            <div className="flex flex-col mt-5 lg:items-start items-center" style={{color: mainColor}}>
                                <span className='font-extrabold text-xl'>Téléphone</span>
                                <Link className='bg-[#0072FF] w-fit px-5 py-1 rounded-full text-white font-bold' href='tel:0376115959'>03 76 11 59 59</Link>
                            </div>
                            <div className="flex flex-col mt-5 lg:items-start items-center" style={{color: mainColor}}>
                                <span className='font-extrabold text-xl'>Adresse</span>
                                <Link className='bg-[#0072FF] w-fit px-5 py-1 rounded-full text-white font-bold' href="https://maps.app.goo.gl/RC5kyvMhERw5egmCA">121 Boulevard Gambetta à Roubaix</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Reveal>
    </>
  )
}

export default Contact