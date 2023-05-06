import React from "react";
import styled from "styled-components";
import WebDisign from "./WebDising";
import CartBox from "./CartBox";

const Right = styled.div`
flex:1;
position:relative;
margin-bottom: 30px;
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
@media only screen and (max-width:768px) {
  top:-5%;
  right: auto;
  width:100vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  justify-content: center;
  gap: 10px;
    }
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


const SizeBox = styled.div`
height:40px;
width:125px; 
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
top:-27px;
right:15px;
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
right: 14px;
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







function RightSide({model,IncSize,DecSize,modelSize,CartCheck,modelPrice, handleClickScrollToContact}) {
    return ( 
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
         <CartBox handleClickScrollToContact={handleClickScrollToContact}/>
     </Right> );
}

export default RightSide;