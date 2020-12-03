import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "./styles";
import { projects } from "../../projects";

export default function ProjectList({ setShowModal }) {
  const router = useRouter();

  const handleClickImg = (query) => {
    router.push({ path: "/portfolio", query: { port: query } });
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (router.asPath === "/portfolio") {
      null;
    } else {
      console.log(router);
      setShowModal(true);
    }
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
              <div className="main">
                <div className="bar">
                  <i></i>
                  <h2>{project.name}</h2>
                </div>
                <img src={project.details.images[0]} alt="" />
                <div class="descriptions">
                  <ul>
                    {project.details.tecnologies.map((tecnology, key) => (
                      <li key={key}>{tecnology}</li>
                    ))}
                  </ul>
                  <button>Ver Detalhes</button>
                </div>
              </div>
            </a>
          </li>
        );
      })}
    </Container>
  );
}
