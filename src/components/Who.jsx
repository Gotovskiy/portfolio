import React, { forwardRef } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Cube from "./Models/cube";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
   align-items: center;
    justify-content: space-between;
    @media only screen and (max-width:768px) {
    height: 100vh;
    width: 100vw;
    flex-direction: column;
  }
  `
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:768px) {
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    margin-left:10px;
  }
`  
const Left = styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
@media only screen and (max-width:768px) {
    flex:1;
  }`

const Title = styled.h1`
font-size:74px;
@media only screen and (max-width:768px) {
    font-size:50px;
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
font-size:24px;
color:lightgrey;
@media only screen and (max-width:768px) {
    font-size:20px;
  }`

const Button = styled.button`
background-color:#da4ea2;
color:white;
font-weight:500;
width:120px;
padding:10px;
border-radius:5px;
border: none;
cursor:pointer;`  

const Right = styled.div`
flex:3;
position:relative;
@media only screen and (max-width:768px) {
    display: none;
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

function  Who (props) {
    
    return ( <Section>
      <h1 ref={props.whoref}></h1>
      <Container>
        <Right>
        <Canvas camera={{fov:25,position:[5,5,5]}}>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cube/>
     </Canvas>
        </Right>
        <Left>
          <Title>About me</Title>
          <WhatWeDo>
            <Line />
            <SubTitle>Who am i</SubTitle>
          </WhatWeDo>
          <Desc>I'm 23 year old Front End Developer who focuses on writing clean, elegand and efficient code.</Desc>
          <Button onClick={() => props.handleClickScrollToWorks()}>See my shop</Button>
        </Left>
      </Container>
      </Section>);
}

export default forwardRef (Who);