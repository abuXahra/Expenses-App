import styled from "styled-components";

export const New_expense_card = styled.div`
    display: ${({ disp }) => disp};
    background-color: brown;
    border-radius: 10px;
    padding: 20px;
    flex-direction: column;
    width: 60%;
    
    @media (max-width:768px) {
        width: 90%;
    }
`

