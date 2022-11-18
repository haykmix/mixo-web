import React, { useContext, useRef } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import FooterHomeOne from "../Home/FooterHome";
import Drawer from "../Mobile/Drawer";
import HeroNews from "../News/HeroNews";
import Forms from "./Forms";
import HomeHeader from "../Home/HomeHeader";
import { LanguageContext } from "../../context/LanguageContext";

function Contact() {
  const [drawer, drawerAction] = useToggle(false);
  const { language } = useContext(LanguageContext);

  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const featureRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeHeader
        text={language}
        action={drawerAction.toggle}
        homeRef={homeRef}
        serviceRef={serviceRef}
        featureRef={featureRef}
        teamRef={teamRef}
      />
      <HeroNews
        title="Contact"
        breadcrumb={[
          { link: "/", title: "home" },
          { link: "/contact", title: "contacto" },
        ]}
      />
      <Forms />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Contact;
