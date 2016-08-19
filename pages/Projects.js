import React from "react";

export default class Projects extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { project } = params;
    const { date, filter} = query;
    return (
      <div>
        <h1>Projects ({project})</h1>
        <h4>date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}
