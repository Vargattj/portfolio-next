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
    padding: 40px 0;
    padding-bottom: 60px;
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
      }
      & > p {
        margin-left: 5px;
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
        display: flex;
        align-items: center;
        svg {
          height: 20px;
          width: 20px;
          color: #e94560;
          margin-right: 7px;
        }
        a {
          font-size: 18px;
          text-transform: uppercase;
          color: #ddd;

          font-weight: bold;
          text-decoration: none;
        }
        &:hover {
          a {
            color: #fff;
          }
        }
      }
    }
  }
  p:last-child {
    margin: auto 0;
    padding: 25px 0;
    background-color: #1a1a2e;
    text-align: center;
    color: #aaa;
  }

  @media only screen and (max-width: 768px) {
    & > div {
      padding: 20px 0;
      flex-direction: column;
      ul {
        li {
          margin: 0;
        }
      }
      .contact {
        padding: 10px;
        h2 {
          font-size: 36px;
        }
        p {
          font-size: 20px;
          margin: 20px 0;
        }
        height: 200px;
        button {
          align-self: center;
          padding: 15px 15px;
        }
      }
      ul {
        text-align: start;
        margin: 40px 0;
        li {
          margin-bottom: 15px;
        }
      }
    }

    .custom-shape-divider-top-1605273349 svg {
      height: 0px;
    }
  }
`;
