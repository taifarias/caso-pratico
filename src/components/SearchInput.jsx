import React from "react"

const SearchInput = ( {input, setInput} ) => {


    const handleSearch = (e) => {
        setInput(e.target.value);
    };

    return(
        <div className="justify-center flex mt-7 ">
            <input 
                type="text" 
                placeholder="Search for products here"
                className="outline-none text-orange-500 py-1 px-6 rounded-full h-10  w-80 bg-orange-200 placeholder-white"
                value={input}
                onChange={handleSearch} />

        </div>
        
    )
}


export default SearchInput