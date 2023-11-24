import Legal from "@/app/_assets/Legal.jpg";

const LegalMentionsBanner = () => {
  return (
    <div className='h-[500px] relative flex items-center justify-center mb-20'>
        <div style={{backgroundImage: "url(" + Legal.src + ")"}}
            className="w-full bg-top bg-cover brightness-50 text-white h-full absolute top-0 right-0 z-0">
        </div>
        <div className='z-10 text-white relative'>
            <h1 className='text-5xl font-bold'>Mentions Légal</h1>
        </div>
    </div>
  )
}

export default LegalMentionsBanner