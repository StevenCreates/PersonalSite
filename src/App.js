import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import NineSquare from "./components/NineSquare";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

function App() {
  return (
    <>
      <GridStyles>
        <FrontPageStyles>
          <AnimatePresence layout>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}>
              <FirstName>Steven</FirstName>
              <SecondName className='background-clip'>Hofheins</SecondName>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence layout>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}>
              <AboutMe>Software Engineer</AboutMe>
            </motion.div>
          </AnimatePresence>
        </FrontPageStyles>
        <SecondGrid>
          <NineSquare />
        </SecondGrid>
      </GridStyles>
    </>
  );
}

export default App;

const FrontPageStyles = styled.div`
  margin-top: 15rem;
  margin-left: 20rem;
  @media (max-width: 1300px) {
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 500px) {
    margin-left: 2rem;
  }
`;

const FirstName = styled.span`
  font-size: 128px;
  display: block;
  color: #487e80;
  @media (max-width: 500px) {
    font-size: 89px;
  }
`;

const SecondName = styled.span`
  font-size: 128px;
  display: block;
  background: -webkit-linear-gradient(#e6d2d1, #3e496c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 500px) {
    font-size: 89px;
  }
`;

const AboutMe = styled.span`
  font-size: 45px;
  color: #ffffff;
  padding-left: 0.5rem;
  font-family: "Comfortaa", cursive;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const SecondGrid = styled.div`
  margin-top: 15rem;
  padding-top: 2rem;
  padding-left: 8rem;
  @media (max-width: 1300px) {
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0;
    padding-left: 0;
  }
  @media (max-width: 500px) {
    margin-left: 2rem;
  }
`;