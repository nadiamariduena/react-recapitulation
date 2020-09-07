import React from "react";
import { display, add } from "./helpers";
import { write } from "fs";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  //
  //

  render() {
    //   this is function inside RENDER
    this.newUser = () => {
      console.log(
        "prefered way, this function has been build inside the render before the return"
      );
    };
    return (
      <React.Fragment>
        {this.newUser()}
        {add(5, 2)}
      </React.Fragment>
    );
  }
}

/*

import React from "react";
import { display, add } from "./helpers";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    display("Melissa plot");
    this.handleSubmit = this.handleSubmit.bind(this); //bind
  }

  print = () => {
    console.log("I am a function without this. and dont need to bind ");
  };

  //   -----------------
  //   BIND
  //   -----------------

  handleSubmit() {
    //   THIS FUNCTION needed to be bind
    console.log("HI BINDING KKKK");
  }

  //
  //

  render() {
   
    //   this is function inside RENDER
    this.newUser = () => {
      console.log(
        "prefered way, this function has been build inside the render before the return"
      );
    };
    return (
      <React.Fragment>
        <h1>Hello Helpers and Binding </h1>
        {
          // <list fun={this.add}></list>
          this.newUser()
        }
        {this.handleSubmit()}
        {add(5, 2)}
     
      </React.Fragment>
    );
  }
}








*/

/*

                                                            ** HELPERS **

                                     Helpers are  good way to organize your code by 
                                     sending the functions to another file and then 
                                     importing it to the component you want.

                                When you have a lot of functions, you can add a file called 
                                "helpers.js" into the src FOLDER
                                This File will contain whatever function you want and then import it to the
                                component you will use it, like so.

                                First way:
                                Start by creating the helpers.js , add the following:

                                                const display = (str) => {
                                                    console.log(str);
                                                    };


                                                    // --------------


                                                    const add = (x, y) => {
                                                    return ` the sum is ${x + y} `;
                                                    };



                                               **   DONT FORGET TO EXPORT the 2 functions
                                                    export { display, add };

                                                    Now import the functions like so:
                                                    import { display } from "./helpers";

                                                If you notice there s only one function "display", the other
                                                we dont import it because we dont need it now.

                                                Now add the function where you want it to appear

                                                                      render() {
                                                                        //                      -******* 
                                                                        display("melissa");
                                                                                                -*******
                                                                        return (
                                                                        <React.Fragment>
                                                                            <h1>Hello Helpers and Binding </h1>
                                                                        </React.Fragment>
                                                                        );


                                                                      //  to call it, type the following :
                                                                                
                                                                             {add(3,5)}     

                                                                    // when you use this version you dont need 
                                                                    the keyword "this." like you will need and see 
                                                                    in the bind version below

                                                                    }
                                                                  
                                                        Now check the console in the browser


                                        ---------------------------------------------------------
                                        ---------------------------------------------------------


                                                             ***     BIND ******



                                             SECOND way:
                                                         
                                                
                                              Bind is the OLD way, apparently you rarely come accross
                                              this but its good to know.




                         Bind means that you always need to BIND the function with the constructor
                         -- DONT FORGET that you have to add 'this.' in the constructor and below the 'super'.

                                                constructor(props) {
                                                    super(props);
                                                    // display("Melissa");
                                                    this.handleSubmit = this.handleSubmit.bind(this);
                                                }


                         --  YOU HAVE TO have 'super' to use 'this.'
                         -- AND THEN you need to mention the function you want to BIND/JOINT to the 'this.'


                             ***         this.handleSubmit = this.handleSubmit.bind(this);
 








     */

/*



     NOTES :

          What I want to do is when I type some text in an input field, it should appear in another place realtime.

          https://stackoverflow.com/questions/42217579/data-binding-in-react




            <div className="post_input">
                <input className='post_data_input_overlay' placeholder="Ask your question here" ref="postTxt"/>
            </div>



----------


class App extends React.Component {
  constructor() {
    super();
    this.state = {value : ''}
  }
  handleChange = (e) =>{ 
    this.setState({value: e.target.value});
  }
  render() {
    return (
    <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <div>{this.state.value}</div>
    </div>
   )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));

     */
