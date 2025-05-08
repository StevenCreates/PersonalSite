Below is how you could update the src/App.js file to give it a more modern look:

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import NineSquare from "./components/NineSquare";

const GridStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #F5F5F5;
`;

function App() {
  return (
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
  );
}

export default App;

const FrontPageStyles = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FirstName = styled.h1`
  font-size: 3rem;
  color: #232323;
`;

const SecondName = styled.h2`
  font-size: 2.5rem;
  color: #555553;
  background: -webkit-linear-gradient(#BDBDBD, #757575);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutMe = styled.div`
  font-size: 1.3rem;
  color: #616161;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
`;

const SecondGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
I've made several changes here. I changed the GridStyles to utilize flexbox and center its children both vertically and horizontally. I've also applied a softer, neutral background color. For the text styles, I reduced the font-size and applied more modern, simpler colors and added some text transformations for a sleeker look.