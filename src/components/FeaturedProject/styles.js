import styled from "styled-components";

export const Container = styled.section`
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .slider {
    max-width: 670px;
    div {
      height: 470px;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      &::before {
        background-color: ${({ theme }) => theme.colors.second} !important;
      }
      &::after {
        background-color: ${({ theme }) => theme.colors.second} !important;
      }
    }
  }
  .awssld__bullets .awssld__bullets--active {
    background: ${({ theme }) => theme.colors.second} !important;
  }
  .awssld__bullets button {
    background: ${({ theme }) => theme.colors.second} !important;
  }

  .project-details {
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: right;
    max-width: 450px;
    font-family: sans-serif;
    h2 {
      font-size: 48px;
      color: ${({ theme }) => theme.colors.greenBlue};
      font-weight: bold;
    }
    p {
      font-weight: normal;
      font-size: 26px;
      color: #444;
      line-height: 1.2;
    }
    li {
      margin-left: 13px;
      list-style: circle;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.second};
      margin-bottom: 20px;
      color: #777;
    }
    button {
      width: 280px;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 90%;
    flex-direction: column;
    .slider {
      div {
        height: 100%;
      }
    }

    .project-details {
      height: 400px;
      width: 100%;
      margin-top: 30px;
      text-align: center;
      margin: 0 auto;
      margin-top: 30px;
      h2 {
        font-size: 36px;
        text-align: center;
      }
      p {
        font-size: 25px;
        text-align: center;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          margin: 12px;
        }
      }
    }
  }
`;
