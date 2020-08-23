import React from "react";

const AppChildTwo = (props) => {
  return (
    <React.Fragment>
      <div id="propsContainerTwo">
        <h5>
          Hi My name is {props.name}, and i am from planet {props.age}
        </h5>
      </div>
    </React.Fragment>
  );
};

export default AppChildTwo;
