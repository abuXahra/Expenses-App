import styled from "styled-components";


export const NewExpenseCardInner = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin: 0 0 5px 0;
        font-weight: bold;
    }

    input {
        padding: 10px;
        font-weight: bold;
        border-radius: 5px;
        border: none;
    }

    button {
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        background-color: #510674;
        color: white;
        cursor: pointer;

        @media (max-width:768px) {

    font-size: 12px;
    width: 100%;
    margin-top: 10px;
}
    }

    @media (max-width:768px) {
        flex-direction: column;
        margin: 0;
}
`

export const New_expense_container_button = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
    align-items: center;
  

@media (max-width:768px) {
   button{
 width: auto;
   }   
}
`
export const CancelContainer = styled.div`
    color: white;
    background-color: #510674;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    font-weight: bold;
    cursor: pointer;
    height: 45px;

    
`


export const NewEexpenseContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;

    @media (max-width:768px) {
   flex-direction: column;
}

    `

export const New_expense__title = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;

    @media (max-width:768px) {
    width: 100%;
}
`

export const New_expense__amount = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;

    @media (max-width:768px) {
    width: 100%;
    margin-top: 10px;
}
`

export const New_expense__date = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;

    @media (max-width:768px) {
    width: 100%;
    margin-top: 10px;
}
`
