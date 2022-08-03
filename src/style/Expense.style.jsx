import styled from "styled-components";

export const Container = styled.div`
   background-color: #1F1F1F;
   border-radius: 10px;
   height: auto;
   width: 60%;
   padding: 20px;
   color: white;
   display: flex;
   flex-direction: column;
   margin: 20px 0;

   @media (max-width:768px) {
        width: 90%;
    }

    p{
        text-align: center;
    }

   `