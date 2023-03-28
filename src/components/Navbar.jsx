import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display:flex;
  justify-content:center;
  `

const Containter = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
padding: 10px 0px;
scroll-snap-align: center;`
const Logo = styled.img`
height:100px;
border: 0px solid #fff;
border-radius:100px;
padding:-20px;
filter: drop-shadow(0 0 40px #c9bbfa);`

const Links = styled.div`
display: flex;
align-items:center;
gap:20px;

`
const List = styled.ul`
display:flex;
gap: 20px;
list-style:none;`
const ListItem = styled.li`
cursor:pointer;`

const Button = styled.button`
cursor:pointer;
padding:10px;
background-color:#da4ea2;
color:white;
border:none;
border-radius:5px;`

const Icons = styled.div`
display:flex;
align-items:center;
gap:20px;`

const Icon = styled.i`
    width: 20px;
    cursor: pointer;
`

function Navbar() {
    return (
    <Section>
        <Containter>
        <Links>
        <Logo src="./img/logo.png"/>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
        </List>
        </Links>
        <Icons>
        <Icon className="fa-solid fa-magnifying-glass"></Icon>
            <Button>Hire now</Button>
        </Icons>
        </Containter>
    </Section> );
}

export default Navbar;