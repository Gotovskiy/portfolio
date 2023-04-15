import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

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

padding:0 20px;
cursor:pointer;
&:hover {
width:270px;
height:300px;
justify-content:space-between;
transition: width 0.4s ease-in-out, height 0.4s 0.5s ease-in-out;
}
&:hover >.CartItems {
  scrollbar-color: #ffffff89 transparent;
  transition: scrollbar-color 0.1s 0.8s linear;
}
&:not(:hover) >.CartItems {
  scrollbar-color: rgba(255, 255, 255, 0) transparent;
  transition: scrollbar-color 0.1s 0.1s linear;
}  
&:not(:hover){
transition: width 0.4s 0.5s ease-in-out, height 0.4s ease-in-out;
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
 width:80%;
 height:10%;
 display:flex;
 justify-content:space-between;
`

const CartItems = styled.div`
transition: scrollbar-color 0.1s 0.8s linear;
width:100%;
height:100%;
margin-bottom:25px;
overflow-y:auto;
overflow-x:hidden;
scrollbar-color: rgba(255, 255, 255, 0) transparent;
scrollbar-width: thin;
`
const Icon = styled.i`
width: 20px;
cursor: pointer;
`
const EmptyCart = styled.div`
 width:240px;
 height:55px; 
 overflow: hidden;
 margin: 20px auto;
 align-items: center;
`


function CartBox({UserCart , DeleteItem , ChangeCount , UserCartPrice}) {
  console.log(UserCart)
return ( <Cart>
      <CartContainer>
      <Icon className="fa-solid fa-cart-shopping"/ >
      <CartSum>{UserCartPrice}$ </CartSum> 
      </CartContainer> 
      <CartItems className="CartItems">
        {UserCart.length!==0 ?
        UserCart.map((item) => {return  <CartItem item={item} DeleteItem={DeleteItem} ChangeCount={ChangeCount}/>}):
        <EmptyCart>Your cart empty</EmptyCart>
      }
        </CartItems> 
</Cart> );
}

export default CartBox;