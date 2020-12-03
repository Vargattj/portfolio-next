import { Container } from "./styles";
import { skills } from "../../skills";
export function SkillList() {
  return (
    <>
      <Container>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill.name}>
              <img src={skill.img} alt="" />
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
