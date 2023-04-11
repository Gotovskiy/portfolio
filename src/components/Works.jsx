import React from "react";
import styled from "styled-components";
import WebDisign from "./WebDising";
import { useState } from "react";
import SneakerOne from "./SneakerOne"
import SneakerTwo from "./SneakerTwo"
import SneakerThree from "./SneakerThree"
import SneakerFour from "./SneakerFour"
import CartItem from "./CartItem";


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
  }}

`
  const Right = styled.div`
  flex:1;
  position:relative;
`

  const BuyContainer = styled.div`
  display:flex;
  position:absolute;
  height:80px;
  width:340px;
  top:85%;
  right:40%;
  justify-content: space-between;
  align-items: center;
 `
const Buy = styled.button`
background-color:#da4ea2;
color:white;
font-weight:500;
width:130px;
height:50px;
padding:10px;
border-radius:5px;
border: none;
cursor:pointer;
  filter: drop-shadow( 0 0 40px rgb(218, 78, 162));
  :active {
    background-color:rgb(206, 56, 146);
  }
 `

 const Icon = styled.i`
 width: 20px;
 cursor: pointer;
`
 const Price = styled.h1`
 width:60px;
 height:40px;
 `
 const Cart = styled.div`
 position:absolute;
 top:30px;
 right:0px;
 display: flex;
 flex-direction:column;
 height:50px;
 width:95px;
 border: 2px solid rgb(255, 255, 255 , 0.4);
 border-radius:50px;
 text-align:center;
 transition: width 0.8s ease-in-out, height 0.8s 0.8s ease-in-out;
 padding:0 20px;
 cursor:pointer;
 :hover {
  * {
  visibility:visible;
  }
 width:270px;
 height:300px;
 justify-content:space-between;
 }
`
const CartSum = styled.div`
width:30px;
text-align: right;
margin-right:4px;
margin-left:10px;
`
const CartContainer = styled.div`
margin:15px auto;
transition: all 0.8s ease-in-out;
  width:80%;
  height:10%;
  display:flex;
  justify-content:space-between;
`

const CartItems = styled.div`
width:100%;
height:100%;
margin-bottom:25px;
overflow-y: auto;
overflow-x:hidden;
scrollbar-color: #ffffffb3 transparent;
scrollbar-width: thin;
`

const SizeBox = styled.div`
height:40px;
width:120px; 
position:relative;
align-items:center;  
display: flex;
`
const ModelSize=styled.h1`
 width:120px;
 height:40px;
 margin-left: 2px;
`
const SizeButtonPlus = styled.button`
position:absolute;
top:-25px;
right:11px;
font-size:40px;
height:24px;
background-color:transparent;
border:none;
color:white;
cursor:pointer;
:active {
    color: #ffffff7f;
  }
`
const SizeButtonMinus = styled.button`
position:absolute;
bottom:-25px;
right: 10px;
font-size:40px;
height:24px;
transform: rotate(180deg);
background-color:transparent;
border:none;
color:white;
cursor:pointer;
:active {
    color: #ffffff7f;
  }
