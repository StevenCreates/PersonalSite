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
      <Row>
        <a target='_none' href='https://github.com/StevenCreates'>
          <StyledIcons
            whileHover={{ scale: 1.1 }}
            href='https://github.com/StevenCreates'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
            <Github />
          </StyledIcons>
        </a>
        <StyledIcons
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
        <a target='_none' href='https://www.linkedin.com/in/steven-hofheins/'>
          <StyledIcons
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
            <LinkedIN />
          </StyledIcons>
        </a>
        <StyledIcons
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      </Row>
      <Row>
        <StyledIcons
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
        <a
          target='_none'
          href='https://medium.com/@steven_creates
        '>
          <StyledIcons
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
            <Medium />
          </StyledIcons>
        </a>
        <StyledIcons
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      </Row>
      <Row>
        <AnimatePresence>
          <a href='mailto:steven@stevencreates.tech'>
            <StyledIcons
              initial={{ scale: 1 }}
              animate={{
                scale: 1,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                type: "spring",
                delay: 0,
              }}>
              <Mail />
            </StyledIcons>
          </a>
        </AnimatePresence>
        <StyledIcons
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}></StyledIcons>
      </Row>
  </div>
  ); 
}

const Row = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcons = styled(motion.div)`
  min-height: 70px;
  max-height: 70px;
  min-width: 70px;
  max-width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #20232a;
  border-radius: 20px;
  margin: 0.75rem;
  box-shadow: 0px 10px 13px -7px #000000, 
              5px 5px 15px 5px rgba(0,0,0,0);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 10px 13px -7px #000000, 
                5px 5px 15px 5px rgba(0,0,0,0.2);
  }
  @media (max-width: 400px) {
    min-height: 60px;
    max-height: 60px;
    min-width: 60px;
    max-width: 60px;
    margin: 0.5rem;
  }
`;