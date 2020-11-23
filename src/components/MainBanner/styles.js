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
`;

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding: 60px 0;

    div {
      color: #fff;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      max-height: 550px;
      margin-bottom: 40px;

      p {
        color: #ddd;
        font-size: 36px;
        line-height: 1.3;
      }
      h1 {
        font-size: 54px;
        line-height: 0;
      }
    }
    .image-container {
      background-color: ${({ theme }) => theme.colors.third};
      width: 400px;
      height: 500px;
      display: block;
      position: relative;
      border-radius: 8px;
      text-align: center;
      top: -40px;
      img {
        top: 30px;
        left: 50%;
        margin-left: calc(-150px);
        border-radius: 3px;
        width: 300px;
        position: absolute;
        max-height: 500px;
      }
    }
  }
`;
