import React from 'react'

export default function Item({ title, month, number, image }) {
    return (
        <div className='item-box'>
            <div className="content">
                <h3>{title}</h3>
                <p>{number} <span>{month}</span></p>
            </div>
            <div className="img-sec">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
