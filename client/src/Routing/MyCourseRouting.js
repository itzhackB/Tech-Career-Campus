import React, { useState } from 'react'
import {
    Route,
    Switch
} from "react-router-dom";
import CourseSchedule from '../Components/Pages/CourseSchedule/CourseScheduleComponent';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import DailySchedule from '../Components/Pages/DailySchedule/DailyScheduleComponent';
import StudentGradesComponent from '../Components/Pages/Grades/StudentGradesComponent'
import AdminGradesComponent from '../Components/Pages/Grades/AdminGradesComponent'
import Syllabus from '../Components/Pages/Syllabus/SyllabusComponent'

const MyCourseRouting = () => {
    const [tabName, setTabName] = useState('daily-schedule');
    // temp role for switch component
    const role = "Admin"
    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={tabName}
                onSelect={(k) => setTabName(k)}
                className="mb-3"
                transition   
            >
                <Tab eventKey="daily-schedule" title="לוז יומי" >
                    <DailySchedule />
                </Tab>
                <Tab eventKey="grades" title="ציונים">
                    <StudentGradesComponent />
                </Tab>
                <Tab eventKey="course-schedule" title="לוז חודשי" >
                    <CourseSchedule />
                </Tab>
                <Tab eventKey="syllabus" title="סילבוס" >
                    <Syllabus />
                </Tab>
                <Tab eventKey="staff" title="סגל" disabled={role === "admin" ? false : true} >
                    <AdminGradesComponent />
                </Tab>
            </Tabs>
        </>

    )
}
export default MyCourseRouting;