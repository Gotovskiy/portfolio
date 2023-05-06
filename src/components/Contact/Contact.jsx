import React, { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import ContactCartBox from "./ContactCartBox";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    @media only screen and (max-width:768px) {
  margin-top:300px;
  height: 200vh;
  scroll-snap-align: none;
    }
    `

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width:768px) {
  flex-direction: column-reverse;
    }
`
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 @media only screen and (max-width:768px) {
  justify-content: center;  
  scroll-snap-align: center;
 }
`

const Title = styled.h1`
 font-weight: 200;
 padding: 20px;
 @media only screen and (max-width:768px) {
  text-align:center;  
 }

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
@media only screen and (max-width:768px) {
   height:40px; }
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
display: flex;
@media only screen and (max-width:768px) {
  margin-top: 20px;
  scroll-snap-align: center;
    }
`


function Contact(props) {
  const form = useRef();
  const [succses,setSuccses] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4l84xyj', 'template_96slbx8', form.current, 'HpTACSndSnSlSgBNt')
    .then((result) => {
        setSuccses(true)
    }, (error) => {
      setSuccses(false)
    });
  }
return ( <Section >
  
  <Container>
  <Left>
    <h1 ref={props.contactref}></h1>
    <Form onSubmit={handleSubmit} ref={form}>
    <Title >Create order</Title>
    <Input placeholder="Name" name="name"/>
    <Input placeholder="Email" name="email"/>
    <TextArea placeholder="Your wishes" rows={10} name="message" />
    <Button type="submit">Send</Button>
    {succses && "Your message has been sent. We'll contact you within 10 minutes"}
    </Form>
  </Left>
  <Right>
  <ContactCartBox/>
  </Right>
  </Container>
  </Section> );
}

export default forwardRef(Contact) ;