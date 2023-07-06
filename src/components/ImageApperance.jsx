import React, { useState } from "react";

export default function ImageApperance(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={props._class}>
        {selectedImage && (
          <div>
            <img
              alt="not found"
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remover</button>
          </div>
        )}
        <br />

        <br />
        <input
          type="file"
          name="myImage"
          accept="image/*"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
        <p>{props.children}</p>
      </div>
    </>
  );
}
