import React from "react";
import styled from "styled-components";
import Map from "./map";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    `

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;


    `

const Title = styled.h1`
 font-weight: 200;
 padding: 20px;

  `


const Input = styled.input`
padding: 20px;
background-color: #dad5d5;
border: none;
border-radius: 5px;
`

const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;
padding: 20px;
`

const TextArea = styled.textarea`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #dad5d5 ;
    `

const Button = styled.button`
padding: 20px;
background-color: #da4ea2;
color:white;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
border: none;
padding: 20px;
`

const Right = styled.div`
flex: 1;
`

function Contact() {
    return ( <Section>
      
      <Container>
      <Left>
        <Form>
        <Title>Contact Us</Title>
        <Input placeholder="Name"/>
        <Input placeholder="Email"/>
        <TextArea placeholder="Write your message" rows={10}/>
        <Button>Send</Button>
        </Form>
      </Left>
      <Right><Map/></Right>
      </Container>
      
      </Section> );
}

export default Contact;