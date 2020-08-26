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
    /* this area will allow you to add whatever 
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
    // -----------------------------------
    /* To REMOVE the item the user clicked on */
    //------------------------------------
    //
    this.remove = (itemToRemove) => {
      const newArray = this.state.list.filter((item) => item != itemToRemove);

      // the cerise sur le gateau
      this.setState({
        list: newArray,
      });

      /*
      
                **  EXPLANATION **

      filter out that specific element the user click, and create
      a new array out of what last of the list.

       const newArray = this.state.list.filter((item) => item != itemToRemove);
      

      -------------------- 
      item != itemToRemove);

      -- IF THE ITEM does not equal to the item to be removed
      -- i want to create a new array out of the OLD one that 
      has everything but the one the user click on.

-------------



      */
    };

    //
    //
    // -----------------------------------
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
        <UserList list={this.state.list} del={this.remove} />
      </React.Fragment>
    );
  }
}
