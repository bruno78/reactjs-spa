import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { project } = params;
    const { date, filter} = query;
    return (
      <div>
        <h1>Archives ({article})</h1>
        <h4>date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}
