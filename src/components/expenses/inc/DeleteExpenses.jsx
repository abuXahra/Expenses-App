import React from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { DeleteExpStyled } from '../../../style/DeleteExpenses.style'

function DeleteExpenses(props) {

    //delete delete individual id
    const deleteIdHandler = () => {
        props.deleteHandler(props.id)
    }

    return (
        <DeleteExpStyled onClick={deleteIdHandler}>
            <MdOutlineDeleteForever />
        </DeleteExpStyled>
    )
}

export default DeleteExpenses
