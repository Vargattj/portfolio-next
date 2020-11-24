import { Container } from "./styles";

export function SkillList() {
  return (
    <>
      <Container>
        <ul className="skill-list">
          <li>
            <img src="../../images/html-icon.svg" alt="" />
            <h3>HTML</h3>
            <p>
              HTML é uma linguagem de marcação utilizada na construção de
              páginas na Web.
            </p>
          </li>

          {/* <li></li> */}
          <li>
            <img src="../../images/css-icon.svg" alt="" />
            <h3>CSS</h3>
            <p>
              CSS é chamado de linguagem Cascading Style Sheet e é usado para
              estilizar elementos escritos em uma linguagem de marcação como
              HTML.
            </p>
          </li>
          <li>
            <img src="../../images/js-icon.svg" alt="" />
            <h3>JavaScript</h3>
            <p>
              JavaScript é uma linguagem de programação que permite implementar
              funcionalidades mais complexas em páginas web.
            </p>
          </li>
          <li>
            <img src="../../images/react-icon.svg" alt="" />
            <h3>React</h3>
            <p>
              React JS é uma biblioteca JavaScript para a criação de interfaces
              de usuário ou UI (user interface).
            </p>
          </li>
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
        </ul>
      </Container>
    </>
  );
}
