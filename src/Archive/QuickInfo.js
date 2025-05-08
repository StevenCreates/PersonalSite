import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const AnimateTitle = styled(motion.div)`
  font-size: 45px;
  color: #1a73e8;
  padding: 1rem;
  display: inline-block;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const QuickInfo = () => {
  return (
    <AnimatePresence>
      <AnimateTitle
        drag
        animate={{ y: [10, -5, 10, -5, 10] }}
        transition={{ repeat: Infinity, duration: 6, type: "spring" }}
        className='s1'>
        S
      </AnimateTitle>
      <AnimateTitle drag className='t1'>T</AnimateTitle>
      <AnimateTitle drag className='e1'>E</AnimateTitle>
      <AnimateTitle drag className='v1'>V</AnimateTitle>
      <AnimateTitle drag className='e2'>E</AnimateTitle>
      <AnimateTitle drag className='n1'>N</AnimateTitle>
      <AnimateTitle drag className='h1'>H</AnimateTitle>
      <AnimateTitle drag className='o1'>O</AnimateTitle>
      <AnimateTitle drag className='f1'>F</AnimateTitle>
      <AnimateTitle drag className='h2'>H</AnimateTitle>
      <AnimateTitle drag className='e3'>E</AnimateTitle>
      <AnimateTitle drag className='i1'>I</AnimateTitle>
      <AnimateTitle drag className='n2'>N</AnimateTitle>
      <AnimateTitle drag className='s2'>S</AnimateTitle>
    </AnimatePresence>
  );
};