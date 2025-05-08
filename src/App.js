You can use React state to toggle the dark mode. You'll add a button on the page that will switch the dark mode on and off. Here's how you can modify the file to introduce the dark mode toggle button:

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import NineSquare from "./components/NineSquare";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
  }
`;

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <button
          onClick={() =>
            setTheme(
              theme.mode === "dark"
                ? { mode: "light" }
                : { mode: "dark" }
            )
          }
        >
          Toggle Dark Mode
        </button>
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
    </ThemeProvider>
  );
}

export default App;

// Styles remain unchanged.

In this implementation, we are using styled-components and ThemeProvider to toggle dark mode. This includes using the useState hook to track the current theme (light or dark), a GlobalStyle to apply universal CSS changes based on the theme (changing the background color and text color of the body), and a button that calls setTheme to switch between light and dark when clicked.