import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "./styles";

export function SkillList() {
  return (
    <>
      <Container>
        <ul className="skill-list">
          <li>
            <img
              src="http://www.emilyridge.ie/wp-content/uploads/galway-website-design.png"
              alt=""
            />
            <h3>Website Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              sed eveniet temporibus repellendus iste at, veniam, sunt eum
              necessitatibus dolores unde minima molestias maiores voluptatum.
            </p>
            <button>
              Saber mais <i>{">"}</i>
            </button>
          </li>
          <li>
            <img
              src="http://www.emilyridge.ie/wp-content/uploads/galway-website-design.png"
              alt=""
            />
            <h3>Website Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              sed eveniet temporibus repellendus iste at, veniam, sunt eum
              necessitatibus dolores unde minima molestias maiores voluptatum.
            </p>
            <button>
              Saber mais <i>{">"}</i>
            </button>
          </li>
          <li>
            <img
              src="http://www.emilyridge.ie/wp-content/uploads/galway-website-design.png"
              alt=""
            />
            <h3>Website Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              sed eveniet temporibus repellendus iste at, veniam, sunt eum
              necessitatibus dolores unde minima molestias maiores voluptatum.
            </p>
            <button>
              Saber mais <i>{">"}</i>
            </button>
          </li>
          <li>
            <img
              src="http://www.emilyridge.ie/wp-content/uploads/galway-website-design.png"
              alt=""
            />
            <h3>Website Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              sed eveniet temporibus repellendus iste at, veniam, sunt eum
              necessitatibus dolores unde minima molestias maiores voluptatum.
            </p>
            <button>
              Saber mais <i>{">"}</i>
            </button>
          </li>
        </ul>
      </Container>
    </>
  );
}
