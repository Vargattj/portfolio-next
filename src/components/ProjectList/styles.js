import styled from "styled-components";

export const Container = styled.ul`
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1040px;
  li {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
    list-style: none;
    max-width: 540px;
    cursor: pointer;

    &:last-child {
      margin-right: auto;
    }

    .main {
      .bar {
        height: 15px;
        width: 100%;
        background-color: #ccc;
        border-radius: 10px 10px 0 0px;
        display: flex;
        align-items: center;
        h2 {
          font-size: 12px;
          color: #888;
          margin: 0 auto;
        }
        i {
          position: relative;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          background-color: #ff5f57;
          left: 16px;

          &::after {
            position: absolute;
            left: 16px;
            content: "";
            width: 8px;
            border-radius: 50%;
            height: 8px;
            background-color: #ffbd2e;
          }
          &::before {
            position: absolute;
            left: 32px;
            content: "";
            width: 8px;
            border-radius: 50%;
            height: 8px;
            background-color: #28ca41;
          }
        }
      }
      transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      overflow: hidden;
      position: relative;
      &:hover {
        transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
        transform: scale(0.97);
        .descriptions {
          left: 0px;
          transition: all 0.7s ease-in-out;
          clip-path: circle(75%);

          ul {
            transform: translateX(0px);
          }
          button {
            transform: translateY(-45px);
          }
        }

        img {
          transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
          transform: scale(1.6) rotate(20deg);
          filter: blur(3px);
        }
      }
      img {
        max-width: 500px;
        height: 300px;
        transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      }
      .descriptions {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: rgba(80, 80, 80, 0.7);

        width: 100%;
        height: 100%;
        transition: all 0.7s ease-in-out;
        padding: 20px;
        box-sizing: border-box;
        clip-path: circle(0% at 100% 100%);
      }
      ul {
        display: flex;
        max-width: 300px;
        transform: translateX(-70px);
        margin: 0 auto;
        height: 100%;
        transition: all, 0.7s ease-in-out;
        align-items: center;
        flex-wrap: wrap;
        align-content: center;
        li {
          margin-top: 10px;
          display: inline-block;
          background-color: #333;
          font-size: 12px;
          font-weight: bold;
          color: #ddd;
          padding: 11px;
        }
      }
      button {
        transition: all 0.7s ease-in-out;
        margin: auto;
        border: 0;
        color: ${({ theme }) => theme.colors.third};
        background-color: ${({ theme }) => theme.colors.third};
        padding: 10px 15px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        font-weight: bold;
        transform: translateY(0px);
        color: #ddd;
      }
    }
  }

  @media only screen and (max-width: 1040px) {
    width: 100%;

    li {
      margin: 0 auto;
      a {
        margin-top: 20px;
        max-width: 340px;
        &:last-child {
          margin: center;
        }
        .main {
          img {
            width: 100%;
            height: 200px;
            border-radius: 0 0 10px 10px;
          }
        }
      }
    }
  }
`;
