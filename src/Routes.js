import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ScrollToTop from "./components/Helper/ScrollToTop";
import Home from "./components/Home";
import SingleNews from "./components/News";

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
              <Route exact path="/news/single-news-0" component={SingleNews} />
              <Route exact path="/news/single-news-1" component={SingleNews} />
              <Route exact path="/news/single-news-2" component={SingleNews} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/error" component={Error} />
              <Route component={Error} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    </>
  );
}

export default Routes;
