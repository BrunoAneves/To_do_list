'use client'
import styled from "styled-components";

export const Form = styled.form`
display: flex;
gap: 15px;
justify-content: center;
margin-top: -30px;
`


export const Input = styled.input`
box-sizing: border-box;
padding: 10px 25px ;
width: 650px;
border-radius: 10px;
background-color: #808080;
font-size: 1rem;
border: none;
color: #fff;
outline: none;
&:focus{
        background-color:rgb(167, 167, 167);
        transition: 0.2s;
    }
&::placeholder {
    
    color: #fff;
    font-weight: 300;
}
`

export const Button = styled.button`
padding: 15px;
width: 100px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
gap: 3px;
font-size: 1rem;
cursor: pointer;
background-color: #1E6F9F;
color: #fff;
border: none;
&:hover{
background-color:rgb(7, 81, 124);
transition: 0.3s;
}
`



