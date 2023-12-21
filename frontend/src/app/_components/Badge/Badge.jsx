import { BsTelephoneFill } from 'react-icons/bs';

const Badge = (props) => {
  let { className } = props
  return (
    <div className={"rounded-xl lg:px-20 px-5 py-1 text-white flex items-center justify-center lg:w-fit w-full lg:border-none border-2 border-white " + className}>
        <div className="flex justify-center items-center gap-x-[10px]">
            <BsTelephoneFill />
            <span className="font-extrabold">03 76 11 59 59</span>
        </div>
    </div>
  )
}

export default Badge