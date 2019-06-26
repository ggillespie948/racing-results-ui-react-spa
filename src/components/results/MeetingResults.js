import React, { Component } from 'react'
import PropTypes from "prop-types";
import CourseMeetingHeader from './CourseMeetingHeader'
import MeetingResultEntry from './MeetingResultEntry';

export class MeetingResults extends Component {
    render() {
        return (
          <div>
            {this.props.courseMeetings.map(courseMeeting => (
                <div key={courseMeeting.id}>
                <CourseMeetingHeader  courseMeeting={{ courseTitle: courseMeeting.course.name }} />
                {this.props.meetingResults
                .filter(i=>i.courseMeetingId == courseMeeting.id)
                .map(meetingResult => (
                        <MeetingResultEntry
                        key={meetingResult.id}
                        meetingResult={meetingResult}
                        />
                    )
                )}
                </div>
            ))}
        </div>
        );
      }
    }

export default MeetingResults
