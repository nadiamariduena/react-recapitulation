import React from "react";
import Navbar from "./Nav-bar";
import PageContent from "./PageContent";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="page">
        
        <PageContent />
      </div>
    </div>
  );
};

export default App;
