import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, "/");
  }

  render() {
    return (
      <div>
        <Nav location={location} />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1>Newsland <small>where you find the truth</small></h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
