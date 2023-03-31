import React from "react";
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
  `
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`  
const Left = styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;`

const Title = styled.h1`
font-size:74px;`  

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
font-size:24px;
color:lightgrey;`

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

@keyframes animate {
  to {
    transform:translateY(20px);
  }
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
margin:auto;`    

function  Hero () {
    
    return ( <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line />
            <SubTitle>What we Do</SubTitle>
          </WhatWeDo>
          <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
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