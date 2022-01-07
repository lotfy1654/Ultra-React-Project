import React from "react";

import Home from "./Home/Home";
import About from "./About/About";
import Profile from "./Profile/Profile";
import Portfolio from "./Portfolio/Portfolio";
import Socialm from "./SocialMedia/SocialMedia";
import Work from "./Work/Work";
import Footer from "./Footer/Footer";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socialm />
        <Footer />
      </div>
    );
  }
}

export default Index;
