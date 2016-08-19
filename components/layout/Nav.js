import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true, // Insert collapse/toggle navbar without boostrap-jquery
    };
  }

  toggledCollapse() {
    const Collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    // Set the active page:
    const featuredClass = location.pathname === "/" ? "active" : "";
    const projectsClass = location.pathname.match(/^\/projects/) ? "active" : "";
    const aboutClass = location.pathname.match(/^\about/) ? "active" : "";
    const NavClass = collapsed = collapsed ? "collapse" : "";

    return (
      <header>
        <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand"><IndexLink to="/">React App</IndexLink></a>
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li class="featuredClass"><IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</Link></li>
                <li class="projectsClass"><Link to="projects" onClick={this.toggleCollapse.bind(this)}>About</Link></li>
                <li class="aboutClass"><Link to="about"  onClick={this.toggleCollapse.bind(this)}>Contact</Link></li>
            </ul>
          </div>
        </div>
        </nav>
      </header>
      // note: the class instead of className was maintened due to 'react-html-attrs' at webpack.config.js
    )
  }
}