`



const data = [
  {name:"Origin", id:1 , chosed:false },
  {name:"Crown", id:4 , chosed:false },
  {name:"Republic", id:2 , chosed:false },
  {name:"Thread", id:3 ,  chosed:false },
]

function Works () {
  const [model , SetModel] = useState(<SneakerOne/>);
  const [modelPrice , SetPrice] = useState(99);
  const [modelSize , SetSize] = useState(42);
  const [activeName , SetActive] = useState("Origin");
  const [UserCartPrice , SetCartPrice] = useState(0);  
  const [UserCart , SetCart] = useState([]);

  function IncSize () {
    if (modelSize < 47){SetSize(modelSize+1)}
    
  }
  function DecSize () {
    if (modelSize > 36){SetSize(modelSize-1)}
  }

  function DeleteItem (id) {
  let deletedItem = UserCart.filter(item => item.id==id);
  const newPrice = UserCartPrice - deletedItem[0].price * deletedItem[0].count;
  SetCartPrice(newPrice);
  SetCart(
   UserCart.filter(item => item.id!=id)) 
  }

  function CartCheck () {
   if (UserCart.length === 0 ){
    AddtoCart();
   }
   else {
     UserCart.map((item) => {
      if (Object.values(item).includes(activeName) && Object.values(item).includes(modelSize)) {
        ChangeCount(item.id , "inc");
        return;
      }
      else {
        AddtoCart();
      }
     })
   } 
  }

  function AddtoCart () {
    const itemImageSrc = `../img/${activeName}.png`
    SetCart([...UserCart , {
      id:Date.now(),
      name:activeName , 
      price:modelPrice,
      size:modelSize,
      img:itemImageSrc,
      count:1}])
    const newPrice = UserCartPrice + modelPrice
    console.log(UserCart)
    SetCartPrice(newPrice)
  }

    function ChangeCount (id , operation) {
      const index = UserCart.findIndex((item) => item.id === id);
      const old_obj = UserCart[index];
      let newItem = {};
      let newCount = old_obj.count;
      let newPrice = UserCartPrice;
      if (operation == "inc") {
        ++newCount
        newItem = { ...old_obj, count: newCount };
        newPrice += old_obj.price; 
        SetCartPrice(newPrice)
      }
      else if (old_obj.count !== 1 && operation == "dec") {
        --newCount;
        newItem = { ...old_obj, count: newCount };
        newPrice -= old_obj.price; 
        SetCartPrice(newPrice)
      }
      else {
        return
      }
      const newArr = [
        ...UserCart.slice(0, index),
        newItem,
        ...UserCart.slice(index + 1),
      ]
      console.log(newArr)
      SetCart(newArr)
    }

  function ChoseModel (name)  {
    switch (name) {
      case "Origin":
        SetModel(<SneakerOne/>)
        SetPrice(99)
        SetActive("Origin")
        break;
      case "Crown":
        SetModel(<SneakerTwo/>)
        SetPrice(75)
        SetActive("Crown")
        
        break;
      case "Republic":
        SetModel(<SneakerFour/>)
        SetPrice(110)
        SetActive("Republic")
        break;
        case "Thread":
        SetModel(<SneakerThree/>)
        SetPrice(95)
        SetActive("Thread")
        break;

  }}

    return ( <Section>
      <Container>
        
      <Left>
        <List>
          {data.map((item) => {
            if (item.id == activeName){
              return <ListItem key={item.name}  text={item.name} className={"active"} onClick={() => {ChoseModel(item.name)}}>{item.name}</ListItem>
            }
            else {
              return <ListItem key={item.name}  text={item.name}  onClick={() => {ChoseModel(item.name)}}>{item.name}</ListItem>
            }
            
          })}
        </List>
      </Left>
      <Right>     
         <WebDisign ChosedModel= {model}/>
         <BuyContainer>
         <SizeBox>
          <SizeButtonPlus onClick={IncSize}>^</SizeButtonPlus>
          <ModelSize>Size {modelSize}</ModelSize>
          <SizeButtonMinus onClick={DecSize}>^</SizeButtonMinus>
        </SizeBox>
         <Buy onClick={() => CartCheck()}>
         <Icon className="fa-solid fa-cart-shopping"/ >
           Add to cart
        </Buy>
          <Price>{modelPrice}$</Price>
          </BuyContainer>
          <Cart>
            <CartContainer>
            <Icon className="fa-solid fa-cart-shopping"/ >
            <CartSum>{UserCartPrice}$ </CartSum> 
            </CartContainer> 
            <CartItems>{UserCart.map((item) => {
              return  <CartItem item={item} DeleteItem={DeleteItem} ChangeCount={ChangeCount}/>
            })}</CartItems> 
            </Cart>
      </Right>
      </Container>
      
    </Section> );
}

export default  Works;