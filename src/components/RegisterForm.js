import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";
import { RegisterApi } from "../ApiService/Api";
import { Storage } from "../ApiService/Storage";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isAutent } from "../ApiService/Auth";



const RegisterForm = () => {
  const navigate = useNavigate();


  const [inputs , setinputs] = useState({
    email:"",
    username:"",
    password:""
  });

  const HandleInputs = (e) => {
   
    setinputs({
      ...inputs,[e.target.name]:e.target.value
    })

  }
  const init = {
    email: { required: false },
    username: { required: false },
    password: { required: false },
  };
  

  const[error , seterror ] = useState(init);

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = init;
    let hasError = false;
    if(inputs.username==""){
       errors.username.required=true;
       hasError=true;
    }
    if(inputs.email==""){
      errors.email.required=true;
      hasError=true;
   }
   if(inputs.password==""){
    errors.password.required=true
    hasError=true;
 }
 if(!hasError) {
  RegisterApi(inputs).then((response)=>{
    Storage(response.data.idToken);
   }).catch((err)=>{
     if(err.response.data.error.message=="EMAIL_EXISTS"){
               seterror({...errors,custom_error:"Already this email has been registered!"})
          }else if(String(err.response.data.error.message).includes('WEAK_PASSWORD')){
               seterror({...errors,custom_error:"Password should be at least 6 characters!"}) }
   })
   seterror({...errors})  
 }
          
  }
  if(isAutent()){
    navigate("/MarkDown") ;
  }
  return (
    <div className="container">
    <form  onSubmit={handleSubmit}>
    <div className="heading">REGISTER</div>
    <div className="input-field">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1"onChange={HandleInputs} name="email" />
     {error.email.required? (<span>*Email required</span>): null}
    </div>
    <div className="input-field">
      <label htmlFor="exampleInputUsername" className="form-label">Username</label>
      <input type="text" className="form-control" id="exampleInputUsername" onChange={HandleInputs} name="username"/>
     { error.username.required ? (<span>*Username required</span>) : null}
    </div>
    <div className="input-field">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"  onChange={HandleInputs} name="password" />
     { error.password.required  ?(<span>*Password required</span> ): null }
     { error.custom_error? (<span>{error.custom_error}</span>) :null }
    </div>
    <button type="submit" className="submitButton">Submit</button>
 <section>Already Have an account?<Link to="/">Login</Link></section>
  </form>
  </div>
);

};

export default RegisterForm;
