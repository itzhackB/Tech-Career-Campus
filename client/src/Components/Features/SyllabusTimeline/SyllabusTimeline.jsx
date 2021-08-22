import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import EditSyllabus from '../EditSyllabus/EditSyllabus';

export default function SyllabusTimeline({ syllabusData, role }) {
    const [editSyllabus, setEditSyllabus] = useState(false)

    return (
        <VerticalTimeline>
            <h1>{syllabusData?.name}</h1>
            {syllabusData?.CourseInformation.map((syllabusItem => {
                return (
                    <VerticalTimelineElement
                        key={syllabusItem.nameSubject}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <button disabled={role === "admin" ? false : true} onClick={() => setEditSyllabus(true)} >Edit</button>
                        {
                            editSyllabus ?
                                <EditSyllabus handle={setEditSyllabus} /> : " "
                        }
                        <h2 className="vertical-timeline-element-title">{syllabusItem.nameSubject}</h2>
                        <h4 className="vertical-timeline-element-subtitle">
                            <ul>
                                {syllabusItem.topics.map((topic, index) => {
                                    return <li key={index}>{topic.subject}</li>;
                                })}
                            </ul>
                        </h4>
                        <p>
                            {syllabusItem.summery}
                        </p>
                    </VerticalTimelineElement>)
            }))}

        </VerticalTimeline>
    )
}
