import Navbar from "@/app/_components/Navbar/Navbar"
import LogoHome from "@/app/_assets/LogoHome.png"
import Footer from "@/app/_components/Footer/Footer"
import ContactBanner from "@/app/_components/ContactBanner/ContactBanner"

const Contact = () => {
  return (
    <>
        <Navbar contactBtnClass="border-[#1a2541]" logo={LogoHome}/>
        <ContactBanner />

        <div className="container mx-auto mt-32">
            <div className="text-center mb-10">
                <h2 className="text-gray-800 text-4xl font-extrabold mb-2">Nous Contacter</h2>
                <p>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
            </div>
            <div className="grid grid-cols-3 gap-x-10">
                <div className="col-span-2">
                    <form className="grid grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="prenom" class="block mb-2 text-sm font-medium text-gray-900">Prénom</label>
                            <input type="text" id="prenom" name="prenom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-gray-300 block w-full p-2.5" placeholder="Jean" required />
                        </div>
                        <div>
                            <label htmlFor="nom" class="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                            <input type="text" id="nom" name="nom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-gray-300 block w-full p-2.5" placeholder="Jacque" required />
                        </div>

                        <div>
                            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                            <input type="email" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-gray-300 block w-full p-2.5" placeholder="jeanJacque@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="telephone" class="block mb-2 text-sm font-medium text-gray-900">Téléphone</label>
                            <input type="phone" id="telephone" name="telephone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-gray-300 block w-full p-2.5" placeholder="06 xx xx xx xx" required />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900">Téléphone</label>
                            <textarea type="text" id="message" name="message" rows="6" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-gray-300 block w-full p-2.5 resize-none" placeholder="Quel est votre interrogation ?" required />
                        </div>
                        <button className="w-fit bg-blue-700 text-white py-2 px-8 rounded-md">Envoyer</button>
                    </form> 
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-1 text-center items-center gap-y-8">
                        <div>
                            <div className="w-16 h-16 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md mx-auto">
                                <svg className="w-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p className="text-gray-800 font-bold">Company information:</p>
                            <p>
                                Themesberg LLC
                                <br/>
                                Tax id: USXXXXXX
                            </p>
                        </div>

                        <div>
                            <div className="w-16 h-16 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md mx-auto">
                                <svg className="w-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <p className="text-gray-800 font-bold">Address:</p>
                            <p>
                                SILVER LAKE, United States 1941 Late Avenue <br />
                                Zip Code/Postal code:03875
                            </p>
                        </div>

                        <div>
                            <div className="w-16 h-16 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md mx-auto">
                                <svg className="w-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                            </div>
                            <p className="text-gray-800 font-bold">Call us:</p>
                            <p>
                                Call us to speak to a member of our team. We are always happy to help.
                            </p>
                            <a className="text-blue-800" href="">06.85.35.74.48</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-screen-lg mx-auto mt-20 mb-20">
            <div className="w-full">
                <iframe className="w-full h-[400px] rounded-xl"  frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=121%20Boulevard%20Gambetta%2059100%20Roubaix+(121%20Boulevard%20Gambetta%2059100%20Roubaix)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>

        <Footer bgColor="linear-gradient(180deg, #00428F 0%, #1a2541 100%)" logo={LogoHome} />
    </>
  )
}

export default Contact