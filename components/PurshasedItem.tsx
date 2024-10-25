import Image from "next/image"
import { ShopItemType } from "@/app/page";



interface Props {
    item : ShopItemType}


export const PurshasedItem = ({item}:Props) => {

    return(
        <div className="flex flex-col rounded_lg be-white flex flex-col justify-center items-center">
            <img className="rounded-full border h-20 w-20" src={item.image_url}  />
            <p className="font-bold text-center">{item.label}</p>
            <p>Total : {item.total}</p>
            <p>Cookie par second : {item.cps * item.total}</p>
        </div>
    )
}

