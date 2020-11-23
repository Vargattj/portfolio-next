import styled from "styled-components";

export const Container = styled.div`
  margin: 80px 0;
  display: flex;
  justify-content: space-between;
  position: relative;

  img {
    -webkit-box-shadow: -1px 2px 9px 1px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: -1px 2px 9px 1px rgba(0, 0, 0, 0.24);
    box-shadow: -1px 2px 9px 1px rgba(0, 0, 0, 0.24);
    z-index: 10;
    width: 650px;
  }

  .project-details {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: right;
    max-width: 450px;
    font-family: sans-serif;
    position: relative;
    h2 {
      font-size: 48px;
      color: ${({ theme }) => theme.colors.greenBlue};
      font-weight: bold;
    }
    p {
      font-weight: normal;
      font-size: 32px;
      color: #444;
    }
    li {
      opacity: 0.7;
      font-size: 22px;
      text-transform: uppercase;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.second};
      margin-bottom: 20px;
    }
    button {
      bottom: -30px;
      position: absolute;
      width: 280px;
    }
  }
`;
