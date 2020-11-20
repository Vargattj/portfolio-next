import { Container, Separator } from "./styles";

export default function Banner({ children, title, text }) {
  return (
    <Container>
      {children}
      <div className="content">
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
      <Separator>
        <div className="custom-shape-divider-bottom-1605195288">
          <svg
            data-name="Layer 1"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Separator>
    </Container>
  );
}
