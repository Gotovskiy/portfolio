import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeCartItem , changeCount } from "../../store/cartSlice";
const CartItemContainer = styled.div`
display:flex;
align-items:center;
text-align:center;
margin-right:10px;
width:270px;
height:55px; 
margin-top:2px;
justify-content:space-between;
background-color:#0000003e;
border:none;
padding:10px;
overflow: hidden;
`
const ItemBox = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:auto;
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
    cursor: pointer;
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
    font-size:12px;
    cursor:pointer;
`
const Imgbox = styled.div`
height: 90%;
position: relative;
`
const ModelImg = styled.img`
height:100%;
`
const SizeOnImg = styled.h1`
  font-size: 14px;
  position: absolute;
  top:0;
  right:0;
  border-radius: 30px;
  width: 25px;
  background-color: #da4ea2;
  filter: drop-shadow( 0 0 8px rgba(218, 78, 162, 0.63));
  text-align: center;
`

function CartItem({item}) {
  const dispatch = useDispatch();
    return (
    <CartItemContainer key={item.id}>
         <Imgbox> 
          <ModelImg src={item.img}/>
          <SizeOnImg>{item.size}</SizeOnImg>
          </Imgbox>
        <ItemBox>
        <ItemName>{item.name} </ItemName>
        <ItemPrice>{item.price}$</ItemPrice>
        <ItemSize>Size - {item.size}(EUR)</ItemSize>
        </ItemBox>
        
    <ButtonBox>
        <DeleteButton onClick={() => dispatch(removeCartItem(item.id))}>X</DeleteButton>
        <Btngroup>
        <CountButton onClick={() => dispatch(changeCount({id:item.id , operation:"dec"}))}>-</CountButton>
        <Count>{item.count}</Count>
        <CountButton onClick={() => dispatch(changeCount({id:item.id , operation:"inc"}))}>+</CountButton>
        </Btngroup>
        
     </ButtonBox>
       
    </CartItemContainer>  );
}

export default CartItem;