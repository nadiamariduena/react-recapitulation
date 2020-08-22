import React from "react";

const AppChildOne = (props) => {
  return (
    <React.Fragment>
      <h5>
        Hi my name is {props.name} and i am {props.age} years old
      </h5>
    </React.Fragment>
  );
};

export default AppChildOne;
