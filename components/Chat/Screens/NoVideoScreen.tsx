import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useStateDesigner } from "@state-designer/react"
import { FaPhone } from "react-icons/fa"

import { catSliderScreen } from "../../../store/video"

const NoVideoScreen = () => {
  const catSliderScreenState = useStateDesigner(catSliderScreen)

  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", damping: 80 }}
    >
      <Container layout>
        <Title>{"No video connection"}</Title>
        <Tagline>
          Press{" "}
          <motion.span
            animate={{ scale: [1, 1.1] }}
            transition={{ yoyo: "Infinity", duration: 2 }}
            style={{
              color: "var(--primaryColorLight)",
              margin: "0.5rem 1rem 0 1rem",
            }}
          >
            <FaPhone size={22} />
          </motion.span>{" "}
          to start video/audio call
        </Tagline>
        <SlideshowButton
          onClick={() => catSliderScreenState.send("SHOW")}
          whileTap={{ y: 1 }}
          whileHover={{ y: -1 }}
        >
          Show me cats instead{" "}
          <span style={{ fontSize: "2.2rem", marginLeft: 7 }}>😺</span>
        </SlideshowButton>
      </Container>
    </Wrapper>
  )
}

export default NoVideoScreen

// Styles
const Wrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
  border-radius: 5px;
  z-index: 2;
`

const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 3rem;
  color: var(--tertiaryColor);
  background: -webkit-linear-gradient(
    145deg,
    var(--primaryColor),
    var(--tertiaryColor)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Tagline = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: var(--textColor);
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
`

const Button = styled(motion.button)`
  padding: 0.8em 1.5em;
  border: none;
  background: #28d728;
  color: #ffe9ff;
  font-size: 1.7rem;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: transparent;
`

const SlideshowButton = styled(Button)`
  background: linear-gradient(
    140deg,
    var(--primaryColor),
    var(--primaryColorDark)
  );
  color: var(--textColor);
`
