import React from "react";

const AppChildOne = (props) => {
  return (
    <React.Fragment>
      <div id="propsContainerOne">
        {/* <h5>REACT CHILD</h5> */}
        <h5>
          Hi My name is {props.name}, and i am from planet {props.age}
        </h5>
      </div>
    </React.Fragment>
  );
};

export default AppChildOne;
