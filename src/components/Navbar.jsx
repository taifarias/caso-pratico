import React from "react"
import Logo from "../assets/img/site-name.png"

const Navbar = () => {
    return (
        <div className="bg-orange-300 flex justify-center">
            <img src={Logo} alt="" className="h-16" />
        </div>
    )
}


export default Navbar