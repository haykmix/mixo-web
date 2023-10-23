import React from "react";
import whatsapp from "../assets/images/icon/whatsapp.png";

export const FloatingButton = () => {
  return (
    <section className="contact-floating-button">
      <a
        href="https://wa.me/34685564527?text=Hola Vicente, encantado..."
        target={"_blank"}
        rel="noreferrer"
      >
        <img src={whatsapp} alt="" width={60} height={60} />
      </a>
    </section>
  );
};
