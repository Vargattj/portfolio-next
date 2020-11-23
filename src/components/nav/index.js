import Link from "next/link";
import { Container } from "./styles";

export default function Nav() {
  return (
    <Container>
      <nav>
        <h2>
          <Link href="/">
            <a>Vargattj</a>
          </Link>
        </h2>
        <ul>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Serviços</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
