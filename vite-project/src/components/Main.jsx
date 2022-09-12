import React from "react"
import Slider from "./slider"
import Photo1 from "../assets/list0.jpg"
import Photo2 from "../assets/list1.jpg"
import Photo3 from "../assets/list3.jpg"

export default function Main() {
    return (
        <div className="main">
            <h1 className="main_title">Online Experiences</h1>
            <p className="main_text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            <Slider
                img={Photo1}
                rate="5.0 "
                local="(6)-USA"
                title="Life lessons with Katie Zaferes"
                prize="$136"
            />
            <Slider
                img={Photo2}
                rate="5.0 "
                local="(30)-USA"
                title="Learn wedding photography"
                prize="$125"
            />
            <Slider
                img={Photo3}
                rate="4.8 "
                local="(2)-USA"
                title="Group Mountain Biking"
                prize="$50"
            />
        </div>
    )
}
