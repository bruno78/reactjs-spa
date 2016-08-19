import React from "react";
import { Link } from "react-router";
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to My Page</h1>
        <link to="about" >about</link>
      </div>
    );
  }
}
