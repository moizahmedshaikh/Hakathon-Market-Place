"use client"

import { useShoppingCart } from "use-shopping-cart"
import { Button } from "./ui/button"
import { urlFor } from "@/sanity/lib/image";


interface ProductCartProps {
    name: string,
    price: number,
    images:string,
    stripe_id: string,
    btnName: string
}


const AddToCart = ({name,price,images, btnName, stripe_id}:ProductCartProps) => {

    const {addItem} = useShoppingCart();

    const product = {
        name:name,
        price:price,
        image: urlFor(images).url(),
        sku: `${name}-${price}`,
        currency: "USD",
        stripe_id: stripe_id
    }

  return (

    <Button onClick={()=>{
        addItem(product); 
    }}>
        {btnName}
    </Button>
  )
}

export default AddToCart