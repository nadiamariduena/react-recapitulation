import React from "react";
import List from "./components/List";

const App = () => {
  return (
    <React.Fragment>
      <div className="top">
        <h3>Hello List</h3>
        <List />
        <div className="video1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TLPxTKR7A70"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
