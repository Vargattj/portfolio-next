import styled from "styled-components";

export const Container = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1040px;
  li {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    margin-right: 20px;
    margin-bottom: 20px;
    list-style: none;
    max-width: 550px;
    &:last-child {
      margin-right: auto;
      justify-self: center;
    }
    a {
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
        /* position: relative; */
        /* &:hover {
          &::before {
            opacity: 0.5;
            position: absolute;
            content: "";
            height: 100%;
            width: 100%;
            z-index: 20;
            background-color: #241245;
            top: 0;
            transition: 2s;
          } */
      }
    }
    img {
      max-width: 100%;
    }
    cursor: pointer;
  }
`;
