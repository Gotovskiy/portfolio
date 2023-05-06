import React, { forwardRef } from "react";
import styled from "styled-components";

import { useState } from "react";
import SneakerOne from "../Models/SneakerOne"
import SneakerTwo from "../Models/SneakerTwo"
import SneakerThree from "../Models/SneakerThree"
import SneakerFour from "../Models/SneakerFour"
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/cartSlice";
import { changeCount } from "../../store/cartSlice";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    @media only screen and (max-width:768px) {
  height: 100vh;
    }
    
  `
  const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:768px) {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    flex-direction: column;
    }
`

const data = [
  {name:"Origin", id:1},
  {name:"Crown", id:4},
  {name:"Republic", id:2},
  {name:"Thread", id:3 },
]

function Works ({worksref , handleClickScrollToContact}) {
  const [model , SetModel] = useState(<SneakerOne/>);
  const [modelPrice , SetPrice] = useState(99);
  const [modelSize , SetSize] = useState(42);
  const [activeName , SetActive] = useState("Origin");
  const dispatch = useDispatch()
  const CartItems = useSelector(state => state.cart.CartItems)

  function IncSize () {
    if (modelSize < 47){SetSize(modelSize+1)}
    
  }
  function DecSize () {
    if (modelSize > 36){SetSize(modelSize-1)}
  }

  function CartCheck () {
    let itemFound = false;
   if (CartItems.length === 0 ){
    AddtoCart();
   }
   else {
     CartItems.map((item) => {
      if (Object.values(item).includes(activeName) && Object.values(item).includes(modelSize)) {
        dispatch(changeCount({id:item.id , operation:"inc"}))
        itemFound = true;
      }})
      if (!itemFound) {
        AddtoCart();
      }
   } 
  }

  function AddtoCart () {
    const itemImageSrc = `../img/${activeName}.png`
    const newItem = {
      id:Date.now(),
      name:activeName , 
      price:modelPrice,
      size:modelSize,
      img:itemImageSrc,
      count:1}
      dispatch(addCartItem(newItem))
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

    return ( 
    <Section>
      <h1 ref={worksref}></h1>
      <Container>
        <LeftSide 
        data={data} 
        ChoseModel={ChoseModel} 
        activeName={activeName}/>
        <RightSide
        handleClickScrollToContact={handleClickScrollToContact} 
        model={model} 
        IncSize={IncSize} 
        DecSize={DecSize} 
        modelSize={modelSize} 
        CartCheck={CartCheck} 
        modelPrice={modelPrice} />
      </Container>
      
    </Section> );
}

export default forwardRef (Works);