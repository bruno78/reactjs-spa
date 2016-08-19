import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, "/");
  }

  render() {
    return (
      <div>
        <h1>Welcome to My Page</h1>
        {this.props.children}
        <Link to="about"><button class="btn btn-success">about</button></Link>
        <Link to="contact"><button class="btn btn-success">contact</button></Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}
