import Link from "next/link";
import { Container } from "./styles";

export default function ServiceItem() {
  return (
    <Container>
      <article>
        <div>
          <span>O que eu faço</span>
          <h2>Desenvolvimento Web</h2>
          <p>
            No processo de desenvolvimento Web, busco criar sites altamente
            performáticos e responsivos, além de garantir que sejam simples e
            práticos para seu público.
          </p>
          <Link href="/contato">
            <a>Entrar em contato</a>
          </Link>
        </div>
        <img src="../../images/web-dev.svg" alt="" />
      </article>
      <article className="right">
        <div>
          <span>O que eu faço</span>
          <h2>Desenvolvimento Mobile</h2>
          <p>
            Utilizando React Native construo aplicações nativas para IOS e
            Android.
          </p>
          <Link href="/contato">
            <a>Entrar em contato</a>
          </Link>
        </div>
        <img src="../../images/mobile-dev.svg" alt="" />
      </article>
      <article>
        <div>
          <span>O que eu faço</span>
          <h2>SEO</h2>
          <p>
            SEO é um conjunto de técnicas que visa posicionar uma página nos
            primeiros resultados de mecanismos de busca online, como o Google.
          </p>
          <Link href="/contato">
            <a>Entrar em contato</a>
          </Link>
        </div>
        <img src="../../images/seo.svg" alt="" />
      </article>
    </Container>
  );
}
