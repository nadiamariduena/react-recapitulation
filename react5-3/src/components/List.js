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
    //
    //
    //
    // -----------------------------------
    //
    this.changeHandel1 = (e) => {
      this.setState({ userInput: e.target.value.trim() });
    };

    //
    //
    //
    //
    // -----------------------------------
    /*    this area will allow you to add whatever 
     the user types, to the list     */
    //------------------------------------
    //
    this.add = (e) => {
      e.preventDefault();
      const userText = this.state.userInput;
      this.setState({
        userInput: "",

        list: [...this.state.list, userText],
      });
    };
    //
    //
    //
    // -----------------------------------
    //
    //
    //
    return (
      <React.Fragment>
        <form onSubmit={this.add}>
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
