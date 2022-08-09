

import React, { useState } from 'react'
import { FiltExpensStyled, AddDateStyled } from '../../style/FilterExpenses.style'
// import { years } from '../data/Years'
import { BiCommentAdd } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import { ModalOverlay, Overlay, ModalContent, CloseModal, AddYearButton } from '../../style/modal.style'
import InputDate from './inc/InputDate'


function FilterExpenses(props) {

    const onChangeSelectedHandler = (event) => {
        const valueSlected = event.target.value
        props.onChangeSelectHandler(valueSlected)
    }



    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };



    const [enteredValue, setenteredValue] = useState("")

    const inputHandler = (event) => {
        setenteredValue(event.target.value);
    }


    const submitHandler = (event) => {

        event.preventDefault()

        const enteredYear = {
            label: enteredValue,
            title: enteredValue
        }

        props.onInputYearHandler(enteredYear);
        toggleModal();

        setenteredValue("");
    }

    return (
        <FiltExpensStyled>
            <label>Filter Expenses:
                <AddDateStyled>
                    <BiCommentAdd onClick={toggleModal} />
                </AddDateStyled>
            </label>
            {modal && (
                <ModalOverlay >
                    <Overlay onClick={toggleModal}></Overlay>
                    <ModalContent>
                        <CloseModal>
                            <span>
                                <FaTimes onClick={toggleModal} />
                            </span>

                        </CloseModal>
                        <span>Expenses Year</span>
                        <form onSubmit={submitHandler}>
                            <InputDate
                                title={enteredValue}
                                type="number"
                                min="0.01"
                                step="0.01"
                                inputHandler={inputHandler}
                                value={enteredValue}
                                placeHolder="0000"
                            />
                            <AddYearButton>Add Expense Year</AddYearButton>
                        </form>
                    </ModalContent>
                </ModalOverlay>
            )}
            <select value={props.valueSelected} onChange={onChangeSelectedHandler}>
                {
                    props.years.map((item, index) => (
                        <option value={item.title} key={index}>{item.label}</option>
                    ))
                }
            </select>
        </FiltExpensStyled>
    )
}
export default FilterExpenses