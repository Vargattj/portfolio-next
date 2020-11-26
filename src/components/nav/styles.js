import styled from "styled-components";

export const Container = styled.header`
  .active {
    &::after {
      width: 30px;
      border-radius: 50px;
    }
  }

  nav {
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h2 {
      a {
        color: #fff;
        font-size: 26px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding-top: 8px;
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
  }
`;
