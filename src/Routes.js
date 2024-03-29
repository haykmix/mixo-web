import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SingleNews from "./components/News";
import AdvancedCalculator from "./components/Calculator/AdvancedCalculator";
import SimpleCalculator from "./components/Calculator/SimpleCalculator";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/advanced-calc" component={AdvancedCalculator} />
            <Route exact path="/simple-calc" component={SimpleCalculator} />
            <Route exact path="/news/single-news-0" component={SingleNews} />
            <Route exact path="/news/single-news-1" component={SingleNews} />
            <Route exact path="/news/single-news-2" component={SingleNews} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Routes;
