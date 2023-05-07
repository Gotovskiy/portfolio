import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ContactCartItem from "./ContactCartItem";

const ContactCartContent = styled.div`
width:80%;
height: 75%;
border: 2px solid rgb(255, 255, 255 , 0.4);
border-radius:50px;
margin: auto;
display: flex;
flex-direction: column;
background-color:#0000003e;
@media only screen and (max-width:768px) {
  height: 600px;
  width: 97vw;
}
`
const EmptyCart = styled.h1`
margin: 30px auto;
font-size: 40px;
width: 390px;
@media only screen and (max-width:768px) {
  font-size: 22px;
  width: auto;
  text-align: center;
}
`
const AddedItems = styled.div`
transition: scrollbar-color 0.1s 0.8s linear;
width:90%;
height:100%;
margin: 0 auto;
margin-top: 10px;
overflow-y:auto;
overflow-x:hidden;
scrollbar-color: #ffffff89 transparent;
scrollbar-width: thin;
&:-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color:  #ffffff89 transparent;
}
`
const Price = styled.div`
margin: 40px auto;
text-align: center;
font-size: 30px;
@media only screen and (max-width:768px) {
  width: auto;
  font-size: 22px;
  text-align:center;
}
`

function ContactCartBox() {
    const CartItems = useSelector(state => state.cart.CartItems)
    const CartPrice = useSelector(state => state.cart.CartPrice)
    return ( 
        <ContactCartContent> 
      <AddedItems>
        {CartItems.length!==0 ?
        CartItems.map((item) => {return  <ContactCartItem item={item} key={item.id}/>}):
        <EmptyCart>Your cart is empty</EmptyCart>}
      </AddedItems>
      <Price>Total cost: {CartPrice} $</Price>
       </ContactCartContent>
     );
}

export default ContactCartBox;