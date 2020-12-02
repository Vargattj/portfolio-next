import styled from "styled-components";

export const MainPageServices = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  max-width: 1150px;
  margin: 0 auto;
  border: solid 1px #000;
  border-radius: 5px;
  & > div {
    max-width: 640px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: center;
      display: flex;
      line-height: 1.2;
      font-size: 32px;
      color: #353535;
    }
  }
  .main-page-button {
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
        width: 100px;
      }
    }
  }
  img {
    width: 500px;
  }
`;

export const MainPageSkills = styled.section`
  ul {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 1150px;
  }

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
`;
