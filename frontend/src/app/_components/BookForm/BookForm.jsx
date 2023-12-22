"use client";

import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';


import "./style.css";


const BookForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale("fr", fr);

  const [time, setTime] = useState('10:00');  
  const onChange = (value) => {
    setTime(value);
  };
  
  return (
    <section class="bg-white pt-12">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Reserver une prestation</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Besoin de faire votre carte grise, plaque d'immatriculation ou votre assurance auto ?</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Nom et Prénom</label>
                    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block focus:outline-none w-full p-2.5" placeholder="" required />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Téléphone</label>
                    <input type="tel" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block focus:outline-none w-full p-2.5" placeholder="06XXXXXXXX" required />
                </div>
                <div>
                    <label for="prestation" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <select id="prestation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none">
                    <option disabled selected>Selectionnez une prestation</option>
                    <option value="Carte Grise">Carte Grise</option>
                    <option value="Plaque d'immatriculation">Plaque d'immatriculation</option>
                    <option value="Assurance Auto">Assurance Auto</option>
                    </select>
                </div>
                <div class="sm:col-span-2">
                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900">Date</label>
                    <div className="customDatePickerWidth">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            locale="fr"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block focus:outline-none w-full p-2.5"
                        />
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="time" class="block mb-2 text-sm font-medium text-gray-900">Heure</label>
                    <div className="customDatePickerWidth">
                        <TimePicker clearIcon={<></>} defaultValue={moment()} showSecond={false} minuteStep={15} className="w-full" />
                    </div>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800">Send message</button>
            </form>
        </div>
    </section>
  )
}

export default BookForm