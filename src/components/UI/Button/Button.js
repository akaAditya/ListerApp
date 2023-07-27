import React from "react";

import "./Button.css";

const Button = (props) => {
  // const [isValid, setIsValid] = useState(true);
  // const buttonColorHandler = ()=>{
  //   if(props.onDisable){
  //     setIsValid(false)
  //   }
  //   else if(!props.onDisable){
  //     setIsValid(true)
  //   }
  // }
  return (
    // <button onClick={buttonColorHandler} type={props.type} className={`button ${!isValid?'invalid':''} `}>
    <button  type={props.type} className='button'>
      {props.children}
    </button>
  );
};

export default Button;
