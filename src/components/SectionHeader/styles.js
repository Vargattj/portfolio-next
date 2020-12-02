import styled from "styled-components";

export const Container = styled.div`
  max-width: 1150px;
  margin: 110px auto 30px auto;
  h2 {
    width: fit-content;
    font-size: 24px;
    /* color: ${({ theme }) => theme.colors.greenBlue}; */
    color: #aaa;
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 1px solid #aaa;
    font-weight: bold;
  }
`;
