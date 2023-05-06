import Contact from "./components/Contact/Contact"
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
  const handleClickScrollToContact = () => {
    contactref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickScrollToWho = () => {
    whoref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickScrollToWorks = () => {
    worksref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const contactref = useRef(null);
  const whoref = useRef(null);
  const worksref = useRef(null);
  return (
    <Container>
      <Hero handleClickScrollToWho= {handleClickScrollToWho} handleClickScrollToWorks={handleClickScrollToWorks} handleClickScrollToContact= {handleClickScrollToContact}/>
      <Who whoref={whoref} handleClickScrollToWorks={handleClickScrollToWorks}/>
       <Works worksref={worksref} handleClickScrollToContact= {handleClickScrollToContact}/>
      <Contact contactref={contactref}/>
    </Container>
  )
}

export default App
