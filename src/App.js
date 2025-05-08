Sure! To modernize the theme, we can modify colors, font sizes, and any other visual properties as needed.

Here's one way we could update your application:

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
              <SecondName className='background-clip'>Creates</SecondName>
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
  margin-left: 5rem;
`;

const FirstName = styled.span`
  font-size: 50px;
  display: block;
  color: #1d3557;
`;

const SecondName = styled.span`
  font-size: 50px;
  display: block;
  color: #457b9d;
`;

const AboutMe = styled.span`
  font-size: 30px;
  color: #1d3557;
  font-family: "Roboto", sans-serif;
`;

const SecondGrid = styled.div`
  margin-top: 15rem;
  padding-top: 2rem;
  padding-left: 8rem;
`;

This will change the design to be cleaner and more modern, with a new color palette and simpler margins. This is just a suggestion and can be adjusted to meet your design needs.