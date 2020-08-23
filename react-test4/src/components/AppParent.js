import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const AppParent = () => {
  return (
    <React.Fragment>
      <ChildOne name="Ludovico" age="4500" />
      <ChildTwo city="Berlin" food="patacones" />
    </React.Fragment>
  );
};

export default AppParent;

/*  






----------------
props first way
----------------



this is called stateless COMPONENT and
also FUNCTION component



import React from "react";
import ChildOne from "./Child.One";

const AppParent = () => {
  return (
    <React.Fragment>
      <ChildOne name="Melissa" 
      age="4500" />
    </React.Fragment>
  );
};




export default AppParent;


 */
