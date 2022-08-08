import React from 'react'
import { PricesStyled } from '../../style/Prices.style'

function Prices(props) {
    return (

        <PricesStyled>
            <h3>&#x20A6;{props.price}</h3>
        </PricesStyled>

    )
}

export default Prices