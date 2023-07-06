import React from "react";

export default function Attributes(props) {
  return (
    <>
      <div className={props._class}>
        <label htmlFor={props.inputId}>{props.children}</label>
        <input className={props._classInputBonus} type={props.inputType} name={props.inputNameBonus} id={props.inputIdBonus}/>
        <input className={props._classInputAttribute} type={props.inputType} name={props.inputName} id={props.inputId}/>
      </div>
    </>
  );
}