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
    justify-content: center;
    align-items: center;
    .contact {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        padding-top: 10px;
        color: #fff;
        font-size: 44px;
        line-height: 0;
      }
      & > p {
        color: #ddd;
        font-size: 24px;
      }
      button {
        width: 240px;
        margin: 0;
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
