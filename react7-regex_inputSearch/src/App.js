import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      result: "",
    };
    //
    //
    this.HandleChange = (e) => {
      this.setState({
        userInput: e.target.value,
      });
    };
    //
    //
    this.validate = (email) => {
      const regex = /^[A-Za-z\.\-\_]+@\w+\.[A-Za-z]{1,6}$/;
      return regex.test(email);
    };
    //
    //
    this.handleSubmit = (e) => {
      e.preventDefault();
      const entry = this.state.userInput;
      this.setState({
        result: this.validate(entry) ? "valid" : "invalid",
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="containerBox">
          <div className="content">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.userInput}
                onChange={this.HandleChange}
                placeholder="type something"
              />
              <input className="btn" type="Submit" value="Submit" />
            </form>

            <div className="emailBox">Your Email is {this.state.result}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

/*


1_  ))
When you have it like so: 

    this.HandleChange = () => {}; 
    this.handleSubmit = (e) => {};

            <input type="text" value={this.state.userInput} />
            <input type="Submit" value="Check"/>

you cannot write!

----------------
YOU WILL BE ALLOWED TO WRITE only when you add the setState.like so:
2_  ))

 //what is happening is that you will change the value={this.state.userInput}
 if you notice, from the moment you use the state and that you want to
 change this state, you will always need the setState.


    this.HandleChange = (e) => {
*****      this.setState({
        userInput: e.target.value,
      });
    };

    this.handleSubmit = (e) => {};
  }



                            <input
                            type="text"
                            value={this.state.userInput}
                            onChange={this.HandleChange}
                            />
                            <input type="Submit" value="Check" />



      ------------------
             REGEX 
       ------------------
       



   this.validate = (email) => {
      // https://regex101.com/
      // ANY REGEX expression should be contained between 2 forward slashes like so / bla /
      // the regex should look red after you post it between the slashes
      const regex = /^[A-Za-z\.\-\_]+@\w+\.[A-Za-z]{1,6}$/;
           return regex.test(email);
    
           ***  TO CALL THIS FUNCTION you need to go to : this.handleSubmit = (e) => {};
    };

       ------------------
    CALL THE validate FUNCTION
       ------------------


    this.handleSubmit = (e) => {
      e.preventDefault();
      //   Always when you are working with form, use e.preventDefault

      const entry = this.state.userInput;
      this.setState({

                **    here you will call the result that is linked to this:
                **    <div>Your Email is {this.state.result}</div>

        result: this.validate(entry) ? "valid" : "invalid",

                ** ONCE you call this "result" you will give it a NEW value like so
                                  this.validate(entry) 

                the value will be the "validate" function in line 19, then you
                want to send your ENTRY : line 32

                                   validate(entry)
                
                if the userInput comeback with true which means that he typed
                an actual email with the specifications from the regex, ONLY 
                if that was TRUE, it will show "valid" , because its a valid answer,
                if the user typed for example "blabla" which is not an actual email
                ,it will comeback with INVALID.
        
        //
      });
    };







*/

/*



Before cleaning it



import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      result: "",
    };

    //1))
    this.HandleChange = (e) => {
      this.setState({
        userInput: e.target.value,
      });
    };
    //
    //2))
    this.validate = (email) => {
      // https://regex101.com/
      // ANY REGEX expression should be contained between 2 forward slashes like so / bla /
      // the regex should look red after you post it between the slashes
      const regex = /^[A-Za-z\.\-\_]+@\w+\.[A-Za-z]{1,6}$/;
      return regex.test(email);
      //   TO CALL THIS FUNCTION you need to go to : this.handleSubmit = (e) => {};
    };
    //
    //3))
    this.handleSubmit = (e) => {
      e.preventDefault();
      //   Always when you are working with form, use e.preventDefault
      const entry = this.state.userInput;
      this.setState({
        //   here you will call the result that is linked to this: <div>Your Email is {this.state.result}</div>
        result: this.validate(entry) ? "valid" : "invalid",
        ONCE you call this "result" you will give it a NEW value, 
        the value will be the "validate" function in line 19, then you
        want to send your ENTRY : line 32
        
        if the userInput comeback with true which means that he typed
        an actual email with the specifications from the regex, ONLY 
        if that was TRUE, it will show "valid" , because its a valid answer,
        if the user typed for example "blabla" which is not an actual email
        ,it will comeback with INVALID
        
       
    });
};
}

render() {
return (
  <React.Fragment>
    <div className="page">
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.HandleChange}
        />
        <input type="Submit" value="Check" />
      </form>

      <div>Your Email is {this.state.result}</div>
    </div>
  </React.Fragment>
);
}
}





 */
