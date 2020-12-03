import styled from "styled-components";

export const MainPageButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.second};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  width: fit-content;
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
      width: 100%;
    }
  }
`;

export const MainPageServices = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  max-width: 1150px;
  margin: 0 auto;
  border: solid 1px #000;
  border-radius: 5px;
  & > div {
    max-width: 620px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      display: flex;
      line-height: 1.2;
      font-size: 32px;
      color: #353535;
    }
    a {
      margin-top: 40px;
    }
  }
  img {
    width: 500px;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    & > div {
      h2 {
        font-size: 24px;
      }
    }
    img {
      display: none;
    }
  }
`;

export const MainPageSkills = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 1150px;
  ul {
    display: flex;
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
    }
  }
  a {
    margin: 20px auto;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    justify-content: center;
    ul {
      width: 100%;
      margin: 0 auto;
      flex-direction: column;
      flex: 1;
    }
  }
`;
