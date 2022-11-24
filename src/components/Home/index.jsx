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
import ProjectHome from "./ProjectHome";
import ServicesHome from "./ServicesHome";
import TeamHome from "./TeamHome";
import TrafficHome from "./TrafficHome";

import { LanguageContext } from "../../context/LanguageContext";
import Calculator from "../Calculator/Calculator";

function Home() {
  const [drawer, drawerAction] = useToggle(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  let lang = localStorage.getItem("language");
  changeLanguage(lang ? lang : "es");

  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const featureRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <>
      <Drawer
        drawer={drawer}
        action={drawerAction.toggle}
        homeRef={homeRef}
        serviceRef={serviceRef}
        featureRef={featureRef}
        teamRef={teamRef}
      />
      <HomeHeader
        text={language}
        action={drawerAction.toggle}
        homeRef={homeRef}
        serviceRef={serviceRef}
        featureRef={featureRef}
        teamRef={teamRef}
      />
      {/* <HomeVideo /> */}
      <HeroHome text={language} innerRef={homeRef} />
      <ServicesHome text={language} innerRef={serviceRef} />
      <FeaturesHome text={language}/>
      <TrafficHome />
      {/* <TestimonialHome /> */}
      <TeamHome />
      <FaqHome text={language} />
      <BlogHome text={language} />
      <ProjectHome />
      <Calculator />
      <FooterHome />
      <BackToTop />
    </>
  );
}

export default Home;
