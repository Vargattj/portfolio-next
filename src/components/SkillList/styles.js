import styled from "styled-components";

export const Container = styled.main`
  .skill-list {
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 1050px;
    li {
      transition: transform 0.35s ease-in-out;
      &:hover {
        transform: rotateX(7deg) translateY(-6px) scale(1.05);
      }

      img {
        width: 200px;
        height: 190px;
        padding: 16px;
      }
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
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
        font-weight: bold;
        font-size: 24px;
      }
      p {
        color: #222;
        line-height: 1.3;
        text-align: center;
        margin: 25px 0;
        font-size: 18px;
      }

      &:last-child {
        margin-right: auto;
        justify-self: center;
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    .skill-list {
      width: 840px;
      li {
        width: 400px;
        margin-right: 20px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .skill-list {
      width: 90%;
      li {
        margin: 20px auto;
        width: 500px;
      }
    }
  }
`;
