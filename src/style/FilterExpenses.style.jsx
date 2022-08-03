import styled from "styled-components";

export const FiltExpensStyled = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    font-size: 15px;
    margin-bottom: 10px;

    select{
        padding: 10px 40px;
        font-weight: bolder;
        border-radius: 10px;
        border: none; 
      
        
        &:focus {
            outline: none !important;
            border:none;
           
        }
    }
`
