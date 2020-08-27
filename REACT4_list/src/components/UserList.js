import React from "react";

const UserList = (props) => {
  const todos = props.list.map((item, i) => (
    <li key={i}>
      {item}
      <i
        onClick={() => {
          props.del(item);
        }}
      >
        {<ion-icon name="ice-cream-outline"></ion-icon>}{" "}
      </i>
    </li>
  ));

  return <ul>{todos}</ul>;
};

export default UserList;

//         {<ion-icon name="ice-cream-outline"></ion-icon>}{" "}
