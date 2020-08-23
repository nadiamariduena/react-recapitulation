import React, { Component } from "react";

export default class ChildOne extends Component {
  render() {
    return (
      <p>
        Hello My name is {this.props.name} 
        and i am {this.props.age} olddd
      </p>
    );
  }





  
}

/* 



----------------
props first way
----------------



this is called stateless COMPONENT and
also FUNCTION component


import React from "react";

const ChildOne = (props) => {
  return (
    <React.Fragment>
      <p>
        Hi My name is {props.name} 
        and i am {props.age} old
      </p>
    </React.Fragment>
  );
};




export default ChildOne;



 */
