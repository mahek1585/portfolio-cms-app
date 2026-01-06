import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Header from "../../components/layout-ui/Header";
import HeroSection from "./HeroSection";
// import Logo from "./Logo";
import SkillSection from "../Work/SkillSection";
import LatestWork from "../Work/LatestWork";
// import Client from "../About/Client";
import Footer from "../../components/layout-ui/Footer";
import { Element } from "react-scroll";
import useHome from "../../../hooks/useHome";
import SplashScreen from "../SplashScreen";

const Home = () => {
  const location = useLocation();
  const { skillList, workList, isLoading } = useHome();
  useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

  const [splashLoading, setSplashLoading] = useState(true);
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    }
  }, [location.state]);

  useEffect(() => {
    if (isLoading === false) {
      setInterval(() => {
        setSplashLoading(false);
      }, 5000);
    }
  }, [isLoading]);
  return (
    <div >
      <SplashScreen splashLoading={splashLoading} />
      
      {splashLoading === false && (
        <>
          <Header />
          <Element name="home">
          <HeroSection />

          </Element>
          
           <SkillSection  skillList={skillList}/> 

          <Element id="work">
            <LatestWork workList={workList} />
             {/* <Client />  */}
            
          </Element>

          <Element id="contact">
            <Footer />
             
          </Element>
        </>
      )}
    </div>
  );
};

export default Home;
