import styled from "styled-components";

export const Separator = styled.section`
  .custom-shape-divider-bottom-1605195288 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1605195288 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
    transform: rotateX(180deg);
  }

  .custom-shape-divider-bottom-1605195288 .shape-fill {
    fill: #ffffff;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  .content {
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    div {
      color: #fff;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      max-height: 550px;
      margin-bottom: 80px;

      p {
        color: #ddd;
        font-size: 34px;
        line-height: 1.3;
      }
      h1 {
        font-weight: bold;
        font-size: 48px;
      }
    }
    .image-container {
      background-color: ${({ theme }) => theme.colors.third};
      width: 500px;
      height: 400px;
      display: block;
      position: relative;
      border-radius: 8px;
      text-align: center;
      top: -40px;
      img {
        top: 30px;
        left: 50%;
        margin-left: calc(-200px);
        border-radius: 3px;
        width: 400px;
        position: absolute;
        height: 410px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    position: static;

    .content {
      width: 90%;
      margin: 0 auto;
      padding: 15px 0px;

      div {
        margin-top: 60px;
        min-height: 310px;
        justify-content: space-around;
        align-items: center;
        p {
          line-height: 1.2;
          font-size: 20px;
        }
        h1 {
          text-align: center;
          font-size: 34px;
        }
        button {
          font-size: 18px;
          padding: 18px 20px;
          width: 70%;
        }
      }
      .image-container {
        position: static;
        display: none;
      }
    }
  }
`;
