import React from "react";
import Forms from "./Forms";

function Contact({innerRef, text}) {
  return (
    <>
      <Forms innerRef={innerRef} text={text}/>
    </>
  );
}

export default Contact;
