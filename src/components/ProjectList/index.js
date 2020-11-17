import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "./styles";

const projects = [
  {
    id: 1,
    name: "Fogo & Lenha",
    image: "https://caferati.me/images/portfolio/sky-go-desktop/list.webp",
    query: "fogo-e-lenha",
  },
  {
    id: 2,
    name: "Gatos",
    image: "https://caferati.me/images/portfolio/sky-go-desktop/list.webp",
    query: "gatos",
  },
  {
    id: 3,
    name: "Gatos",
    image: "https://caferati.me/images/portfolio/sky-go-desktop/list.webp",
    query: "gatos",
  },
  {
    id: 4,
    name: "Gatos",
    image: "https://caferati.me/images/portfolio/sky-go-desktop/list.webp",
    query: "gatos",
  },
];

export default function ProjectList({ setShowModal }) {
  const router = useRouter();
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleClickImg = (query) => {
    router.push({ path: "/portfolio", query: { port: query } });
    openModal();
  };

  useEffect(() => {
    router.query = "";
  }, []);

  return (
    <Container>
      {projects.map((project) => {
        return (
          <li key={project.id}>
            <a
              onClick={() => {
                handleClickImg(project.query);
              }}
            >
              <div className="bar">
                <i></i>
                <h2>{project.name}</h2>
              </div>
              <div className="main">
                <img src={project.image} alt="" />
              </div>
            </a>
          </li>
        );
      })}
    </Container>
  );
}
