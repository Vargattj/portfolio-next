import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";
import Button from "../components/Button";

import styled from "styled-components";

const ContactArea = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  display: flex;
  justify-content: space-around;
  img {
    width: 460px;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
    color: #0f3460;
    font-weight: bold;
  }

  form {
    width: 550px;
    display: flex;
    flex-direction: column;
    input,
    textarea {
      margin: 5px 0;
      padding: 20px;
      border-radius: 20px;
      background-color: #eee;
      border: 0;
      &::placeholder {
        color: #555;
      }
    }
    button {
      margin-top: 20px;
      width: 100%;
    }
  }
`;

export default function Contato() {
  const title = "Entre em contato";
  const text =
    "Ficarei feliz em ouvir o que tem a dizer e responderei o mais rápido possível";

  return (
    <div>
      <Banner title={title} text={text}>
        <Wrapper>
          <Nav />
        </Wrapper>
      </Banner>
      <ContactArea>
        <form>
          <h2>Mandar mensagem</h2>
          <input type="text" placeholder="Nome" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Mensagem"
          ></textarea>
          <Button>Enviar</Button>
        </form>
        <img src="../../../images/new_message.svg" alt="" />
      </ContactArea>
    </div>
  );
}
