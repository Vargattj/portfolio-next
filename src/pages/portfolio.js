import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";
import { Footer } from "../components/Footer/";
import { useState } from "react";
import Modal from "../components/Modal";
import ProjectList from "../components/ProjectList";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const title = "Meus projetos";
  const text = "Esses são alguns dos projetos que desenvolvi nos últimos anos!";

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Banner title={title} text={text}>
        <Wrapper>
          <Nav />
        </Wrapper>
      </Banner>
      <ProjectList setShowModal={setShowModal} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <Footer />
    </div>
  );
}
