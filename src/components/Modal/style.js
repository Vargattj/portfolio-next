import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const Background = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const ModalWrapper = styled.div`
  width: 1050px;
  height: 550px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.greenBlue};
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  display: grid;
  overflow-y: scroll;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    width: 100%;
    height: 80vh;
  }
`;

export const ModalContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      margin: 16px 0;
      color: #ddd;
      font-size: 36px;
      margin-top: 16px;
      font-weight: bold;
    }
    a {
    }
  }

  .slider {
    margin: 36px 0;
    div {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
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
  }
  .awssld__bullets .awssld__bullets--active {
    background: ${({ theme }) => theme.colors.second} !important;
  }
  .awssld__bullets button {
    background: ${({ theme }) => theme.colors.second} !important;
  }

  .description {
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    h2 {
      line-height: 1;
      color: #ddd;
      font-size: 36px;
      margin-top: 16px;
      font-weight: bold;
      &::after {
        margin: 16px 0;
        content: "";
        width: 364px;
        height: 0.5px;
        background-color: #bbb;
        display: block;
      }
      span {
        margin-top: 8px;
        color: #bbb;
        font-weight: normal;
        display: block;
        font-size: 24px;
      }
    }
    p {
      color: #bbb;
      font-size: 24px;
    }
    li {
      font-size: 24px;
      color: #bbb;
      list-style: circle;
      text-align: left;
      margin: 5px 0;
      margin-left: 20px;
    }
    a {
      border: 0;
      background-color: ${({ theme }) => theme.colors.third};
      padding: 10px 15px;
      border-radius: 15px;
      text-transform: uppercase;
      font-weight: bold;
      transform: translateY(0px);
      color: #ddd;
      text-decoration: none;
      width: fit-content;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    overflow: hidden;
    overflow-y: scroll;
    header {
      flex-direction: column;
    }
    .description {
      max-width: 300px;
    }
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 40px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #ddd;
`;
