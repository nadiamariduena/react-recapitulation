import React from "react";
import AppChildOne from "./AppChildOne";

const AppParent = () => {
  return (
    <React.Fragment>
      <div id="page">
        <AppChildOne name="Ludovico" age="2000" />
      </div>
    </React.Fragment>
  );
};

export default AppParent;
