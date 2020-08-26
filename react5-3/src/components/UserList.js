import React from "react";

const UserList = (props) => {
  const todos = props.list.map((item, i) => (
    <li key={i}>
      {item}
      <i
        onClick={() => {
          // console.log(item);
          props.del(item);
        }}
      >
        X
      </i>
    </li>
  ));

  return <ul>{todos}</ul>;
};

export default UserList;

/**
the process to remove the item you clicked


<i
        onClick={() => {
          console.log(item);
          // props.del(item);
        }}
      >


        X


      </i>
 */
