import React, { forwardRef, useRef, useState } from "react";
import styled , { keyframes }from "styled-components";
import emailjs from '@emailjs/browser';
import ContactCartBox from "./ContactCartBox";
import { useSelector } from "react-redux";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    @media only screen and (max-width:768px) {
  margin-top:300px;
  height: 200vh;
  scroll-snap-align: none;

    }
    `
const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`
const spinner = keyframes` 
  100% {
    transform: rotate(360deg);
  }`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width:768px) {
  flex-direction: column-reverse;
    }
    @media only screen and (max-width:1600px) and (min-width: 768px) {
  width: 100vw;
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
 @media only screen and (max-width:1600px) and (min-width: 768px) {
    flex:2;
   gap:10px;
    box-sizing: border-box;
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
&.wrongInput {
  border: 2px solid red;
  animation: 1s ${shake} ease-out;
}
`

const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;
padding: 20px;
&.wrongInput {
  border: 2px solid red;
  animation: 1s ${shake} ease-out;
}
@media only screen and (max-width:1600px) and (min-width: 768px) {
    width: 100%;
  }
`

const TextArea = styled.textarea`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #dad5d5 ;
resize: none;
&.wrongInput {
  border: 2px solid red;
  animation: 1s ${shake} ease-out;
}
@media only screen and (max-width:768px) {
   height:40px; }
   @media only screen and (max-width:1600px) and (min-width: 768px) {
  }
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
:active {
  background-color:rgb(206, 56, 146);
}
&.disabled {
border: 2px solid #da4ea2;
background-color: #812d60;
cursor: default;
}

`
const Loader = styled.div`
    margin: 0 auto;
    width: 1rem;
    height: 1rem;
    vertical-align: -0.125em;
    border: 0.2em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: .75s linear infinite ${spinner};
    animation: .75s ${spinner} linear infinite ;
`

const Right = styled.div`
flex: 1;
display: flex;
@media only screen and (max-width:768px) {
  margin-top: 20px;
  scroll-snap-align: center;
    }
    @media only screen and (max-width:1600px) and (min-width: 768px) {
    flex:3;
  }
`




function Contact(props) {
  const form = useRef();
  const [succses,setSuccses] = useState(null);
  const [loading , setLaod] = useState(false);
  const CartItems = useSelector(state => state.cart.CartItems)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (succses == true) {
      return;}
    const checked = inputCheck() 
    if (checked){
      setLaod(true);
    const templete_obj = {
    name: form.current[0]._valueTracker.getValue(),
    message: form.current[2]._valueTracker.getValue(),
    email: form.current[1]._valueTracker.getValue(),
    order_str: JSON.stringify(CartItems)
    }
    console.log(form.current[2]._valueTracker.getValue())
    emailjs.send('service_4l84xyj', 'template_96slbx8', templete_obj, 'HpTACSndSnSlSgBNt')
    .then((result) => {
        setSuccses(true)
        setLaod(false);
    }, (error) => {
      setSuccses(false)
        setLaod(false);
    });}
    else return;
  }

 const inputCheck = () => {
  const classStr = " wrongInput";
  const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let error = false;
  for (let i = 0 ; i<=2 ; i++){
    form.current[i].className = form.current[i].className.replace(/ wrongInput/g, '');
    if(form.current[i]._valueTracker.getValue().length == 0){
      form.current[i].className += classStr;
      error = true;
    }
    else if(i == 1){
      if (!EMAIL_REGEXP.test(form.current[1]._valueTracker.getValue())) {
        form.current[1].className += classStr;
        error = true;
      }
    }
  }
  if (!error) {
    return true;
  }
  else {
    return false;
  } 

 } 



return ( <Section >
  
  <Container>
  <Left>
    <h1 ref={props.contactref}></h1>
    <Form onSubmit={handleSubmit} ref={form}>
    <Title >Create order</Title>
    <Input placeholder="Name" name="name"/>
    <Input placeholder="Email" name="email"/>
    <TextArea placeholder="Your wishes" rows={10} name="message"  />
    <Button className={(succses?"disabled":"")} type="submit">{loading?<Loader/>:"Send"}</Button>
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