import styled from "styled-components";

export const Container = styled.header`
  .menuicon {
    display: block;
    cursor: pointer;
    color: white;

    transform: rotate(0deg);
    transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

    &__bar,
    &__circle {
      fill: none;
      stroke: currentColor;
      stroke-width: 3;
      stroke-linecap: round;
    }
    &__bar {
      transform: rotate(0deg);
      transform-origin: 50% 50%;
      transition: transform 0.25s ease-in-out;
    }
    &__circle {
      transition: stroke-dashoffset 0.3s linear 0.1s;
      stroke-dashoffset: circumference(23); // 23 is the <circle>'s radius
      stroke-dasharray: circumference(23);
    }
  }

  .nav {
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h2 {
      padding: 10px;
      a {
        color: #fff;
        font-size: 26px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-decoration: none;
      }
      &::after {
        content: "";
        display: block;
        width: 50px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.second};
        border-radius: 50px;
        margin-top: 8px;
        transition: width 0.2s;
        cursor: unset;
      }
      &:hover {
        &::after {
          width: 30px;
        }
      }
    }
    ul {
      display: flex;
      list-style: none;

      li {
        padding: 10px 0;
        &::after {
          content: "";
          display: block;
          width: 0px;
          height: 6px;
          background-color: ${({ theme }) => theme.colors.second};
          transition: width 0.3s;
          margin: 0 auto;
          margin-top: 8px;
          border-radius: 50px;
        }
        &:hover {
          a {
            color: #fff;
            transition: color 0.1s;
          }
          &::after {
            content: "";
            display: block;
            width: 50px;
            height: 6px;
            background-color: ${({ theme }) => theme.colors.second};
            border-radius: 50px;
            margin: 0 auto;
            margin-top: 8px;
            transform: scaleX(50%);
          }
        }
        & + li {
          margin-left: 30px;
        }
      }
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textSecond};
        font-size: 24px;
      }
    }
    @media only screen and (max-width: 768px) {
    }
  }
`;

export const MobileNav = styled.nav`
  position: fixed;
  scroll-behavior: none;
  overflow: hidden;
  height: 100vh;
  width: ${(props) => (props.mobileMenu ? "100vw" : "0vh")};
  transition: all 0.3s ease;
  right: 0;
  display: block;
  background-color: ${({ theme }) => theme.colors.third};
  z-index: 1000;

  button {
    position: fixed;
    right: 20px;
    top: 50px;
    background-color: ${({ theme }) => theme.colors.second};
    width: 40px;
    height: 6px;
    border: none;
    border-radius: 4px;
    padding: 0;

    &::before {
      position: absolute;
      top: 10px;
      background-color: ${({ theme }) => theme.colors.second};
      content: "";
      width: 40px;
      height: 6px;
      display: block;
      border-radius: 4px;
    }
    &::after {
      position: absolute;
      bottom: 0px;
      background-color: ${({ theme }) => theme.colors.second};
      content: "";
      width: 40px;
      height: 6px;
      display: block;
      border-radius: 4px;
      margin: 10px 0;
    }
  }

  ul {
    height: 360px;
    display: flex;
    text-align: start;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 20px;
    top: 60px;
    top: calc(50% - 180px);

    a[href="${(props) => props.currentPage}"] {
      &::after {
        content: "";
        display: block;
        width: 60px;
        height: 6px;
        background-color: ${({ theme }) => theme.colors.second};
        margin-top: 8px;
        border-radius: 50px;
      }
    }

    li {
      width: fit-content;
      margin-bottom: 20px;
    }
    a {
      letter-spacing: 1px;
      font-size: 54px;
      font-weight: bold;
      text-transform: capitalize;
      text-decoration: none;
      /* color: ${({ theme }) => theme.colors.second}; */
      color: #eee;
    }
  }
`;

// 131410
