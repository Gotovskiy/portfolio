import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works/Works"
import styled from "styled-components"
import React from "react"
import "./main.css"
import { useRef } from "react"
function App() {
  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url("./img/background.jpg");
    &::-webkit-scrollbar{
      display: none;
    }
  `
  const handleClickScroll = () => {
    console.log(innerRef)
    innerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const innerRef = useRef(null)
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works handleClickScroll= {handleClickScroll}/>
      <Contact MyRef={innerRef}/>
    </Container>
  )
}

export default App
