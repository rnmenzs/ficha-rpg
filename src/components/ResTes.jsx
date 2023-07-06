import React from "react";

export default function ResTes(props){
    return <>
        <div className={props._class}>
            <input type="checkbox" name={props.boxName} id={props.boxId} value={props.boxValue}/>
            <input type="number" name={props.inputName} id={props.inputId}/>
            <label htmlFor={props.inputId}>{props.children}</label>
        </div>

    </>
}
