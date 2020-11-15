import styled from "styled-components";

export const Container = styled.main`
  .skill-list {
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1050px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
      box-sizing: border-box;
      padding: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      list-style: none;
      max-width: 330px;
      background-color: #fff;
      -webkit-box-shadow: -1px 2px 9px 1px rgba(0, 0, 0, 0.24);
      -moz-box-shadow: -1px 2px 9px 1px rgba(0, 0, 0, 0.24);
      box-shadow: -1px 2px 9px 1px rgba(0, 0, 0, 0.24);

      h3 {
        color: ${({ theme }) => theme.colors.third};
        font-size: 20px;
        text-transform: uppercase;
        line-height: 0;
        margin-top: 25px;
        margin-bottom: 0;
      }
      p {
        color: #222;
        text-align: center;
        margin: 25px 0;
      }
      button {
        position: relative;
        border: none;
        padding: 15px 20px;
        width: 180px;
        background-color: ${({ theme }) => theme.colors.third};
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 12px;

        i {
          color: ${({ theme }) => theme.colors.second};
          position: absolute;
          right: 8px;
          top: 50%;
          width: 8px;
          margin-top: -7px;
        }
      }
      &:last-child {
        margin-right: auto;
        justify-self: center;
      }
    }
  }
`;
