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
  /* background: rgba(255, 255, 255, 0.075); */
  margin: 8rem auto 4rem auto;
  grid-column-gap: 5rem;
  text-align: center;
  @media (max-width: 1100px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }
`;

function App() {
  const [about, setAbout] = React.useState(false);
  const [location, setLocation] = React.useState(false);
  const [specialize, setSpecialize] = React.useState(false);
  return (
    <>
      <div style={{ marginTop: "3rem", marginLeft: "3rem" }}>
        <motion.div
          style={{
            height: 30,
            width: 30,
            borderRadius: 5,
            background: "white",
            display: "inline-block",
            marginRight: "1.5rem",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 10,
          }}
        />

        <BouncingName
          letter="Steven Hofheins"
          size={24}
          delay={0.5}
          startPoint={-100}
          color="#FFFFFF"
        />
        <motion.div
          onHoverStart={{ scale: 1.2 }}
          style={{
            height: 30,
            width: 30,
            borderRadius: 5,
            background: "white",
            display: "inline-block",
            marginLeft: "1.5rem",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 10,
          }}
        />
      </div>
      <GridStyles>
        <AnimatePresence>
          <motion.div
            whileHover={{
              scale: 1.5,
              rotate: 360,
              fontSize: "12px",
              padding: "1rem",
            }}
            onHoverStart={() => setAbout(true)}
            onHoverEnd={() => setAbout(false)}
            style={{
              height: 200,
              width: 200,
              borderRadius: 5,
              background: "white",
              display: "inline-block",
              margin: "auto",
            }}>
            {!about && <span>About</span>}
            {about && (
              <span>
                Software Engineer with 6+ years of hands-on experience
                designing, developing, and implementing technical solutions for
                enterprise technology companies. Motivated Self-starter with a
                passion for full-stack web development focused on building
                innovative web applications and platforms from concept to
                production.
              </span>
            )}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            whileHover={{
              scale: 1.5,
              rotate: 360,
              fontSize: "12px",
              padding: "1rem",
            }}
            onHoverStart={() => setLocation(true)}
            onHoverEnd={() => setLocation(false)}
            style={{
              height: 200,
              width: 200,
              borderRadius: 5,
              background: "white",
              display: "inline-block",
              margin: "auto",
            }}>
            {!location && <span>About</span>}
            {location && (
              <span>
                Software Engineer with 6+ years of hands-on experience
                designing, developing, and implementing technical solutions for
                enterprise technology companies. Motivated Self-starter with a
                passion for full-stack web development focused on building
                innovative web applications and platforms from concept to
                production.
              </span>
            )}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            whileHover={{
              scale: 1.5,
              rotate: 360,
              fontSize: "12px",
              padding: "1rem",
            }}
            onHoverStart={() => setSpecialize(true)}
            onHoverEnd={() => setSpecialize(false)}
            style={{
              height: 200,
              width: 200,
              borderRadius: 5,
              background: "white",
              display: "inline-block",
              margin: "auto",
            }}>
            {!specialize && <span>About</span>}
            {specialize && (
              <span>
                Software Engineer with 6+ years of hands-on experience
                designing, developing, and implementing technical solutions for
                enterprise technology companies. Motivated Self-starter with a
                passion for full-stack web development focused on building
                innovative web applications and platforms from concept to
                production.
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </GridStyles>
    </>
  );
}

export default App;