import React, { useContext, useRef } from "react";
import useToggle from "../../Hooks/useToggle";
import Drawer from "../Mobile/Drawer";
import BlogHome from "./BlogHome";
import FaqHome from "./FaqHome";
import FeaturesHome from "./FeaturesHome";
import FooterHome from "./FooterHome";
import HeroHome from "./HeroHome";
import HomeHeader from "./HomeHeader";
import WhatsappHome from "./WhatsappHome";
import ServicesHome from "./ServicesHome";
import TeamHome from "./TeamHome";
import DashboardHome from "./DashboardHome";

import { LanguageContext } from "../../context/LanguageContext";
import Calculator from "../Calculator/Calculator";
import GalleryHome from "./GalleryHome";
import Contact from "../Contact/index";
import CollaborationHome from "./CollaborationHome";
import { FloatingButton } from "../FloatingButton";

function Home() {
  const [drawer, drawerAction] = useToggle(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  let lang = localStorage.getItem("language");
  changeLanguage(lang ? lang : "es");

  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const featureRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Drawer
        drawer={drawer}
        action={drawerAction.toggle}
        homeRef={homeRef}
        serviceRef={serviceRef}
        featureRef={featureRef}
        teamRef={teamRef}
        contactRef={contactRef}
        text={language}
      />
      <HomeHeader
        text={language}
        action={drawerAction.toggle}
        homeRef={homeRef}
        serviceRef={serviceRef}
        featureRef={featureRef}
        teamRef={teamRef}
        contactRef={contactRef}
      />
      <HeroHome
        text={language}
        innerRef={homeRef}
        featureRef={featureRef}
        contactRef={contactRef}
      />
      <ServicesHome text={language} innerRef={serviceRef} />
      <FeaturesHome text={language} innerRef={featureRef} />
      <DashboardHome text={language} />
      <GalleryHome text={language} />
      <TeamHome text={language} innerRef={teamRef} />
      <CollaborationHome text={language} />
      <BlogHome text={language} />
      <Contact innerRef={contactRef} text={language} />
      <WhatsappHome text={language} />
      <FaqHome text={language} />
      <Calculator text={language} />
      <Calculator text={language} />
      <FloatingButton />
      <FooterHome
        text={language}
        homeRef={homeRef}
        serviceRef={serviceRef}
        featureRef={featureRef}
        teamRef={teamRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default Home;
