import styled from "styled-components";


// // body.active-modal {
// //     overflow-y: hidden;
// // }

export const BtnModal = styled.button`
    /* padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px; */
`

export const ModalOverlay = styled.div`
    width: 100vw;
    height: 100vh;
  
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

export const Overlay = styled.div`
    /* background: rgba(49, 49, 49, 0.8);    */
    height: 100vh;
    width: 100%;
    background-color: black;
    opacity: 0.7;
`
export const ModalContent = styled.div`
    position: absolute;    
    line-height: 1.4;
    padding: 14px 28px ;
    padding: 14px 28px 40px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    color: black;
    justify-content: center;

    span{
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 10px;
        text-align: center;
        color: purple
    }
`



export const AddYearButton = styled.button`
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    background-color: #510674;
    color: white;
    cursor: pointer;
    width: 100%;
`



export const CloseModal = styled.span`
    cursor: pointer;
    font-size: 25px;
    display: flex;
    justify-content: flex-end;

    span{
        color: red;
    }
`