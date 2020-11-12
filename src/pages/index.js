import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import MainBanner from "../components/MainBanner";

const Header = styled.header`
  /* color: ${({ theme }) => theme.colors.primary}; */
  nav {
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h2 {
      color: #fff;
      font-size: 26px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
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
    ul {
      display: flex;
      list-style: none;

      li {
        color: ${({ theme }) => theme.colors.textSecond};
        font-size: 24px;
        & + li {
          margin-left: 30px;
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <Header>
      <MainBanner>
        <Wrapper>
          <nav>
            <h2>Vargattj</h2>
            <ul>
              <li>Projetos</li>
              <li>Serviços</li>
              <li>Sobre</li>
              <li>Contato</li>
            </ul>
          </nav>
        </Wrapper>
      </MainBanner>
    </Header>
  );
}
