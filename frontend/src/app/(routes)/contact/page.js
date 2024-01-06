import Navbar from "@/app/_components/Navbar/Navbar"
import LogoHome from "@/app/_assets/LogoHome.webp"
import Footer from "@/app/_components/Footer/Footer"
import ContactForm from "@/app/_components/ContactFormWithMap/ContactFormWithMap"

const Contact = () => {
  return (
    <>
        <Navbar contactBtnClass="border-[#1a2541]" alt="Logo MyCarz Principal" logo={LogoHome}/>

        <div className="mt-32 mb-20">
            <ContactForm mainColor="#1a2541" tagColor="#1a2541" />
        </div>


        <Footer bgColor="linear-gradient(180deg, #00428F 0%, #1a2541 100%)" logo={LogoHome} />
    </>
  )
}

export default Contact