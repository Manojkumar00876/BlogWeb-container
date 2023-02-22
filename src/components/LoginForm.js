import "./LoginForm.css";
import { useState } from "react";
import { LoginApi } from "../ApiService/Api";
import { Storage } from "../ApiService/Storage";
import { isAutent } from "../ApiService/Auth";
import { Link, Navigate } from "react-router-dom";

const LoginForm = () => {
    const [inputs , setinputs] = useState({
        email:"",
        password:""
      });
    
      const HandleInputs = (event) => {
       
        setinputs({
          ...inputs,[event.target.name]:event.target.value
        })
    
      }
      const init = {
        email: { required: false },
        password: { required: false }
      };
      
    
      const[error , seterror ] = useState(init);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        let errors = init;
         let hasError = false; 
        if(inputs.email==""){
          errors.email.required=true;
          hasError=true;
       }
       if(inputs.password==""){
        errors.password.required=true;
        hasError=true;
     }   
     if(!hasError){
      LoginApi(inputs).then((response)=>{
        Storage(response.data.idToken);
       }).catch((err)=>{
        if (err.code="ERR_BAD_REQUEST") {
          seterror({...errors,custom_error:"Invalid Credentials."})
     }
       })
       seterror({...errors}) 
     }
         
 }
 if(isAutent()){
   return <Navigate to="/BlogEditor"/>  
 }
    
return (
        <div className="container">
        <form  onSubmit={handleSubmit}>
        <div className="heading">LOGIN</div>
        <div className="input-field">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"onChange={HandleInputs} name="email" />
         {error.email.required? (<span>*Email required</span>): null }
        </div>
        <div className="input-field">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"  onChange={HandleInputs} name="password" />
         { error.password.required  ?(<span>*Password required</span> ): null }
         { error.custom_error? (<span>{error.custom_error}</span>) :null }
        </div>
        <button type="submit" className="submitButton" >Submit</button>
        <section>Dont Have an account?<Link to="/Register">Register</Link></section>

      </form>
      </div>
    );
    
    };

    export default LoginForm;
    
