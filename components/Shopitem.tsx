import { ShopItemType } from "@/app/page"



interface Props {
    item : ShopItemType,
    totalCookies : number,
    onClick: () => void
}

export const ShopItem = ({item, onClick, totalCookies, ...props}:Props) => {

    const checkClick = () => {
        if(totalCookies >= item.price) onClick()
    }

    return(
        <div className="flex w-full p-2 border rounded-lg bg-slate-100 hover:bg-slate-300 ease-in-out duration-300 cursor-pointer" {...props} onClick={checkClick}>
            <img className="h-20" src={item.image_url} alt={item.label} />
            <div className="flex flex-col p-2">
                <h1>{item.label} : {item.total}</h1>
                <p>Cout : {item.price}</p>
            </div>
        </div>
    )
}