import { useRouter } from "next/router";
import Wrapper from "../components/Wrapper";
import Nav from "../components/nav";
import Banner from "../components/Banner";
import styled from "styled-components";
import { Footer } from "../components/Footer/";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ProjectList from "../components/ProjectList";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);

  const text =
    "For over 10 years I’ve been designing and developing websites. Below are some of my favourites.";
  const title = "My Projects";

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
