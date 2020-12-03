import { FaInstagram, FaLinkedin, FaEnvelope, FaGit } from "react-icons/fa";
import { Container, Separator } from "./styles";
import Button from "../Button";
import Wrapper from "../Wrapper";
import Link from "next/link";

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
            <h2>Vamos trabalhar juntos!</h2>
            <p>Gostaria de conversar sobre algum projeto?</p>
            <Link href="/contato">
              <a>
                <Button>Entrar em contato</Button>
              </a>
            </Link>
          </div>
          <ul>
            <li>
              <i>
                <FaEnvelope />
              </i>
              <Link href="/contato">
                <a>Vargattjh@gmail.com</a>
              </Link>
            </li>
            <li>
              <i>
                <FaInstagram />
              </i>
              <a href="https://www.instagram.com/vargattj/">On Instagram</a>
            </li>
            <li>
              <i>
                <FaLinkedin />
              </i>
              <a href="http://www.linkedin.com/in/jonatas-vargatt">
                On Linkedin
              </a>
            </li>
            <li>
              <i>
                <FaGit />
              </i>
              <a href="https://github.com/vargattj">On Github</a>
            </li>
          </ul>
        </Wrapper>
        <p>2020 Vargattj. All rights reserved.</p>
      </Container>
    </>
  );
}
