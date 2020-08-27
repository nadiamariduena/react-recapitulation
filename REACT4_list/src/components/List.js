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
  // ---------
  // ---------
  render() {
    this.changeHandler = (e) => {
      this.setState({ userInput: e.target.value.trim() });
    };

    // ----------------
    // ----------------

    this.add = (e) => {
      e.preventDefault();

      let limit = 2;
      if (this.state.list.length >= limit) {
        return alert("too many tries");
      }

      const UserText = this.state.userInput;
      this.setState({
        userInput: "",
        list: [...this.state.list, UserText],
      });
    };

    // ----------------
    // ----------------
    // to remove
    // ----------------
    this.remove = (itemToRemove) => {
      const newArray = this.state.list.filter((item) => item !== itemToRemove);

      // the cerise sur le gateau
      this.setState({
        list: newArray,
      });
    };

    return (
      <React.Fragment>
        <form onSubmit={this.add} className="forma">
          <input
            className="inp-1"
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandler}
            placeholder="Type Something"
          />
          <button className="inp-2" type="Submit" value="Add">
            OK
          </button>
        </form>
        <UserList list={this.state.list} del={this.remove} />{" "}
      </React.Fragment>
    );
  }
}
