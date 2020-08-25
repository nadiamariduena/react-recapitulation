import React from "react";
import List from "./components/List";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello Ananas App</h1>
        <List />
      </React.Fragment>
    );
  }
}
