import { Container, Separator } from "./styles";
import Wrapper from "../Wrapper";
import Button from "../../components/Button";

export default function MainBanner({ children }) {
  return (
    <>
      <Container>
        {children}
        <Wrapper>
          <div className="content">
            <div>
              <h1>Olá, Sou o Jônatas!</h1>
              <p>
                Um profissional resiliente, pró-ativo e adaptável, com paixão
                por aprender novas tecnologias e dar vida à interfaces e
                aplicações.
              </p>
              <Button>Meu Portfolio</Button>
            </div>
            <div className="image-container">
              <img src="../../../images/avatar.jpeg" alt="" />
            </div>
          </div>
        </Wrapper>
        <Separator>
          <div className="custom-shape-divider-bottom-1605195288">
            <svg
              data-name="Layer 1"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </Separator>
      </Container>
    </>
  );
}
