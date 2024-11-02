import React from "react"
import ProductCard from "./ProductCard"

const ContainerList = ( {products, input} ) => {

    const filterProd = products.filter((product) =>
        Object.values(product)
            .join(' ')
            .toLowerCase()
            .includes(input.toLowerCase())
    );

    return(
        <div >   
            <div className="flex justify-evenly mt-10 text-2xl text-orange-600 font-semibold ">
                <p>Name</p>
                <p>Category</p>
                <p>Price</p>
            </div>        
            <div>
                {filterProd.length > 0 ? (
                    filterProd.map((product, index) => (
                        <ProductCard 
                        key={index}
                        prod={product.prod} 
                        cat={product.cat} 
                        price={product.price} />
                    )

                    )
                )
                 : 
                 (<p className="flex justify-center text-orange-400 text-lg my-2 mt-16"> No products found</p>)   
                 }



                
            </div>
                     
        </div>
    )
}


export default ContainerList