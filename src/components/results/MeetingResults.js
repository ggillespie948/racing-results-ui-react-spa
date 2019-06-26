import React, { Component } from 'react'
import CourseMeetingHeader from './CourseMeetingHeader'

export class MeetingResults extends Component {
    render() {
        return (
          <div>
            {this.props.courseMeetings.map(courseMeeting => (
                <div>
                <CourseMeetingHeader courseMeeting={{ courseTitle: courseMeeting.course.name }} />
                {/* ADD: Sort the props array into categories, foeach with a course meeting header  */}
                </div>
            ))}
        </div>
        );
      }
    }

export default MeetingResults
