import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeCartItem , changeCount } from "../../store/cartSlice";
const CartItemContainer = styled.div`
display:flex;
align-items:center;
text-align:center;
margin-right:10px;
width: 90%;
height:90px; 
margin-top:2px;
justify-content:space-between;
border:none;
padding:10px;
overflow: hidden;
@media only screen and (max-width:768px) {
  height: 25%;
  
}
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
 font-size:20px;  
`
const ItemPrice = styled.h2`
  height:25%;  
  font-size:16px;
  text-align:left;
  margin-bottom:2px;  
`
const ItemSize = styled.h2`
  height:25%;  
  font-size:16px;
  text-align:left;
  margin-bottom:4px;     
`
const ButtonBox = styled.div`
height:95%;
width:15%;
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
    width:20px;
    height:20px;
    border-radius:50px;
    font-size:15px;
    border:none;
    display:flex;
    justify-content:center;
`
const Count = styled.h2`
font-size:16px;
margin:2px ;
`
const DeleteButton = styled.button`  
    width:100%;
    text-align:right;
    height:20px;
    border:none;
    background-color:transparent;
    color:white;
    font-size:16px;
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
  font-size: 20px;
  position: absolute;
  top:0;
  right:0;
  border-radius: 30px;
  width: 35px;
  background-color: #da4ea2;
  filter: drop-shadow( 0 0 8px rgba(218, 78, 162, 0.63));
`
function ContactCartItem({item}) {
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

export default ContactCartItem;