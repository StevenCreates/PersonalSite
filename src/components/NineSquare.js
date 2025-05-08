import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Github from "../Assets/Github";
import LinkedIN from "../Assets/LinkedIN";
import Mail from "../Assets/Mail";
import styled from "styled-components";
import Medium from "../Assets/Medium";

export default function NineSquare() {
  return (
    <Container>
      <IconBlock>
        <IconLink aria-label="Github" target='_none' href='https://github.com/StevenCreates'>
          <StyledIcon
            aria-hidden="true"
            whileHover={{ scale: 1.1 }}
            href='https://github.com/StevenCreates'
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
            <Github />
          </StyledIcon>
        </IconLink>
        <IconLink aria-label="LinkedIN" target='_none' href='https://www.linkedin.com/in/steven-hofheins/'>
          <StyledIcon
            aria-hidden="true"
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
            <LinkedIN />
          </StyledIcon>
        </IconLink>
      </IconBlock>
      <IconBlock>
        <IconLink
          aria-label="Medium"
          target='_none'
          href='https://medium.com/@steven_creates
        '>
          <StyledIcon
            aria-hidden="true"
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
            <Medium />
          </StyledIcon>
        </IconLink>
      </IconBlock>
      <IconBlock>
        <AnimatePresence>
          <IconLink aria-label="Email" href='mailto:steven@stevencreates.tech'>
            <StyledIcon
              aria-hidden="true"
              initial={{ scale: 1, rotate: 360 }}
              animate={{
                rotate: ["0deg", "6deg", "0deg", "-6deg", "0deg"],
                scale: 1,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                type: "spring",
                delay: 0,
              }}>
              <Mail />
            </StyledIcon>
          </IconLink>
        </AnimatePresence>
      </IconBlock>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
`;

const IconLink = styled(motion.a)`
  margin: 0 10px;
`;

const StyledIcon = styled(motion.div)`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 400px) {
    height: 40px;
    width: 40px;
  }
`;