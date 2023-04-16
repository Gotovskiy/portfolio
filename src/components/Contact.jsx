import React, { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import Map from "./map";
import emailjs from '@emailjs/browser';


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


function Contact({}, innerRef) {
  const form = useRef();
  const [succses,setSuccses] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4l84xyj', 'template_96slbx8', form.current, 'HpTACSndSnSlSgBNt')
    .then((result) => {
        console.log(result.text);
        setSuccses(true)
    }, (error) => {
      setSuccses(false)
      console.log(error.text);
    });
  }
    return ( <Section innerRef={innerRef}>
      
      <Container>
      <Left>
        <Form onSubmit={handleSubmit} ref={form}>
        <Title >Create order</Title>
        <Input placeholder="Name" name="name"/>
        <Input placeholder="Email" name="email"/>
        <TextArea placeholder="Write your message" rows={10} name="message"/>
        <Button type="submit">Send</Button>
        {succses && "Your message has been sent. We'll get back to you soon :) "}
        </Form>
      </Left>
      <Right><Map/></Right>
      </Container>
      </Section> );
}

export default forwardRef(Contact) ;