import React from 'react'
import { PricesStyled } from '../../style/Prices.style'

function Prices(props) {
    return (

        <PricesStyled>
            <h3>{props.price}</h3>
        </PricesStyled>

    )
}

export default Prices