import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";
import ServiceItem from "../components/ServiceItem";
import { Footer } from "../components/Footer";

export default function Services() {
  const text = "Conheça os principais serviços que eu ofereço";
  const title = "Meus Serviços";

  return (
    <>
      <Banner title={title} text={text}>
        <Wrapper>
          <Nav />
        </Wrapper>
      </Banner>
      <Wrapper>
        <ServiceItem />
      </Wrapper>
      <Footer />
    </>
  );
}
