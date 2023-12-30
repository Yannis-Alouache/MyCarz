"use client";
import Reveal from '../Reveal/Reveal';
import { useForm } from "react-hook-form";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = (props) => {

  let { mainColor } = props
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const form = useRef(null);

  const [expressSelected, setExpressSelected] = useState(false);
  const [confortSelected, setConfortSelected] = useState(false);
  const [luxeSelected, setLuxeSelected] = useState(false);

  const sendEmail = (formData) => {
    console.log(formData)
    handleSubmit((data) => setData(JSON.stringify(data)));
    
    if (expressSelected) formData.prestation = "Express";
    if (confortSelected) formData.prestation = "Confort";
    if (luxeSelected) formData.prestation = "Luxe";

    console.log(formData);
    
    emailjs.send('service_gwsd92o', 'template_hi9rgir', formData, 'L0xQfyB3KRVNJjUyK')
      .then((result) => {
          form.current.reset();
          console.log(result.text);
          notify();
      }, (error) => {
          console.log(error.text);
      });
  };
  const notify = () => toast.success("Message envoyé !");


  const handleExpress = () => {
    if (confortSelected) setConfortSelected(false);
    if (luxeSelected) setLuxeSelected(false);
    setExpressSelected(!expressSelected);
  };

  const handleConfort = () => {
    if (expressSelected) setExpressSelected(false);
    if (luxeSelected) setLuxeSelected(false);
    setConfortSelected(!confortSelected);
  };

  const handleLuxe = () => {
    if (expressSelected) setExpressSelected(false);
    if (confortSelected) setConfortSelected(false);
    setLuxeSelected(!luxeSelected);
  };

  return (
    <>
        <Reveal>
            <ToastContainer />
            <div className='mx-auto max-w-screen-xl flex justify-center lg:px-0 px-6'>
                <div className="flex flex-col lg:w-2/3 w-full lg:flex-row lg:items-center">
                    <div className="flex-1 flex flex-col  py-12">
                        <h2 className={"lg:text-5xl text-2xl font-extrabold text-center mb-12"} style={{color: mainColor}}>Réserver un rendez-vous !</h2>
                        <form method='POST' ref={form} className='lg:pb-10 pb-0' onSubmit={handleSubmit(sendEmail)}>
                            <div className="mb-4">
                                <input {...register("name")} className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor, color: mainColor}} type="text" placeholder='Nom Prénom' required />
                            </div>
                            <div className="mb-4">
                                <input {...register("phone")} className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor}} type="phone" placeholder='Téléphone' required />
                            </div>
                            <div className="mb-4 grid grid-cols-2 gap-x-6">
                                <input {...register("date")} min={new Date().toISOString().split('T')[0]} className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor, color: mainColor}} type="date" placeholder='Date' required />
                                <input {...register("heure")} className="appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{borderColor: mainColor, color: mainColor}} type="time" placeholder='Heure' required />
                            </div>
                            <span className='font-medium text-medium text-gray-700'>Choisissez une prestation :</span>
                            <div className="flex lg:justify-start justify-center mt-4 mb-8">
                                <button type='button' onClick={handleExpress} className={"border cursor-pointer border-gray-300 rounded-full px-4 py-2 mr-2 hover:text-white font-bold hover:bg-[#FF69B4] " + (expressSelected ? "bg-[#FF69B4] text-white" : "bg-gray-200 text-gray-700") }>Nettoyage Express</button>
                                <button type='button' onClick={handleConfort} className={"border cursor-pointer border-gray-300 rounded-full px-4 py-2 mr-2 hover:text-white font-bold hover:bg-[#FF69B4] " + (confortSelected ? "bg-[#FF69B4] text-white" : "bg-gray-200 text-gray-700") }>Nettoyage Confort</button>
                                <button type='button' onClick={handleLuxe} className={"border cursor-pointer border-gray-300 rounded-full px-4 py-2 mr-2 hover:text-white font-bold hover:bg-[#FF69B4] " + (luxeSelected ? "bg-[#FF69B4] text-white" : "bg-gray-200 text-gray-700") }>Nettoyage Luxe</button>
                            </div>
                            <div className="flex items-center lg:justify-between justify-center flex-wrap lg:gap-y-0 gap-y-3">
                                <input type="submit" value="envoyer" className={'cursor-pointer uppercase text-white font-bold lg:w-fit w-full px-10 py-2 rounded-full bg-[#FF69B4]'} style={{backgroundColor: mainColor}} />
                            </div>
                        </form>
                        <p>{data}</p>
                    </div>
                    {/* Other content (if any) */}
                </div>
            </div>
        </Reveal>
    </>
  )
}
export default BookingForm;