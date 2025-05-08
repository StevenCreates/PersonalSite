import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// const QuickInfoStyles = styled(motion.AnimateTitle)`
//   margin-top: -1%;
//   z-index: 89;
//   padding: 1rem 1.25rem 1rem 1.25rem;
//   color: #d99a4e;
//   display: flex;
//   justify-content: center;
//   font-size: 36px;
//   .name-class {
//     font-size: 24px;
//     text-align: center;
//     font-weight: 800;
//     padding-bottom: 1rem;
//     color: #d99a4e;
//   }

//   .item-desc {
//     display: block;
//     font-weight: 600;
//     color: #1bc6b4;
//     font-size: 18px;
//   }
//   }
//   @media (max-width: 1100px) {
//     .name-class {
//       font-size: 24px;
//       text-align: center;
//       font-weight: 800;
//       padding-bottom: 1rem;
//       color: #d99a4e;
//     }
//   }
// `;

const AnimateTitle = styled(motion.div)`
  font-size: 36px;
  color: pink;
  padding: 1rem;
  display: inline-block;
`;

export const QuickInfo = () => {
  return (
    <AnimatePresence>
      {/* <AnimateTitle className='name-class'>Steven Hofheins</AnimateTitle> */}
      <AnimateTitle
        drag
        // initial={{ y: 0, opacity: 0.5 }}
        animate={{ y: [10, -5, 10, -5, 10] }}
        transition={{ repeat: Infinity, duration: 6, type: "spring" }}
        className='s1'>
        S
      </AnimateTitle>
      <AnimateTitle drag className='t1'>
        T
      </AnimateTitle>
      <AnimateTitle drag className='e1'>
        E
      </AnimateTitle>
      <AnimateTitle drag className='v1'>
        V
      </AnimateTitle>
      <AnimateTitle drag className='e2'>
        E
      </AnimateTitle>
      <AnimateTitle drag className='n1'>
        N
      </AnimateTitle>
      <AnimateTitle drag className='h1'>
        H
      </AnimateTitle>
      <AnimateTitle drag className='o1'>
        O
      </AnimateTitle>
      <AnimateTitle drag className='f1'>
        F
      </AnimateTitle>
      <AnimateTitle drag className='h2'>
        H
      </AnimateTitle>
      <AnimateTitle drag className='e3'>
        E
      </AnimateTitle>
      <AnimateTitle drag className='i1'>
        I
      </AnimateTitle>
      <AnimateTitle drag className='n2'>
        N
      </AnimateTitle>
      <AnimateTitle drag className='s2'>
        S
      </AnimateTitle>
    </AnimatePresence>
  );
};