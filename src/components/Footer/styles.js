import styled from "styled-components";

export const Separator = styled.div`
  .custom-shape-divider-top-1605273349 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1605273349 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 118px;
  }

  .custom-shape-divider-top-1605273349 .shape-fill {
    fill: #fff;
  }
`;
export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  margin-top: 60px;
  & > div {
    padding: 70px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contact {
      h2 {
        line-height: 0;
        color: #fff;
        font-size: 44px;
      }
      & > p {
        color: #ddd;
        font-size: 24px;
        line-height: 1.3;
        padding: 16px 0;
      }
      button {
        width: 240px;
        margin-top: 0;
      }
    }
    ul {
      height: 100%;
      list-style: none;
      margin: 0 auto;
      li {
        margin: 25px 0;
        a {
          font-size: 20px;
          text-transform: uppercase;
          color: #ddd;
          text-decoration: none;
        }
      }
    }
  }
  p:last-child {
    /* border-top: 1px solid #ddd; */
    margin: auto 0;
    padding: 25px 0;
    background-color: #1a1a2e;
    text-align: center;
    color: #aaa;
  }
`;
