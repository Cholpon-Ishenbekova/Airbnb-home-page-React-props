import React from "react"
import data from "./carddata"
import Slider from "../slider"

export default function App() {
    const cards = data.map(item => {
        return (
            <Slider
                img={item.coverImg}
                rate={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                local={item.location}
                title={item.title}
                prize={item.price}
            />
        )
    })
    return (
        <div>
            {cards}
        </div>
    )
}