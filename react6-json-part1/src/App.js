import React from "react";
import Data from "./data.json";
/*



1_You will map on the array called: Data in reference to the file json
2_ and when you process it by putting it like so: ((obj)  inside the parenthesis, it means that
it will process it ONE at the time.

*/
const fileData = Data.map((obj) => {
  const { id, name, address, img, tag, description } = obj;
  return (
    <div id="top" key={id}>
      Hi i am {name}, i live in {address}
      <img className="imgBox" src={img} alt={tag} />
      <p>{description}</p>
    </div>
  );
});
// ------------------
//
// ------------------
//
//
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>HELLO JSON INTRODUCTION</h1>
        {fileData}
      </React.Fragment>
    );
  }
}
