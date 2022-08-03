import React from 'react'
import { DateStyled } from '../../style/Date.style'

function Date(props) {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();


    return (
        <div style={{ display: "flex" }}>
            <DateStyled>
                <span>{month}</span>
                <span>{year}</span>
                <span>{day}</span>
            </DateStyled><h2>{props.text}</h2>
        </div>

    )
}

export default Date
