import styled from "styled-components";


export const DateContainer = styled.div`
    display: "flex"; 
`

export const DateStyled = styled.div`
    background-color: #2A2A2A;
    border-radius: 10px;
    border: 1px solid white;
    width: 90px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    span:nth-child(1) {
        font-weight: bold;
    }

    span:nth-child(3) {
        font-weight: bold;
        font-size: 20px;
    }
`