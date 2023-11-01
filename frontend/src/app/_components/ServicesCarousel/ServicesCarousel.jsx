import "./style.css"

const ServicesCarousel = (props) => {
  let { tiretColor } = props
  return (
    <section className="pt-40">
        <div className="container mx-auto relative z-10">
            <div className='flex justify-evenly items-center flex-wrap'>
                <span className='text-5xl text-white font-extrabold text-stroke uppercase leading-normal tracking-wider'>mécanique</span>
                <div className='w-10 h-2' style={{background: tiretColor}}></div>
                <span className='text-5xl text-white font-extrabold text-stroke uppercase leading-normal tracking-wider'>covering</span>
                <div className='w-10 h-2' style={{background: tiretColor}}></div>
                <span className='text-5xl text-white font-extrabold text-stroke uppercase leading-normal tracking-wider'>wash</span>
            </div>
        </div>
    </section>

  )
}

export default ServicesCarousel