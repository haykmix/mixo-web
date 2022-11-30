import React, { useContext, useRef } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import FooterHomeOne from "../Home/FooterHome";
import Drawer from "../Mobile/Drawer";
import HeroNews from "../News/HeroNews";
import Forms from "./Forms";
import HomeHeader from "../Home/HomeHeader";
import { LanguageContext } from "../../context/LanguageContext";

function Contact({innerRef, text}) {
  return (
    <>
      <Forms innerRef={innerRef} text={text}/>
    </>
  );
}

export default Contact;
