import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    useNavigate,
    Route,
    Link
  } from "react-router-dom";


function LandingPage()
{
    const navigate = useNavigate();

    const [data, setData] = useState({
        email:"",
        senha:""
    })

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e){
        e.preventDefault();
        axios.post("http://localhost:5000/sign-in", {
            email: data.email,
            senha: data.senha
        })
        .then(

            
            
        )
        .catch(
            
              alert("Usuario e/ou senha invalidos...")
            
          )
    }

    return(

        <div className="mobileLayout">
            

            <Logo src={require('./logo.png')}/>
    

            <Form onSubmit={(e) => submit(e)}>
                <TextInput onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder='Email'/>
                <TextInput onChange={(e) => handle(e)} id="senha" value={data.senha} type="password" placeholder='Senha'/>
                <Button type="submit">Entrar</Button>
            </Form>



            <Register to="/register">Primeira vez? Cadastre-se!</Register>






        </div>
        
        );
}

export default LandingPage;

const Logo = styled.img`
height: 100px;
font-size: 50px;
font-weigth: bold;
margin-left: 150px;
text-align: center;
color: white;
margin-top: 220px;
margin-bottom: 20px;
`;

const Form = styled.form`
width: 400px;
margin: auto;`

const TextInput= styled.input`
width: 400px;
border-radius: 20px;
height: 80px;
border-style: none;
margin-bottom: 15px;
::placeholder {
    color: black;
    font-size: 20px;
    text-transform: uppercase;
  }
  
`
const Button = styled.button`
width: 400px;
border-radius: 20px;
height: 80px;
border-style: none;
margin-bottom: 15px;
background-color: #A328D6;
text-align: center;
color: white;
font-weight: bolder;
font-size: 30px;`

const Register = styled(Link)`
color: white;
font-weight: bold;
font-size: 20px;
text-decoration: none;
margin-top: 50px;
margin-left: 175px;
`