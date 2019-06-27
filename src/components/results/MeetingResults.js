import React, { Component } from "react";
import PropTypes from "prop-types";
import CourseMeetingHeader from "./CourseMeetingHeader";
import ResultEntry from "./ResultEntry";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

export class MeetingResults extends Component {
  getTableStyle = () => {
    return {
      background: "#06101d",
      color: "white",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      width: '100%',
      textAlign: 'center'
    };
  };
  
  render() {
    return (
      <div>
        {this.props.courseMeetings.map(courseMeeting => (
          <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
            <div key={courseMeeting.id}>
              {/* Course Meeting Header */}
              <CourseMeetingHeader
                courseMeeting={{ courseTitle: courseMeeting.course.name }}
              />

              {/* Render accordion dropdown for each race at meeting */}
              {this.props.meetingResults
                .filter(i => i.courseMeetingId == courseMeeting.id)
                .sort(function(meeting1, meeting2){
                  return meeting1.raceNumber - meeting2.raceNumber
                })
                .map(meetingResult => (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <b style={{ color: "black" }}>
                          {meetingResult.raceTime.slice(11, 16)}
                        </b>{" "}
                        <a style={{ fontSize: "12px" }}>
                          {meetingResult.raceTitle}{" "}
                        </a>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {/* Render results entry for each course meeting */}
                        <table style={this.getTableStyle()}>
                        <tr>
                            <th>Place</th>
                            <th>Name</th> 
                            <th>Price</th>
                        </tr>
                        {meetingResult.resultEntries
                        .sort(function(entry1, entry2){
                          return entry1.position - entry2.position
                        })
                        .map(resultEntry => (
                          <ResultEntry resultEntry={resultEntry} />
                        ))}
                      </table>


                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
            </div>
          </Accordion>
        ))}
      </div>
    );
  }
}

export default MeetingResults;
