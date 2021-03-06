import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";
import { Footer } from "../components/Footer/";

import styled from "styled-components";

const Article = styled.section`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-size: 48px;
    color: #0f3460;
    font-weight: bold;
  }
  p {
    line-height: 1.2;
    margin-top: 16px;
    font-size: 24px;
    color: #444;
  }
  hr {
    color: #eee;
    width: 100%;
    border: none;
    background-color: #eee;
    height: 1px;
    margin: 60px 0;
  }

  @media only screen and (max-width: 940px) {
    max-width: 90%;

    h2 {
      font-size: 36px;
    }
    p {
      text-align: start;
      font-size: 18px;
    }
  }
`;

export default function Sobre() {
  const title = "Sobre Mim";
  const text =
    "Conheça um pouco sobre mim e minha trajetória como desenvolvedor";

  return (
    <div>
      <Banner title={title} text={text}>
        <Wrapper>
          <Nav />
        </Wrapper>
      </Banner>
      <Article>
        <h2>Quem sou eu</h2>
        <p>
          Olá! Meu nome é Jônatas Vargat, sou um Web Design e desenvolvedor.
          Tenho 21 anos e atualmente moro na região metropolitana de Porto
          Alegre (RS).
        </p>
        <br />
        <p>
          Um profissional resiliente, pró-ativo e adaptável, com paixão por
          aprender novas tecnologias e dar vida à interfaces e aplicações.
        </p>
        <hr />
        <h2>Como comecei a programar</h2>
        <p>
          Minha primeira experiência com programação foi aos 14 anos, mas entrei
          de cabeça nesse mundo três anos depois, quando tive o primeiro contato
          com desenvolvimento Web.
        </p>
        <br />
        <p>
          No momento em que desenvolvi meu primeiro site, me apaixonei pelo
          processo de desenvolver algo do zero e posteriormente ver sua criação
          resolvendo problemas e contribuindo para terceiros.
        </p>
        <hr />
        <h2>Por que trabalhar comigo</h2>
        <p>
          Não há nada que eu goste mais do que projetar e desenvolver bons sites
          para pessoas legais.
        </p>
        <br />
        <p>
          Passei muitos anos tentando aperfeiçoar o que faço e embora nunca seja
          perfeito, faço o meu melhor para chegar bem perto.
        </p>
        <hr />
      </Article>
      <Footer />
    </div>
  );
}
