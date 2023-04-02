import React from "react";
import styled from "styled-components";
import WebDisign from "./WebDising";
import { useState } from "react";
import SneakerOne from "./SneakerOne"
import SneakerTwo from "./SneakerTwo"
import SneakerThree from "./SneakerThree"
import SneakerFour from "./SneakerFour"

const data = [
  {name:"Origin", id:1},
  {name:"NightJinx", id:4},
  {name:"Republic", id:2},
  {name:"Thread", id:3},
]

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
  `
  const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
  `
  const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.div`
font-size: 80px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 0.5px white;
position: relative;



::after{
  content: "${(props) => props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: #ffffff;
  filter: drop-shadow(0 0 40px #c9bbfa);
  width: 0px;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.8s ease-in-out;
}

&:hover{

  ::after{
   width:100%;
  }
}

`
  const Right = styled.div`
  flex:1;
  position:relative;
`
 const Bottom = styled.div`
  display: flex;
  height:100px;
  width:100px;
  background-color:red;
 `
  const CartContainer = styled.div`
  display:flex;
  position:absolute;
  height:50px;
  width:250px;
  top:85%;
  right:40%;
  justify-content: space-around;
  align-items: center;
 `
  const Buy = styled.div`
  display:flex;
  height:50px;
  width:130px;
  background-color:none;
  color: white;
  border-radius:7px;
  border:2px solid rgb(218, 78, 162);
  cursor:pointer;
  align-items:center;
  text-align:center;
  justify-content:space-between;
  transition: all 0.8s ease-in-out;
  :hover {
    background-color:rgb(218, 78, 162);
    border:solid white 2px;
  }
 `
 const BuyText = styled.div`
  white-space: nowrap;
  overflow:hidden:
  display:flex;
  align-items:center;
  text-align:center;
  padding-right:5px;
 `
 const Carticon = styled.i`
 width:40px;
 height:46px;
 background-color:rgb(218, 78, 162);
 margin-left:2px;
 border-radius: 5px 0 0 5px;
 display:flex;
 align-items:center;
 justify-content:center;

 `
 const Icon = styled.i`
 width: 20px;
 cursor: pointer;
`
 const Price = styled.h1`
   transition: all 0.8s ease-in-out;
 width:60px;
 height:40px;
 `


function Works () {

  const [model , SetModel] = useState(<SneakerOne/>);
  const [modelPrice , SetPrice] = useState("99$")
  function ChoseModel (id)  {
    switch (id) {
      case 1:
        SetModel(<SneakerOne/>)
        SetPrice("99$")
        break;
      case 2:
        SetModel(<SneakerTwo/>)
        SetPrice("75$")
        break;
      case 3:
        SetModel(<SneakerThree/>)
        SetPrice("110$")
        break;
        case 4:
          SetModel(<SneakerFour/>)
          SetPrice("95$")
        break;

  }}

    return ( <Section>
      <Container>
        
      <Left>
        <List>
          {data.map((item) => {
            return <ListItem key={item.name} text={item.name} onClick={() => {ChoseModel(item.id)}}>{item.name}</ListItem>
          })}
        </List>
      </Left>
      <Right>     
         <WebDisign ChosedModel= {model}/>
         <CartContainer>
          <Buy>
          <Carticon>
            <Icon className="fa-solid fa-cart-shopping"/ >
          </Carticon>
          <BuyText>
            BUY NOW
          </BuyText>
        </Buy>
          <Price>{modelPrice}</Price>
          </CartContainer>
      </Right>
      </Container>
      
      <Bottom>Hello</Bottom>
    </Section> );
}

export default  Works;