import React, { Component } from "react";

export default class ChildTwo extends Component {
  render() {
    return (
      <p>
        Lorem I live in {this.props.city} dolor sit, amet consectetur
        adipisicing elit. Facere, similique illo suscipit nisi tempore fugiat!
        Voluptates sit architecto dolor fuga.<br></br> An my favorite food is{" "}
        {this.props.food}
      </p>
    );
  }
}
