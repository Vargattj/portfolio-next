import Nav from "../components/nav";
import MainBanner from "../components/MainBanner";
import { FeaturedProject } from "../components/FeaturedProject";
import { Footer } from "../components/Footer";
import {
  MainPageButton,
  MainPageServices,
  MainPageSkills,
} from "../styles/Home";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MainBanner>
        <Nav />
      </MainBanner>

      <SectionHeader>Projeto recente</SectionHeader>
      <FeaturedProject />
      <SectionHeader>Meus Serviços</SectionHeader>
      <MainPageServices>
        <div>
          <div>
            <h2>
              Crio aplicações mobile para Android e IOS, utilizando as mais
              novas tecnologias do mercado.
            </h2>
            <br />
            <h2>
              Não está interessado em APP's? Sem problema, conheça outros
              serviços que eu ofereço!
            </h2>
          </div>
          <Link href="/servicos">
            <MainPageButton>Ver mais serviços</MainPageButton>
          </Link>
        </div>
        <img src="../../images/mobile_phone1.svg" alt="" />
      </MainPageServices>
      <SectionHeader>Minhas Skills</SectionHeader>
      <MainPageSkills>
        <ul>
          <li>
            <img src="../../images/react-native-icon.svg" alt="" />
            <h3>React Native</h3>
            <p>
              React Native é uma biblioteca Javascript criada pelo Facebook. É
              usada para desenvolver aplicativos para os sistemas Android e iOS
              de forma nativa.
            </p>
          </li>
          <li>
            <img src="../../images/nodejs-icon.svg" alt="" />
            <h3>Node JS</h3>
            <p>
              Node.js trata-se de um software open-source, cross-platform, e de
              um runtime de JavaScript que execute código de JavaScript a nível
              backend e frontend.
            </p>
          </li>
          <li>
            <img src="../../images/css-icon.svg" alt="" />
            <h3>CSS</h3>
            <p>
              CSS é chamado de linguagem Cascading Style Sheet e é usado para
              estilizar elementos escritos em uma linguagem de marcação como
              HTML.
            </p>
          </li>
        </ul>
        <Link href="/skills">
          <MainPageButton>Ver todas as Skills</MainPageButton>
        </Link>
      </MainPageSkills>
      <Footer />
    </>
  );
}
