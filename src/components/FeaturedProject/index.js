import Button from "../Button";
import { projects } from "../../projects";
import AwesomeSlider from "react-awesome-slider";
import { Container } from "./styles";

export function FeaturedProject() {
  const filterProject = projects.filter((project) => {
    return project.query === "fogo-e-lenha";
  });
  const project = filterProject[0];
  return (
    <Container>
      <AwesomeSlider className="slider">
        {project.details.images.map((image, key) => {
          return (
            <div key={key}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </AwesomeSlider>
      <div className="project-details">
        <h2>{project.name}</h2>
        <p>{project.details.about}</p>
        <ul>
          {project.details.tecnologies.map((tecnology) => (
            <li key={tecnology}>{tecnology}</li>
          ))}
        </ul>
        <Button>Ver todos os projetos</Button>
      </div>
    </Container>
  );
}
