import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  /* transform: scale() */
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
      p {
        color: #ddd;
        font-size: 36px;
        /* padding: 20px 0; */
        line-height: 1.3;
      }
      h1 {
        font-size: 54px;
        line-height: 0;
      }
      button {
        outline: none;
        border: none;
        padding: 20px 30px;
        border-radius: 45px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.second};
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        width: 200px;
      }
    }
    .image-container {
      background-color: ${({ theme }) => theme.colors.cornFlower};
      width: 400px;
      height: 500px;
      display: block;
      position: relative;
      border-radius: 8px;
      text-align: center;
      top: -60px;
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
  &::after {
  }
`;
