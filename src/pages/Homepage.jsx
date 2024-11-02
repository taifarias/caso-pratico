import React, { useState } from "react"
import Navbar from "../components/Navbar"
import TitleSection from "../components/TitleSection"
import SearchInput from "../components/SearchInput"
import ContainerList from "../components/ContainerList"

const Homepage = () => {

    const [input, setInput] = useState('');

    const products = [ 
        { prod: 'Apple', cat: 'Fruit', price: '$1.00' },
        { prod: 'Banana', cat: 'Fruit', price: '$0.50' },
        { prod: 'Carrot', cat: 'Vegetable', price: '$0.30' },
        { prod: 'Broccoli', cat: 'Vegetable', price: '$1.20' },
        { prod: 'Orange', cat: 'Fruit', price: '$0.80' },
        { prod: 'Tomato', cat: 'Vegetable', price: '$0.60' },
        { prod: 'Strawberry', cat: 'Fruit', price: '$2.00' },
        { prod: 'Cucumber', cat: 'Vegetable', price: '$0.75' },
        { prod: 'Grapes', cat: 'Fruit', price: '$1.50' },
        { prod: 'Potato', cat: 'Vegetable', price: '$0.40' },
        { prod: 'Lettuce', cat: 'Vegetable', price: '$0.90' },
        { prod: 'Blueberry', cat: 'Fruit', price: '$2.50' },
        { prod: 'Pepper', cat: 'Vegetable', price: '$1.10' },
        { prod: 'Pineapple', cat: 'Fruit', price: '$3.00' },
    
    
    ];

    

   
    return (
        <div className="bg-orange-100 h-screen">
           <Navbar />

        <section>
            <TitleSection title={'Our Products'} />

            <SearchInput setInput={setInput} />
          
          <div id='container-products'>
            <ContainerList products={products} input={input} /> 
          </div>
    
        </section></div>
    )
    
}



export default Homepage