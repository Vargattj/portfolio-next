import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";

export default function Portfolio() {
  const text =
    "For over 10 years I’ve been designing and developing websites. Below are some of my favourites.";
  const title = "My Projects";

  return (
    <Banner title={title} text={text}>
      <Wrapper>
        <Nav />
      </Wrapper>
    </Banner>
  );
}
