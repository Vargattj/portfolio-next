import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";

export default function Services() {
  const text = "Everything I offer with a detailed overview of each. ";
  const title = "My Services";

  return (
    <Banner title={title} text={text}>
      <Wrapper>
        <Nav />
      </Wrapper>
    </Banner>
  );
}
