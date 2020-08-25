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
      //console.log(e.target.value);
      // the console.log will help yoou to see in the browser what you are typing
      this.setState({ userInput: e.target.value.trim() });
      // console.log(this.state.userInput);
    };
    // ---this part with the prevent defaul is outside the changeHandel 1 because
    // it doesnt concern this function anymore.
    //
    //
    //
    //
    // -----------------------------------
    // this area will allow you to add whatever the user types, to the list
    //------------------------------------
    //
    this.add = (e) => {
      //99% when you are working with forms you need your event (e)
      // Everytime you work with forms, you will always use:  prevent default
      //  the prevent default task is to prevent that the form send you to another page when you click on the button.

      e.preventDefault();
      const userText = this.state.userInput;
      // after the user type ENTER, i want the useInput empty and then add what the user typed  to the list
      this.setState({
        //
        /* i want to update the userInput with the new value 
         of it which is nothing: userInput: '',
         */
        userInput: "",
        //
        // the next step: i want UPDATE THE LIST
        // to keep the old array which is state list, spread operator is the best friend
        // as it will allow you to add more data to the already existent list, the new added element will be the: userText
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
