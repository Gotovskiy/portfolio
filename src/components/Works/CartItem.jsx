import React from "react";
import styled from "styled-components";

const CartItemContainer = styled.div`
display:flex;
align-items:center;
text-align:center;
margin-right:10px;
width:240px;
height:55px; 
margin-top:2px;
justify-content:space-between;
background-color:#0000003e;
border:none;
padding:10px;
overflow: hidden;
scroll-snap-align: center;
`
const ItemBox = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:auto;
`
const CartImg = styled.img`
height:90%;
`
const ItemName = styled.h1`
 width:100%;
 height:45%;  
 text-align:left;
 font-size:14px;  
`
const ItemPrice = styled.h2`
  height:25%;  
  font-size:12px;
  text-align:left;
  margin-bottom:2px;  
`
const ItemSize = styled.h2`
  height:25%;  
  font-size:12px;
  text-align:left;
  margin-bottom:4px;     
`
const ButtonBox = styled.div`
height:95%;
width:20%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-end;

`
const Btngroup = styled.div`
display:flex;
justify-content:space-between;
width:100%;
`
const CountButton = styled.button`
    width:15px;
    height:15px;
    border-radius:50px;
    font-size:12px;
    border:none;
    display:flex;
    justify-content:center;
`
const Count = styled.h2`
font-size:14px;   
`
const DeleteButton = styled.button`  
    width:100%;
    text-align:right;
    height:15px;
    border:none;
    background-color:transparent;
    color:white;
    font-size:10px;
    cursor:pointer;
`


function CartItem({item , DeleteItem , ChangeCount}) {
    return (
    <CartItemContainer key={item.id}>
         <CartImg 
        src={item.img}/>
        <ItemBox>
        <ItemName>{item.name} </ItemName>
        <ItemPrice>{item.price}$</ItemPrice>
        <ItemSize>Size - {item.size}(EUR)</ItemSize>
        </ItemBox>
        
    <ButtonBox>
        <DeleteButton onClick={() => DeleteItem(item.id)}>X</DeleteButton>
        <Btngroup>
        <CountButton onClick={() => ChangeCount(item.id , "dec")}>-</CountButton>
        <Count>{item.count}</Count>
        <CountButton onClick={() => ChangeCount(item.id , "inc")}>+</CountButton>
        </Btngroup>
        
     </ButtonBox>
       
    </CartItemContainer>  );
}

export default CartItem;