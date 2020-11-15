import { Container } from "./styles";

export default function ServiceItem() {
  return (
    <Container>
      <article>
        <div>
          <span>O que fazemos</span>
          <h2>Website design & development</h2>
          <p>
            Strong performing websites that compliment your brand and visually
            impress your customers.
          </p>
          <a href="">Entre em contato</a>
        </div>
        <img src="../../images/web-dev.svg" alt="" />
      </article>
      <article className="right">
        <div>
          <span>O que fazemos</span>
          <h2>Mobile development</h2>
          <p>
            Strong performing websites that compliment your brand and visually
            impress your customers.
          </p>
          <a href="">Entre em contato</a>
        </div>
        <img src="../../images/mobile-dev.svg" alt="" />
      </article>
      <article>
        <div>
          <span>O que fazemos</span>
          <h2>Seo Otimization</h2>
          <p>
            Strong performing websites that compliment your brand and visually
            impress your customers.
          </p>
          <a href="">Entre em contato</a>
        </div>
        <img src="../../images/seo.svg" alt="" />
      </article>
    </Container>
  );
}
