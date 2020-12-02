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

    @media only screen and (max-width: 768px) {
      height: 0px;
    }
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
    padding: 20px 0 140px 0;
    justify-content: center;

    div {
      height: 250px;
      color: #fff;
      max-width: 974px;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-evenly;
      align-items: center;
      p {
        color: #ddd;
        font-size: 36px;
        line-height: 1.3;
      }
      h1 {
        font-size: 64px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .content {
      max-width: 90%;
      margin: 0 auto;
      display: flex;
      flex: 1;
      height: 280px;
      align-items: center;
      padding: 40px 0;
      padding-top: 60px;
      div {
        justify-content: center;
        h1 {
          margin-bottom: 20px;
          font-size: 40px;
        }
        p {
          font-size: 20px;
        }
      }
    }
    .custom-shape-divider-bottom-1605195288 svg {
      @media only screen and (max-width: 768px) {
        height: 0px;
      }
    }
  }
`;
