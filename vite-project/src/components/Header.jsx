import React from "react"
import Logo from "../assets/logo.png"
import Wrapper from "../assets/wrapper.png"

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="Airbnb" />
                </div>
            </nav>
            <div className="wrapper">
                <img src={Wrapper} alt="Airbnb-wrapper" className="wrapper_img" />
            </div>
        </header>
    )
}