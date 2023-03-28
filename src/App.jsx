import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import styled from "styled-components"



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

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
