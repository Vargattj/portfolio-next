import styled from "styled-components";

export const Container = styled.ul`
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1040px;
  li {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
    list-style: none;
    max-width: 550px;
    cursor: pointer;

    &:last-child {
      margin-right: auto;
      justify-self: center;
    }
    a {
      height: 300px;

      .bar {
        height: 15px;
        width: 100%;
        background-color: #ccc;
        border-radius: 10px 10px 0 0px;
        display: flex;
        align-items: center;
        h2 {
          font-size: 12px;
          color: #888;
          margin: 0 auto;
        }
        i {
          position: relative;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          background-color: #ff5f57;
          left: 16px;

          &::after {
            position: absolute;
            left: 16px;
            content: "";
            width: 8px;
            border-radius: 50%;
            height: 8px;
            background-color: #ffbd2e;
          }
          &::before {
            position: absolute;
            left: 32px;
            content: "";
            width: 8px;
            border-radius: 50%;
            height: 8px;
            background-color: #28ca41;
          }
        }
      }
      .main {
        z-index: 10;
        height: 0;
        background: url("../../../images/fogo-e-lenha-cardapio.png");
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        transition: all 0.5s;

        &::before {
          position: absolute;
          opacity: 0.6;
          width: 100%;
          height: 100%;
          content: "";
          display: block;
          background-color: #222;
        }
        &:hover {
          height: 300px;
          img {
            opacity: 0;
          }
        }
        img {
          max-width: 500px;
          height: 300px;
        }
      }
    }
  }
`;
