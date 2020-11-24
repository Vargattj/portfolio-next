import Link from "next/link";
import { Container } from "./styles";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <Container>
      <nav>
        <h2>
          <Link href="/">
            <a>Vargattj</a>
          </Link>
        </h2>
        <ul>
          <li className={router.pathname === "/portfolio" ? "active" : ""}>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className={router.pathname === "/skills" ? "active" : ""}>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li className={router.pathname === "/services" ? "active" : ""}>
            <Link href="/services">
              <a>Serviços</a>
            </Link>
          </li>
          <li className={router.pathname === "/sobre" ? "active" : ""}>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li className={router.pathname === "/contato" ? "active" : ""}>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
