import Link from "next/link";
import { Container } from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Nav() {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(true);

  function useMedia(media) {
    const [match, setMatch] = useState(null);

    useEffect(() => {
      function changeMatch() {
        const { matches } = window.matchMedia(media);
        setMatch(matches);
      }
      changeMatch();
      window.addEventListener("resize", changeMatch);
      return () => {
        window.removeEventListener("resize", changeMatch);
      };
    }, [media]);
    // return match;
  }

  const mobile = useMedia("(max-width: 768px");
  return (
    <Container>
      {mobile && (
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
      )}
    </Container>
  );
}
