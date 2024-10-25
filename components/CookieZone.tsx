import Image from "next/image"
import CookieImg from '@/assets/cookie.png'

interface Props {
    totalCookies: number,
    cps: number,
    onCookieClick: Function
}

export const CookieZone = ({totalCookies, onCookieClick, cps=0}:Props) => {

    return(
        <div className="h-full w-full flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">Cookies par seconde: {cps}</p>
            <p className="text-3xl font-bold">Total cookies : {totalCookies.toFixed(0)}</p>
            <Image onClick={() => onCookieClick()} src={CookieImg} alt="Big Cookie" className="cursor-pointer h-60 hover:h-64 w-60 hover:w-64 ease-in-out duration-300" />
        </div>
    )
}