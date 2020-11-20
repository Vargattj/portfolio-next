import { Container } from "./styles";
import Button from "../Button";

export function FeaturedProject() {
  return (
    <Container>
      <img
        src="https://sebkay.com/assets/img/projects/cazz-photography/featured.jpg"
        alt=""
      />
      <div className="project-details">
        <h2>Cazz Photography</h2>
        <p>
          A simple portfolio showcasing the different aspects of Cazz as a
          photographer.
        </p>
        <ul>
          <li>Logo Design</li>
          <li>Web design</li>
          <li>Static site development</li>
        </ul>
        <Button>Ver todos os projetos</Button>
      </div>
    </Container>
  );
}
