import React from "react";
import styled from "styled-components";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
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
font-size:19px;
color:lightgrey;`

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
      <Container>
        <Right>
          {/* 3d model */}
          <Img src="./img/art.png"></Img>
        </Right>
        <Left>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line />
            <SubTitle>Who we Are</SubTitle>
          </WhatWeDo>
          <Desc>a creative group of designers and developers with a passion for the arts.</Desc>
          <Button>See our works</Button>
        </Left>
      </Container>
      </Section>);
}

export default  Hero;