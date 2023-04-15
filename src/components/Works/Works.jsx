import React from "react";
import styled from "styled-components";

import { useState } from "react";
import SneakerOne from "../Models/SneakerOne"
import SneakerTwo from "../Models/SneakerTwo"
import SneakerThree from "../Models/SneakerThree"
import SneakerFour from "../Models/SneakerFour"
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";



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
        <LeftSide 
        data={data} 
        ChoseModel={ChoseModel} 
        activeName={activeName}/>
        <RightSide 
        model={model} 
        IncSize={IncSize} 
        DecSize={DecSize} 
        modelSize={modelSize} 
        CartCheck={CartCheck} 
        modelPrice={modelPrice} 
        UserCart={UserCart}  
        DeleteItem={DeleteItem}  
        ChangeCount={ChangeCount} 
        UserCartPrice={UserCartPrice}/>
      </Container>
      
    </Section> );
}

export default  Works;