import React from "react";
import styled from "styled-components";
import WebDisign from "./WebDising";

const data = [
  "Project Approval",
  "Analysis",
  "Design",
  "Implementation",
  "Integration"
  ,"Maintenance"
]

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
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
  `
  const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.div`
font-size: 80px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 0.5px white;
position: relative;



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
}

&:hover{

  ::after{
   width:100%;
  }
}

`
 
  const Right = styled.div`
  flex:1;
`
function Works () {
    return ( <Section>
      <Container>
      <Left>
        <List>
          {data.map((item) => {
            return <ListItem key={item} text={item}>{item}</ListItem>
          })}
        </List>
      </Left>
      <Right>     
         <WebDisign/>
      </Right>
      </Container>
    </Section> );
}

export default  Works;