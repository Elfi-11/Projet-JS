"use client";

import { CookieZone } from "@/components/CookieZone";
import { useState, useEffect } from "react";
import { ShopItem } from "@/components/Shopitem"
import { PurshasedItem } from "@/components/PurshasedItem";

export interface ShopItemType {
  id: number,
  image_url: string,
  label: string,
  price: number,
  cps: number, //Cookies per second
  total: number
}


const defaultShopItems : ShopItemType[] = [
{ id : 1,
  label : "Mamy",
  image_url : "data:image/jpeg;base64,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", 
  price:10, 
  cps:1,
  total: 0},
{ id : 2,
  label : "SuperMamy",
  image_url : "https://atelier-canope-19.canoprof.fr/eleve/PROJETSatelier19/Projets%20th%C3%A9%C3%A2tre/th%C3%A9%C3%A2tre%20coll%C3%A8ge%20jmoulin/res/mamie.png",
  price: 100, 
  cps:10,
  total: 0},]

export default function Home() {

  const [cookies, setCookies] = useState(0)
  const [purchasedItems, setPurchasedItems] = useState(defaultShopItems)
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0)

  const handlePurchasedItem = (item: ShopItemType) => {
    setCookies(cookies - item.price)

    let actualItems = [...purchasedItems]
    const itemIndex = actualItems.findIndex(o => o.id == item.id)

    actualItems[itemIndex].total++
    setPurchasedItems([...actualItems])
    setCookiesPerSecond(cookiesPerSecond + item.cps)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(prevCookies => prevCookies + (cookiesPerSecond / 100))
    }, 10)

    return () => {clearInterval(interval)}
  }, [cookiesPerSecond])

  return (
    <div className="h-screen w-screen flex">
      <div className="left w-1/4 bg-green-500">
        <CookieZone totalCookies={cookies} cps={cookiesPerSecond} onCookieClick={() => { setCookies(cookies + 1) }} />
      </div>
      <div className="center flex-1 bg-red-500">
        {purchasedItems.filter(o => o.total > 0).map(item => <PurshasedItem item={item}/>)}
      </div>
      <div className="right w-1/4 flex flex-col gap-3 p-2">
      {purchasedItems.map(item =>
        <ShopItem 
        item={item}
        totalCookies={cookies}
        key= {item.id}
        onClick={() => {handlePurchasedItem(item)}}/>
      )}
      </div>
    </div>
  );
}
