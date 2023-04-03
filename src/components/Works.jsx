import React from "react";
import styled from "styled-components";
import WebDisign from "./WebDising";
import { useState } from "react";
import SneakerOne from "./SneakerOne"
import SneakerTwo from "./SneakerTwo"
import SneakerThree from "./SneakerThree"
import SneakerFour from "./SneakerFour"

const data = [
  {name:"Origin", id:1 , chosed:false },
  {name:"Crown", id:4 , chosed:false },
  {name:"Republic", id:2 , chosed:false },
  {name:"Thread", id:3 ,  chosed:false },
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
width:90%;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 0.5px white;
position: relative;
border-radius:10px;
transition: all 0.8s ease-in-out;
padding-left:30px;
padding-top:10px;



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
  border-radius:15px;
  padding-left:30px;
  padding-top:10px;
  padding-bottom:10px;
  
}

&:hover{

  ::after{
   width:100%;
  }
}
&.active{
  ::after{
   width:100%;
   filter: drop-shadow( 0 0 40px #00d9ff);
   background-color:#00d9ff1f;
  }}

`
  const Right = styled.div`
  flex:1;
  position:relative;
`
 const Cart = styled.div`
 position:absolute;
 top:30px;
 right:5px;
  display: flex;
  height:50px;
  width:50px;
  border: 2px solid rgb(255, 255, 255 , 0.4);
  border-radius:50px;
  align-items:center;
  text-align:center;
  justify-content:center;
  transition: all 0.8s ease-in-out;
  padding:0 20px;
  &.active {
    border-radius:25px;
    justify-content:space-around;
  }
  & > * {
   margin-right:10px;
  }
 `
  const BuyContainer = styled.div`
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
    border:2px solid rgb(253, 253, 253);
    filter: drop-shadow( 0 0 40px #00d9ff);
  }
  :hover > i {
    background-color:#006eff9b;
    border:2px 0 2px 2px solid white;
  }
  :hover > div {
    background-color:#006eff9b;
  }
 `
 const BuyText = styled.div`
  display:flex;
  white-space: nowrap;
  height:46px;
  border-radius: 0 5px 5px 0;
  margin-right:2px;
  width:60%;
  overflow:hidden:
  display:flex;
  align-items:center;
  text-align:center;
  padding-right:5px;
  padding-left:5px;
  transition: all 0.8s ease-in-out;
 `
 const Carticon = styled.i`
 width:40%;
 height:46px;
 background-color:rgb(218, 78, 162);
 margin-left:2px;
 border-radius: 5px 0 0 5px;
 display:flex;
 align-items:center;
 justify-content:center;
 transition: all 0.8s ease-in-out;

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
  const [modelPrice , SetPrice] = useState(99);
  const [UserCartPrice , SetCartPrice] = useState(0);
  const [activeid , SetActive] = useState(0);
  const [UserCart , SetCart] = useState([]);
  const [CartClass , setCartClass] = useState("")

  function AddtoCart () {
    setCartClass("active")
    SetCart([...UserCart , {id:activeid , price:modelPrice}])
    const newPrice = UserCartPrice + modelPrice
    SetCartPrice(newPrice)
    console.log(UserCartPrice , modelPrice)
  }

  function ChoseModel (id)  {
    switch (id) {
      case 1:
        SetModel(<SneakerOne/>)
        SetPrice(99)
        SetActive(1)
        break;
      case 2:
        SetModel(<SneakerTwo/>)
        SetPrice(75)
        SetActive(2)
        
        break;
      case 3:
        SetModel(<SneakerThree/>)
        SetPrice(110)
        SetActive(3)
        break;
        case 4:
        SetModel(<SneakerFour/>)
        SetPrice(95)
        SetActive(4)
        break;

  }}

    return ( <Section>
      <Container>
        
      <Left>
        <List>
          {data.map((item) => {
            if (item.id == activeid){
              return <ListItem key={item.name}  text={item.name} className={"active"} onClick={() => {ChoseModel(item.id)}}>{item.name}</ListItem>
            }
            else {
              return <ListItem key={item.name}  text={item.name}  onClick={() => {ChoseModel(item.id)}}>{item.name}</ListItem>
            }
            
          })}
        </List>
      </Left>
      <Right>     
         <WebDisign ChosedModel= {model}/>
         <BuyContainer>
          <Buy onClick={() => AddtoCart()}>
          <Carticon>
            <Icon className="fa-solid fa-cart-shopping"/ >
          </Carticon>
          <BuyText>
            BUY NOW
          </BuyText>
        </Buy>
          <Price>{modelPrice}$</Price>
          </BuyContainer>
          <Cart className={CartClass}>
            <Icon className="fa-solid fa-cart-shopping"/ >
            {UserCartPrice}$  
            </Cart>
      </Right>
      </Container>
      
    </Section> );
}

export default  Works;