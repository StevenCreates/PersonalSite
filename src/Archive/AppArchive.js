Sure, here's the updated content with a more modern look by using modern colors, increasing font size, and changing the font:

(Note that everything else in your code will stay the same, except for the styling in the GridStyles constant and the style properties within the motion.div components)

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";
import BouncingName from "./BouncingName";
import NAME from "./Name";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 4px;
  max-width: 1400px;
  background: rgba(0, 20, 40, 0.2);  /* Changed background color */
  margin: 8rem auto 4rem auto;
  grid-column-gap: 5rem;
  text-align: center;
  @media (max-width: 1100px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }
`;

function App() {
// .... existing code

  return (
    <>
      // .... existing code

      <GridStyles>
        <AnimatePresence>
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 0,
              fontSize: "20px",  /* Increased font size */
              padding: "1.5rem", /* Increased padding */
            }}
            // .... existing code

            style={{
              // ... existing code
              background: "#282828",   /* Changed box color */
              color: "white",          /* Changed font color */
              // ... existing code
            }}>
            // .... existing code

          </motion.div>
        </AnimatePresence>
        //.... Repeat the same changes for the other motion.div components.
      </GridStyles>
    </>
  );
}

export default App;

This JavaScript file uses the CSS-in-JS library styled-components to handle the CSS. The CSS within the styled-components template literals can be edited just like regular CSS. 

Make sure the other elements follow this new modern theme as well. And don't forget to import and use the necessary fonts if you are planning to change the fonts.

Please, replace all of the existing content of src/Archive/AppArchive.js with the above code to implement the changes.