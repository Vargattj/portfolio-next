const { default: styled } = require("styled-components");

export const Container = styled.header`
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

        &::after {
          content: "";
          display: block;
          width: 50px;
          height: 8px;
          background-color: ${({ theme }) => theme.colors.second};
          border-radius: 50px;
          margin-top: 8px;
        }
      }
    }
    ul {
      display: flex;
      list-style: none;

      li,
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textSecond};
        font-size: 24px;
        & + li {
          margin-left: 30px;
        }
      }
    }
  }
`;
