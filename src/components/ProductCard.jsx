import React from "react"

const ProductCard = ( {prod, cat, price} ) => {
    return (
        <div className="flex justify-evenly text-orange-400 text-lg my-2">
            <p>{prod}</p>
            <p>{cat}</p>
            <p>{price}</p>
        </div>
    )
}


export default ProductCard