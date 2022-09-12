import React from 'react'

export default function Slider(props) {
    return (
        <ul className="slider">
            <li className="slider_item">
                {/* <img src={'../assets/${props.img}'} alt="" className="item_img" /> */}
                <img src={props.img} alt="" className="item_img" />
                <p className="item_txt rating"> {props.rate} <span className="gray">({props.reviewCount}) • </span> <span className="item_local">{props.local}</span></p>
                <div className="item_info">
                    <p className="item_txt">{props.title}</p>
                    <p className="item_txt"><b>From {props.prize}</b>/person</p>
                </div>
            </li>
        </ul>
    )
}