import React from "react";

export default function Description(props) {
  return (
    <>
        <div className={props._class}>
            <textarea name="" id={props._id}></textarea>
            <p>{props.children}</p>
        </div>
    </>
  );
}
