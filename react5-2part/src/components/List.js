import React from "react";
import UserList from "./UserList";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  // --------
  render() {
    this.changeHandel1 = (e) => {
      this.setState({ userInput: e.target.value.trim() });
    };

    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandel1}
            placeholder="Type something"
          />

          <input type="Submit" value="Add" />
        </form>
        <UserList list={this.state.list} />
      </React.Fragment>
    );
  }
}
