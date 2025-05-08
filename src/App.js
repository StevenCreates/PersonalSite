import React from "react";
import styled from "styled-components";

import NineSquare from "./components/NineSquare";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 2em;
  font-family: 'Roboto', sans-serif;
  background-color: #F2F5F7;
  color: #333;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    padding: 1em;
  }
`;

function App() {
  return (
    <>
      <GridStyles>
        <FrontPageStyles>
          <AnimateStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <FirstName aria-label="steven">Steven</FirstName>
            <SecondName aria-label="creates" className='background-clip'>Creates</SecondName>
          </AnimateStyled>
          <AnimateStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <AboutMe aria-label="software-engineer">Software Engineer</AboutMe>
          </AnimateStyled>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 1300px) {
    margin-top: 2em;
  }
`;

const FirstName = styled.span`
  font-size: 2.5em;
  color: #487e80;
  font-weight: bold;
`;

const SecondName = styled.span`
  font-size: 2.5em;
  background: linear-gradient(to right, #e6d2d1, #3e496c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const AboutMe = styled.span`
  font-size: 1.25em;
  color: #777;
  text-align: center;
`;

const SecondGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 1300px) {
    margin-top: 2em;
  }
`;

const AnimateStyled = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;