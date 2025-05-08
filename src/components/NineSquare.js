To make the website look more modern, you can apply a sleek, minimalistic style by providing more space around the icons, using fewer and more neutral colors, and starting with icons at a non-zero scale. Here's the modified src/components/NineSquare.js:

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Github from "../Assets/Github";
import LinkedIN from "../Assets/LinkedIN";
import Mail from "../Assets/Mail";
import styled from "styled-components";
import Medium from "../Assets/Medium";

export default function NineSquare() {
  return (
    <div>
      <Row style={{ display: "flex", justifyContent: "space-around", padding: "20px", backgroundColor: "#f1f1f1" }}>
        <IconLink
          target='_none'
          href='https://github.com/StevenCreates'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Github />
        </IconLink>

        <IconLink
          target='_none'
          href='https://www.linkedin.com/in/steven-hofheins/'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <LinkedIN />
        </IconLink>

        <IconLink
          target='_none'
          href='https://medium.com/@steven_creates'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Medium />
        </IconLink>
        
        <AnimatePresence>
          <a href='mailto:steven@stevencreates.tech'>
            <IconLink
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <Mail />
            </IconLink>
          </a>
        </AnimatePresence>

      </Row>
    </div>
  );
}

const Row = styled.div`
  margin-bottom: 2rem;
`;

const IconLink = styled(motion.a)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 1px 6px -2px rgba(0,0,0,0.2), 0px 1px 10px 0px rgba(0,0,0,0.14), 0px 2px 4px -1px rgba(0,0,0,0.12);
  @media (max-width: 400px) {
    width: 45px;
    height: 45px;
  }
`;

I changed the background color of rows to `#f1f1f1`, a light grey, to give a modern look. I also converted icons to circle and added shadows for a smoother effect. The `width` and `height` values represent the size of each icon, and they become smaller for narrower (less than 400px width) screens. The icons are now starting from a 0.8 scale and grow a little when page loads or cursor hovers over them, which gives a more dynamic effect. Finally, I wrapped each icon with its anchor tag (`<a>`), making the whole icon clickable instead of just the link text.