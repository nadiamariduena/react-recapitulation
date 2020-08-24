import React from "react";

const UserList = (props) => {
  const todos = props.list.map((item, i) => <li key={i}>{item}</li>);
  return <ul>{todos}</ul>;
  //
  //
};

export default UserList;
