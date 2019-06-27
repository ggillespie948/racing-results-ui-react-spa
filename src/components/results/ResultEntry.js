import React, { Component } from "react";
import PropTypes from "prop-types";

export class ResultEntry extends Component {
  

  render() {
    const { id, horseName, horseNumber, place, position, priceDecimal, priceFraction } = this.props.resultEntry;
    return (
        <tr>
            <td>{place}</td>
            <td>{horseName}</td> 
            <td>{priceFraction}</td>
        </tr>
    );
  }
}

ResultEntry.propTypes = {
    resultEntry: PropTypes.object.isRequired
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


export default ResultEntry;
