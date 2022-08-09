import styled from "styled-components"


export const InputDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;


    label {
        margin: 0 0 5px 0;
        font-weight: bold;
    }

    input {
        padding: 10px;
        font-weight: bold;
        border-radius: 5px;
        border: 2px solid purple;
        margin-bottom: 10px;

    :focus {
    outline: none !important;
    border: none;
    box-shadow: 0 0 10px purple;
  }
    }


    @media (max-width:768px) {
    width: 100%;
    margin-top: 10px;
}
`