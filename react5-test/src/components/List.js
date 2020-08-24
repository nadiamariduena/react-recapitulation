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
  //   ----
  render() {
    //
    // -------------------
    // 2 connected to step 0
    this.changeHandel = (e) => {
      // the (e) is the data from changeHandel
      // 3
      this.setState({ userInput: e.target.value.trim() });
      // the e event itself has an object call target, and inside of it i have the value i am using.
      // trim( ) is to remove the empty space from what the user is typing
    };

    // --------------------
    //
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            //
            // 1 here i have value={this.state.userInput} what the user is typing and this is connected to userInput: "", inside the  this.state = {   this data will be assigned to VALUE step_3, but this step wont allow you yet to write, its the changeHandel that will make it possible.
            value={this.state.userInput}
            // 0 this will onChange={this.changeHandel} make that it will allow you to type, by changing the state on the CHANGE, you update the state in step _3 , by adding the method setState, this method is Asynchronous, it will not immediately change as it will first check, take the time and then apply the change task: this.setState
            onChange={this.changeHandel}
            placeholder="Type something"
          />
          <input type="Submit" value="Add" />
        </form>
        {/* ------------ */}
        <UserList list={this.state.list} />
      </React.Fragment>
    );
  }
}
