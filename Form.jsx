import React from "react";
import Input from "./input";



function Form(props) {
  return (
    <form className="form">
    <Input type = "text" placeholder = "Username"/>
    <Input type = "Password" placeholder = "Password"/>

    {props.isUserRegistered === false && (<Input type = "Password" placeholder = "Confirm Password"/>) }

    <button type="submit"> {props.isUserRegistered ? "Login" : "Register"} </button>
</form>
  )}

export default Form;
