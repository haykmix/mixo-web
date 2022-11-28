import React, { useContext, useRef } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
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
import GalleryHome from './GalleryHome';
import Contact from '../Contact/index';

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
      {/* <HomeVideo /> */}
      <HeroHome text={language} innerRef={homeRef} featureRef={featureRef} contactRef={contactRef}/>
      <ServicesHome text={language} innerRef={serviceRef} />
      <FeaturesHome text={language} innerRef={featureRef}/>
      <DashboardHome text={language} />
      <GalleryHome />
      <TeamHome text={language} innerRef={teamRef}/>
      <BlogHome text={language} />
      <Contact innerRef={contactRef}/>
      <WhatsappHome text={language} />
      <FaqHome text={language} />
      <Calculator />
      <FooterHome />
      <BackToTop />
    </>
  );
}

export default Home;
