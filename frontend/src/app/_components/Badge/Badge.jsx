import { BsTelephoneFill } from 'react-icons/bs';

const Badge = (props) => {
  let { className } = props
  return (
    <div className={"rounded-xl px-20 py-1 text-white flex items-center justify-center w-fit " + className}>
        <div className="flex justify-center items-center gap-x-[10px]">
            <BsTelephoneFill />
            <span className="font-extrabold">03 76 11 59 59</span>
        </div>
    </div>
  )
}

export default Badge