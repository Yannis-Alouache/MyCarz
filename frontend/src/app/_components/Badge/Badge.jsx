import Image from "next/image"

import PhoneIcon from "@/app/_assets/phoneIcon.svg"

const Badge = (props) => {
  let { className } = props
  return (
    <div className={"rounded-xl px-20 py-1 text-white flex items-center justify-center w-fit " + className}>
        <div className="flex justify-center items-center gap-x-[10px]">
            <Image src={PhoneIcon} />
            <span className="font-extrabold">06 20 08 12 50</span>
        </div>
    </div>
  )
}

export default Badge