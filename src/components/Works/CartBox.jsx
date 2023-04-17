import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = styled.div`
position:absolute;
top:30px;
right:-100px;
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
width:300px;
height:320px;
justify-content:space-between;
transition: width 0.3s ease-in-out, height 0.3s 0.4s ease-in-out;
}
&:hover >.CartItems {
  scrollbar-color: #ffffff89 transparent;
  transition: scrollbar-color 0.1s 0.8s linear;
}
&:not(:hover) >.CartItems {
  scrollbar-color: rgba(255, 225, 255, 0) transparent;
  transition: scrollbar-color 0.1s 0.1s linear;
}  

&:hover> div >.order-btn {
margin: 0 30px;
 border: 1px;
 opacity: 1;
 visibility: visible;
 transition: opacity 0.4s 0.5s ease-in-out , margin 0.1s 0.5s  linear;
}
&:not(:hover) div >.order-btn {
  transition: opacity 0.4s ease-in-out;
}  
&:not(:hover){
transition: width 0.4s 0.5s ease-in-out, height 0.4s ease-in-out;
}
`
const CartSum = styled.div`
width: 20%;
height: 30px;
line-height:30px;
text-align: right;
`
const Icon = styled.i`
width: 20%;
height: 30px;
cursor: pointer;
display: flex;
align-items: center;
`
const OrderButton = styled.button`
 width: 40%;
 height: 100%;
 border: 0px;
 overflow: hidden;
 opacity: 0;
 visibility: 0;
 background-color:#da4ea2;
color:white;
font-weight:500;
border-radius:5px;
border: none;
cursor:pointer;
filter: drop-shadow( 0 0 40px rgb(218, 78, 162));
:active {
  background-color:rgb(206, 56, 146);
}`


const CartContainer = styled.div`
 margin:10px auto;
 width:90%;
 height:10%;
 min-width: 80px;
 min-height: 30px;
 display:flex;
 align-items: center;
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


const EmptyCart = styled.div`
 width:240px;
 height:55px; 
 overflow: hidden;
 margin: 20px auto;
 align-items: center;
`




function CartBox({UserCart , DeleteItem , ChangeCount , UserCartPrice, handleClickScroll}) {
  console.log(UserCart)
return ( <Cart>
      <CartContainer>
      <Icon className="fa-solid fa-cart-shopping"/ >
      <OrderButton className="order-btn" onClick={() => {handleClickScroll()}}>Create Order</OrderButton>  
      <CartSum>{UserCartPrice}$</CartSum>
      </CartContainer> 
      <CartItems className="CartItems">
        {UserCart.length!==0 ?
        UserCart.map((item) => {return  <CartItem item={item} DeleteItem={DeleteItem} ChangeCount={ChangeCount}/>}):
        <EmptyCart>Your cart is empty</EmptyCart>
      }
        </CartItems> 
</Cart> );
}

export default CartBox;