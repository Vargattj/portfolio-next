import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from "./style";

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

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>sky to desktop</h1>

                <AwesomeSlider className="slider">
                  <div>
                    <img src="../../images/toph.jpg" alt="" />
                  </div>
                  <div>
                    <img src="../../images/hulkfome.png" alt="" />
                  </div>
                  <div>
                    <img src="../../images/3x.gif" alt="" />
                  </div>
                  <div>
                    <img src="../../images/armored.jpg" alt="" />
                  </div>
                </AwesomeSlider>
                <div>
                  <h2>About this project</h2>
                  <p>
                    Project developed as a contractor with the SKY GO (UK)
                    Desktop team. The Sky Go Desktop app is a React web
                    application build on top of the Electron framework.
                  </p>
                  <br />
                  <p>
                    At this project I acted as the lead UI/UX developer
                    specialist being the bridge between UI/UX Design, PO and the
                    UI development team. The main challenge was to reorganize
                    the UI structure from a react-virtualized grid into a pure
                    CSS one. Which improved drastically the scalability and
                    maintainability of the project.
                  </p>
                  <h2>
                    Technical Sheet
                    <span>
                      Code technologies I got involved with while working on
                      this project.
                    </span>
                  </h2>
                  <ul>
                    <li>UI/UX Architecture</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Webpack</li>
                    <li>Electron</li>
                  </ul>
                </div>
              </ModalContent>
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
