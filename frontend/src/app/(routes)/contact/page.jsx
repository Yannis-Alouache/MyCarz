import Navbar from "@/app/_components/Navbar/Navbar"
import LogoHome from "@/app/_assets/LogoHome.png"
import Footer from "@/app/_components/Footer/Footer"
import ContactBanner from "@/app/_components/ContactBanner/ContactBanner"

const Contact = () => {
  return (
    <>
        <Navbar contactBtnClass="border-[#1a2541]" logo={LogoHome}/>
        <ContactBanner />
        <div className="w-full">
            <iframe className="w-full h-96"  frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=121%20Boulevard%20Gambetta%2059100%20Roubaix+(121%20Boulevard%20Gambetta%2059100%20Roubaix)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-x-10">
                <div className="col-span-1">
                    <div className="grid grid-cols-1">
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                </div>
            </div>
        </div>

        <Footer bgColor="linear-gradient(180deg, #00428F 0%, #1a2541 100%)" logo={LogoHome} />
    </>
  )
}

export default Contact