import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import NineSquare from "./components/NineSquare";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #282c34;
  font-family: 'Source Sans Pro', sans-serif;
`;

function App() {
  return (
    <GridStyles>
      <FrontPageStyles>
        <AnimatePresence layout>
          <MotionDiv>
            <FirstName>Steven</FirstName>
            <SecondName>Creates</SecondName>
          </MotionDiv>
        </AnimatePresence>
        <AnimatePresence layout>
          <MotionDiv>
            <AboutMe>Software Engineer</AboutMe>
          </MotionDiv>
        </AnimatePresence>
      </FrontPageStyles>
      <SecondGrid>
        <NineSquare />
      </SecondGrid>
    </GridStyles>
  );
}

export default App;

const FrontPageStyles = styled.div`
  text-align: center;
  padding: 2rem;
  color: white;
`;

const MotionDiv = styled(motion.div)`
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
`;

const FirstName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
  color: #61DBFB;
`;

const SecondName = styled.h2`
  font-size: 2rem;
  margin-top: 0;
  color: #61DBFB;
`;

const AboutMe = styled.h3`
  font-size: 1.25rem;
  color: #DBDB61;
`;

const SecondGrid = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;
