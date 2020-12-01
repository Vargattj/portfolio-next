import styled from "styled-components";

export const Container = styled.section`
  article {
    & + article {
      margin-top: 200px;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      max-width: 500px;
      height: 270px;
      span {
        font-weight: bold;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.greenBlue};
        line-height: 0;
      }
      h2 {
        font-size: 50px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.greenBlue};
      }
      p {
        line-height: 1.5;
        font-size: 24px;
        color: #333;
        padding: 5px 0;
      }
      a {
        margin-top: 24px;
        text-decoration: none;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.second};
        font-weight: bold;
        text-transform: uppercase;
        &::after {
          content: "";
          height: 2px;
          width: 40px;
          background-color: ${({ theme }) => theme.colors.second};
          display: block;
          margin-top: 5px;
          transition: width 0.5s;
        }
        &:hover {
          &::after {
            width: 165px;
          }
        }
      }
    }

    img {
      width: 500px;
    }
  }

  article.right {
    background-color: "#121312";
    div {
    }
    img {
      order: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
    margin-top: 60px;

    article {
      & + article {
        margin-top: 80px;
      }
      flex-direction: column;
      div {
        margin-top: 60px;
        height: auto;
        h2 {
          font-size: 25px;
          line-height: 1.6;
        }
        p {
          font-size: 20px;
        }
      }
      img {
        width: 100%;
      }
    }
    article.right {
      img {
        order: 0;
      }
    }
  }
`;
