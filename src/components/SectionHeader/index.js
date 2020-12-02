import { Container } from "./styles";

export default function SectionHeader({ children }) {
  return (
    <Container>
      <h2>{children}</h2>
    </Container>
  );
}
