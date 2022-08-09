import React from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { DeleteExpStyled } from '../../../style/DeleteExpenses.style'

function DeleteExpenses(props) {
    return (
        <DeleteExpStyled onClick={props.deleteHandler}>
            <MdOutlineDeleteForever />
        </DeleteExpStyled>
    )
}

export default DeleteExpenses
