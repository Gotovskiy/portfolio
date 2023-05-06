import React from "react";
import styled from "styled-components";

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    @media only screen and (max-width:768px) {
      
    }
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
  @media only screen and (max-width:768px) {
    font-size: 50px;
    }

`


function LeftSide({data, ChoseModel , activeName}) {
    return (<Left>
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
      </Left> );
}

export default LeftSide;