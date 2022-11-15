import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import AboutUsTwo from "./components/AboutUs/AboutUsTwo";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ScrollToTop from "./components/Helper/ScrollToTop";
import Home from "./components/Home";
import News from "./components/News";
import SingleNews from "./components/News/SingleNews";
import Service from "./components/Service";
import Shops from "./components/Shops";
import ShopDetails from "./components/Shops/Details";

function Routes() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  });
  return (
    <>
      <div className={`appie-visible ${loading === false ? "active" : ""}`}>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/news" component={News} />
              <Route exact path="/news/single-news" component={SingleNews} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/error" component={Error} />
              <Route exact path="/about-us-another" component={AboutUsTwo} />
              <Route exact path="/shops" component={Shops} />
              <Route exact path="/shops/shop-details" component={ShopDetails} />
              <Route component={Error} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    </>
  );
}

export default Routes;
