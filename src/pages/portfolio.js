import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";
import styled from "styled-components";
import { Footer } from "../components/Footer/";

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 1020px;
  justify-content: space-between;
  margin: 0 auto;
  li {
    margin-bottom: 20px;
    transition: width 2s;

    a {
      .bar {
        height: 15px;
        width: 100%;
        background-color: #ccc;
        border-radius: 10px 10px 0 0px;
        display: flex;
        align-items: center;
        h2 {
          font-size: 12px;
          color: #888;
          margin: 0 auto;
        }
        i {
          position: relative;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          background-color: #ff5f57;
          left: 16px;

          &::after {
            position: absolute;
            left: 16px;
            content: "";
            width: 8px;
            border-radius: 50%;
            height: 8px;
            background-color: #ffbd2e;
          }
          &::before {
            position: absolute;
            left: 32px;
            content: "";
            width: 8px;
            border-radius: 50%;
            height: 8px;
            background-color: #28ca41;
          }
        }
      }
      .main {
        position: relative;
        z-index: 200;

        /* &:hover {
          &::before {
            opacity: 0.5;
            position: absolute;
            content: "";
            height: 100%;
            width: 100%;
            z-index: 20;
            background-color: #241245;
            top: 0;
            transition: 2s;
          } */
      }
    }
    img {
      max-width: 800px;
    }
    cursor: pointer;
  }
`;

function ProjectList() {
  const hoverImg = "initial";
  return (
    <Container hoverImg={hoverImg}>
      <li>
        <a>
          <div className="bar">
            <i></i>
            <h2>Fogo & Lenha</h2>
          </div>
          <div className="main">
            <img
              src="https://caferati.me/images/portfolio/sky-go-desktop/list.webp"
              alt=""
            />
          </div>
        </a>
      </li>

      <li>
        <a>
          <img
            src="https://caferati.me/images/portfolio/sky-go-desktop/list.webp"
            alt=""
          />
        </a>
      </li>

      <li>
        <a>
          <img
            src="https://caferati.me/images/portfolio/sky-go-desktop/list.webp"
            alt=""
          />
        </a>
      </li>
    </Container>
  );
}

export default function Portfolio() {
  const text =
    "For over 10 years I’ve been designing and developing websites. Below are some of my favourites.";
  const title = "My Projects";

  return (
    <>
      <Banner title={title} text={text}>
        <Wrapper>
          <Nav />
        </Wrapper>
      </Banner>
      <ProjectList />
      <Footer />
    </>
  );
}
