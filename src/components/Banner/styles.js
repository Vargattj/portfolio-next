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
    padding: 70px 0 140px 0;
    justify-content: center;

    div {
      height: 300px;
      color: #fff;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      text-align: center;
      p {
        color: #ddd;
        font-size: 36px;
        line-height: 1.3;
      }
      h1 {
        font-size: 64px;
        line-height: 0;
      }
    }
  }
`;
