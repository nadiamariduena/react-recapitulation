import React from "react";

// this file is just to show the state less component
export default class StatelessCompo extends React.Component {
  render() {
    return <h4>HELLO STATELESS COMPONENT</h4>;
  }
}
//
//
//
//
// -------------------------------
//
//This is called class component but state full and that is because the whole section
// of the CONSTRUCTOR
// -------------------------------
//
//
/*



export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }




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

    //------------------------------------
    


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
  







*/
