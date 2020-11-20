import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import MainBanner from "../components/MainBanner";
import { FeaturedProject } from "../components/FeaturedProject";
import { SkillMain } from "../components/SkillMain";

import styled from "styled-components";
import Button from "../components/Button";

import { Separator } from "../components/Banner/styles";

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.third};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 120px 0;
  padding: 40px 0;
  height: 600px;

  & > div {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    h2 {
      text-align: center;
      display: flex;
      line-height: 1.3;
      font-size: 34px;
      color: #fff;
      font-weight: bold;
    }
    button {
      margin-top: 20px;
      width: 260px;
    }
  }
  img {
    width: 500px;
  }
`;

function MainPageServices() {
  return (
    <Container>
      <Separator />

      <div>
        <div>
          <h2>
            Crio aplicações mobile para Android e IOS, utilizando as mais novas
            tecnologias do mercado.
          </h2>
          <br />
          <h2>
            Não está interessado em APP's? Sem problema, conheça outros serviços
            que eu ofereço!
          </h2>
        </div>
        <Button>Ver mais</Button>
      </div>
      <img src="../../images/mobile_phone1.svg" alt="" />
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <MainBanner>
        <Wrapper>
          <Nav />
        </Wrapper>
      </MainBanner>
      <Wrapper>
        <FeaturedProject />
      </Wrapper>
      <MainPageServices />
      <SkillMain />
    </>
  );
}
