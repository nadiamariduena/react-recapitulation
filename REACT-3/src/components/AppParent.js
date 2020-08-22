import React from "react";
import Navbar from "../js/Nav-bar";
import PageContent from "../js/PageContent";
import AppChildOne from "./AppChildOne";

const AppParent = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div id="page">
        <PageContent />
        <AppChildOne name="Meli" planet="moon" />
      </div>
    </React.Fragment>
  );
};

export default AppParent;
