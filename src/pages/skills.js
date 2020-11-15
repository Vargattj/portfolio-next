import Banner from "../components/Banner";
import Nav from "../components/nav";
import { SkillList } from "../components/SkillList";
import Wrapper from "../components/Wrapper";
import { Footer } from "../components/Footer";

export default function Skills() {
  const text = "Everything I offer with a detailed overview of each. ";
  const title = "My Services";

  return (
    <>
      <Banner title={title} text={text}>
        <Wrapper>
          <Nav />
        </Wrapper>
      </Banner>
      <SkillList />
      <Footer />
    </>
  );
}
