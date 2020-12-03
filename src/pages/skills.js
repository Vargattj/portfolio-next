import Banner from "../components/Banner";
import Nav from "../components/nav";
import { SkillList } from "../components/SkillList";
import Wrapper from "../components/Wrapper";
import { Footer } from "../components/Footer";

export default function Skills() {
  const title = "Minhas Skills";
  const text =
    "Todas as linguagens, frameworks e bibliotecas que eu domino e utilizo no meu dia a dia de desenvolvedor";

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
