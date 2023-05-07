import React from "react";

const Validation = (values) =>{
 const errors={}

 const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
 const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

if(values.username === ' '){
   errors.username='Username is Required'
}

 if(values.email === ' '){
    errors.email='Email is Required'
 }else if(!email_pattern.test(values.email)){
    errors.email= 'Email is not correct'
 } 
 
 if(values.password === ''){
    errors.password='Password is Required'
 }else if(!password_pattern.test(values.password)){
    errors.password= 'Password is not correct'
 }

 if(values.confirm_password === ''  || values.confirm_password !== values.password){
   errors.confirm_password="Password doesn't match"
 }

 return errors;
}

export default Validation