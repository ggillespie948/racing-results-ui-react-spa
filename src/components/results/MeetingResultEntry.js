import React, { Component } from "react";
import PropTypes from "prop-types";

export class MeetingResultEntry extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id, raceTime, raceTitle } = this.props.meetingResult;
    return (
      <div style={this.getStyle()}>
        <p>
          <b>{raceTime.slice(11,16)}</b>{"  "}

          {raceTitle}{"  "}

          <button
            style={deatilsBtnStyle}>V
          </button>{"  "}

        </p>
      </div>
    );
  }
}

MeetingResultEntry.propTypes = {
    meetingResult: PropTypes.object.isRequired
};

const deatilsBtnStyle = {
  background: "green",
  color: "white",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};


export default MeetingResultEntry;
