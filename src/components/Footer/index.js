import { Container, Separator } from "./styles";
import Button from "../Button";
import Wrapper from "../Wrapper";

export function Footer() {
  return (
    <>
      <Container>
        <Separator>
          <div className="custom-shape-divider-top-1605273349">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
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
        <Wrapper>
          <div className="contact">
            <h2>Vamos trabalhar juntos</h2>
            <p>Gostaria de conversar sobre algum projeto?</p>
            <Button>Entrar em contato</Button>
          </div>
          <ul>
            <li>
              <i></i>
              <a href="">Vargattjh@gmail.com</a>
            </li>
            <li>
              <i></i>
              <a href="">On Instagram</a>
            </li>
            <li>
              <i></i>
              <a href="">On Linkedin</a>
            </li>
          </ul>
        </Wrapper>
        <p>2020 Vargattj. All rights reserved.</p>
      </Container>
    </>
  );
}
