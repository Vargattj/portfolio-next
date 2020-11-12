import { Container } from "./styles";
import Wrapper from "../Wrapper";

export default function MainBanner({ children }) {
  return (
    <Container>
      {children}
      <Wrapper>
        <div className="content">
          <div>
            <h1>Olá, Sou o Jônatas!</h1>
            <p>
              A web designer and developer from Southampton in the UK. I create
              bespoke websites to help people go further online.
            </p>
            <button>Meu Portfolio</button>
          </div>
          <div className="image-container">
            <img src="../../../images/perfil.jpg" alt="" />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}