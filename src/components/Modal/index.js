import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import AwesomeSlider from "react-awesome-slider";
import { useRouter } from "next/router";
import "react-awesome-slider/dist/styles.css";

import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from "./style";
import { projects } from "../../projects";

export default function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  const router = useRouter();
  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const filterProjects = projects.filter((project) => {
    return project.query === router.query.port;
  });
  return (
    <>
      {showModal && (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {filterProjects[0] && (
                <ModalContent>
                  <h1>{filterProjects[0].name}</h1>
                  <AwesomeSlider className="slider">
                    {filterProjects[0].details.images.map((image) => {
                      return (
                        <div key={image}>
                          <img src={image} alt="" />;
                        </div>
                      );
                    })}
                  </AwesomeSlider>
                  <div className="description">
                    <h2>Sobre esse projeto</h2>
                    <p>{filterProjects[0].details.about}</p>
                    <br />
                    <h2>
                      Ficha técnica
                      <span>Tecnologias usadas no projeto:</span>
                    </h2>
                    <ul>
                      {filterProjects[0].details.tecnologies.map(
                        (tecnology) => {
                          return <li key={tecnology}>{tecnology}</li>;
                        }
                      )}
                    </ul>
                  </div>
                </ModalContent>
              )}
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  );
}
