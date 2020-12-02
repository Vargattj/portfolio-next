import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";
import Button from "../components/Button";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaUsers,
} from "react-icons/fa";

import styled from "styled-components";

const ContactArea = styled.section`
  max-width: 1100px;
  margin: 60px auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  img {
    width: 480px;
  }
  h2 {
    i {
      margin-right: 10px;
    }
    margin-bottom: 20px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.third};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 560px;
    display: flex;
    flex-direction: column;
    margin-bottom: 70px;
    input,
    textarea {
      margin: 5px 0;
      padding: 20px;
      border-radius: 10px;
      background-color: #eee;
      border: 0;
      &::placeholder {
        color: #555;
      }
    }
    button {
      margin-top: 20px;
      width: 160px;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .linkedin {
      background-color: #016fac;
    }
    .whatsapp {
      background-color: #11887a;
    }
    .instagram {
      background: #f09433;
      background: -moz-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    }
    li {
      transition: transform 0.35s ease-in-out;
      width: 50px;
      height: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: #fff;
      border-radius: 50%;
      justify-content: center;
      margin-right: 20px;
      &:hover {
        transform: scale(1.05);
      }
      i {
        display: flex;
        align-items: center;
      }
    }
  }
  @media only screen and (max-width: 940px) {
  }
`;

const title = "Entre em contato";
const text =
  "Ficarei feliz em ouvir o que tem a dizer e responderei o mais rápido possível";
export default function Contato() {
  return (
    <div>
      <Banner title={title} text={text}>
        <Wrapper>
          <Nav />
        </Wrapper>
      </Banner>
      <ContactArea>
        <form
          action="https://getform.io/f/0d2cb561-6194-4c40-b745-bc98255d082a"
          method="POST"
        >
          <h2>
            <i>
              <FaEnvelope />
            </i>
            Mandar mensagem
          </h2>
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
        <div>
          <img src="../../../images/new_message.svg" alt="" />

          <ul>
            <h2></h2>
            <li className="linkedin">
              <i>
                <FaLinkedin />
              </i>
            </li>
            <li className="instagram">
              <i>
                <FaInstagram />
              </i>
            </li>
            <li className="whatsapp">
              <i>
                <FaWhatsapp />
              </i>
            </li>
          </ul>
        </div>
      </ContactArea>
    </div>
  );
}
