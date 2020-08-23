import React from "react";
import Navbar from "../js/NavBar";
import PageContent from "../js/PageContent";
import AppChildOne from "./AppChildOne";
import AppChildTwo from "./AppChildTwo";

const AppParent = () => {
  return (
    // any JSX element needs a wrapper, thats why its inside the parentheses
    <React.Fragment>
      <Navbar />
      <div id="page">
        <PageContent />
        {/*      <AppChild     /> */}
        <AppChildOne name="props 1" age="5004" />
        <AppChildTwo name="props 2" age="3025" />
      </div>
    </React.Fragment>
  );
};

export default AppParent;

// props stands for property
// You pass the parent information to the
// child by adding props in the child file
