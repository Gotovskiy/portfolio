import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display:flex;
  justify-content:center;
  @media only screen and (max-width:768px) {
    width: 100vw;
  }
  @media only screen and (max-width:1600px) {
    width: 100vw;
  }
  `

const Containter = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
padding: 10px 0px;
scroll-snap-align: center;
@media only screen and (max-width:768px) {
    width: 100%;
    margin-bottom: 4vh;
    }`

const Logo = styled.img`
height:100px;
border: 0px solid #fff;
border-radius:100px;
padding:-20px;
filter: drop-shadow(0 0 40px #c9bbfa);
@media only screen and (max-width:768px) {
    display: none;
    }`

const Links = styled.div`
display: flex;
align-items:center;
gap:20px;
@media only screen and (max-width:768px) {
    padding: 10px;
    margin: 0 auto;
    }


`
const List = styled.ul`
display:flex;
gap: 20px;
list-style:none;
@media only screen and (max-width:768px) {
    width: 100%;
    
  }`

const ListItem = styled.li`
cursor:pointer;
@media only screen and (max-width:768px) {
    border-bottom:2px solid rgba(255, 255, 255, 0.39);
  }`



function Navbar({handleClickScrollToWho, handleClickScrollToWorks, handleClickScrollToContact}) {
    return (
    <Section>
        <Containter>
        <Links>
        <Logo src="/logo.png"/>
        <List>
            <ListItem onClick={() => handleClickScrollToWho()} >About me</ListItem>
            <ListItem onClick={() => handleClickScrollToWorks()} >Shop</ListItem>
            <ListItem onClick={() => handleClickScrollToContact()}>Send order</ListItem>
        </List>
        </Links>
        </Containter>
    </Section> );
}

export default Navbar;