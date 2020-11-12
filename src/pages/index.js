import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import MainBanner from "../components/MainBanner";

export default function Home() {
  return (
    <MainBanner>
      <Wrapper>
        <Nav />
      </Wrapper>
    </MainBanner>
  );
}
