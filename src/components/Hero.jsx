import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere ,OrbitControls} from "@react-three/drei";

const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width:768px) {
    height: 100vh;
  }
  `
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:768px) {
    align-items: center;
    width: 100vw;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
  }
  @media only screen and (max-width:1600px) {
    width: 100vw;
  }
`  
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
@media only screen and (max-width:768px) {
    flex:1;
    box-sizing: border-box;
    width: 95%;
    justify-content: left;
    gap:10px;
    }
    @media only screen and (max-width:1600px) and (min-width: 768px) {
    flex:1;
   gap:10px;
    box-sizing: border-box;
    margin-left: 5vw;
  }`

const Title = styled.h1`
font-size:74px;
@media only screen and (max-width:768px) {
    font-size: 50px;
    }`  

const WhatWeDo = styled.div`
display:flex;
align-items:center;
gap:10px;`  

const Line = styled.div`
width: 20px;
background-color: white;
height:3px;`  

const SubTitle = styled.h2`
color:#da4ea2;`  

const Desc = styled.p`
font-size:22px;
color:lightgrey;
@media only screen and (max-width:768px) {
    font-size: 20px;
    min-height: 50px;
    min-width: 95vw;
    }
    `

const Button = styled.button`
background-color:#da4ea2;
color:white;
font-weight:500;
width:100px;
padding:10px;
border-radius:5px;
border: none;
cursor:pointer;`

const Right = styled.div`
flex:3;
position:relative;
animation: animate 2s infinite ease alternate;
@media only screen and (max-width:768px) {
    flex: 1;
    width: 100vw;
  }
@media only screen and (max-width:1600px) {
    flex:1;
  }

@keyframes animate {
  to {
    transform:translateY(20px);
  }
}
@media only screen and (max-width:1600px) and (min-width: 768px) {
    flex:2;
  }   
`
const Img = styled.img`
width:800px;
height:600px;
object-fit:contain;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
@media only screen and (max-width:768px) {
    width:50vw;
    height: 50vh;
    }
    @media only screen and (max-width:1600px) {
    width: 50vw;
    height: 50vh;
  }
`    

function  Hero ({handleClickScrollToWho, handleClickScrollToWorks, handleClickScrollToContact}) {
 const [Quote , setQuote] = useState("Wait a bit");
 async function getQuotes() {
   const Quotes = await fetch("https://api.jsonbin.io/v3/b/644f29d0b89b1e229994ad9a").then(item => item.json())
   setQuote(Quotes.record.Quotes[Math.floor(Math.random() * (2))])
  }
useEffect(()=> {
  getQuotes()
}, [])
   
    
  
    return ( <Section>
      <Navbar handleClickScrollToWho= {handleClickScrollToWho} handleClickScrollToWorks={handleClickScrollToWorks} handleClickScrollToContact= {handleClickScrollToContact}/>
      <Container>
        <Left>
          <Title>Hey, I'm Egor.</Title>
          <WhatWeDo>
            <Line />
            <SubTitle>Random quote</SubTitle>
          </WhatWeDo>
          <Desc>{Quote}</Desc>
          <Button onClick={()=>{handleClickScrollToWho()}}>About me</Button>
        </Left>
        <Right>
        <Canvas>
        <OrbitControls enableZoom={false} enableRotate={false}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[2,1,1]}/>
        <Sphere args={[1,100,200]} scale={2.4}>
        <MeshDistortMaterial
        color="#450575" attach="material" distort={0.5} speed={2}
        />
        </Sphere>
     </Canvas>
          <Img src="./img/art.png"></Img>
        </Right>
      </Container>
      </Section>);
}

export default  Hero;