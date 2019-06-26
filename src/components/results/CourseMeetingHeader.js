import React, { Component } from "react";

export class CourseMeetingHeader extends Component {
    getStyle = () => {
        return {
          background: "#071220",
          padding: "10px",
          color: "white",
          borderBottom: "1px grey dotted",
        };
      };
  
    render() {
    const { id, courseTitle } = this.props.courseMeeting;
    return (
      <div style={this.getStyle()}>
        <p>
          {" "}
          <b>{courseTitle}</b>
          {"  "}
        </p>
      </div>
    );
  }
}

export default CourseMeetingHeader;
